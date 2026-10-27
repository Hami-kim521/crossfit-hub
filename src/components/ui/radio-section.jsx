import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

const OPTIONS = ['사과', '바나나', '포도', '딸기'];

/**
 * RadioSection 컴포넌트
 * RadioGroup 으로 단일 선택 라디오 버튼을 제공하고,
 * 선택된 옵션을 화면에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <RadioSection />
 */
function RadioSection() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="section"
      sx={{ width: '100%', px: { xs: 2, md: 3 }, py: { xs: 4, md: 8 } }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Radio
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormControl>
          <FormLabel id="radio-section-label">좋아하는 과일</FormLabel>
          <RadioGroup
            aria-labelledby="radio-section-label"
            name="radio-section-group"
            value={ value }
            onChange={ handleChange }
          >
            { OPTIONS.map((option) => (
              <FormControlLabel
                key={ option }
                value={ option }
                control={ <Radio /> }
                label={ option }
              />
            )) }
          </RadioGroup>
        </FormControl>
        <Box sx={{ mt: 2, color: 'text.secondary', fontSize: '1rem' }}>
          선택된 옵션: { value || '없음' }
        </Box>
      </Box>
    </Box>
  );
}

export default RadioSection;
