import { useState } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { supabase } from '../../lib/supabase.js';

const INITIAL_FORM = { name: '', phone: '', message: '' };

/**
 * 랜딩페이지 무료 체험 신청 폼 (Supabase leads 테이블에 저장)
 *
 * Props:
 * @param {object} sectionRef - 스크롤 이동용 ref [Optional]
 *
 * Example usage:
 * <JoinSection sectionRef={ joinRef } />
 */
function JoinSection({ sectionRef }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const { error } = await supabase.from('leads').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim() || null,
    });

    setIsSubmitting(false);
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm(INITIAL_FORM);
  };

  return (
    <Box
      component="section"
      ref={ sectionRef }
      sx={{ py: { xs: 4, md: 8 }, scrollMarginTop: 16 }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, textAlign: 'center', mb: 1 }}
        >
          무료 체험 신청
        </Typography>
        <Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
          연락처를 남겨주시면 코치가 확인 후 연락드립니다.
        </Typography>

        <Box
          component="form"
          onSubmit={ handleSubmit }
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="이름"
            name="name"
            value={ form.name }
            onChange={ handleChange }
            required
            slotProps={{ htmlInput: { maxLength: 50 } }}
          />
          <TextField
            label="연락처"
            name="phone"
            type="tel"
            value={ form.phone }
            onChange={ handleChange }
            required
            placeholder="010-0000-0000"
            slotProps={{ htmlInput: { minLength: 8, maxLength: 20 } }}
          />
          <TextField
            label="문의 내용 (선택)"
            name="message"
            value={ form.message }
            onChange={ handleChange }
            multiline
            rows={ 3 }
            slotProps={{ htmlInput: { maxLength: 500 } }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={ isSubmitting }
            sx={{ py: 1.5, fontWeight: 700 }}
          >
            { isSubmitting ? '접수 중...' : '신청하기' }
          </Button>
          { status === 'success' && (
            <Alert severity="success">신청이 접수되었습니다. 곧 연락드릴게요!</Alert>
          ) }
          { status === 'error' && (
            <Alert severity="error">접수에 실패했습니다. 잠시 후 다시 시도해 주세요.</Alert>
          ) }
        </Box>
      </Container>
    </Box>
  );
}

export default JoinSection;
