import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const VARIANTS = ['standard', 'outlined', 'filled'];

/**
 * InputSection 컴포넌트
 * variant(standard, outlined, filled) 별 TextField 를 보여주고,
 * 입력한 값을 각 필드 아래에 실시간으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <InputSection />
 */
function InputSection() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }));
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
        Input
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
        { VARIANTS.map((variant) => (
          <Grid key={ variant } size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 1, textAlign: 'center', color: 'text.secondary' }}
            >
              { variant }
            </Typography>
            <TextField
              fullWidth
              variant={ variant }
              label={ `${ variant } 라벨` }
              placeholder={ `${ variant } 입력창` }
              value={ values[variant] }
              onChange={ handleChange(variant) }
            />
            <Box sx={{ mt: 1, color: 'text.secondary', fontSize: '0.875rem', wordBreak: 'break-all' }}>
              입력값: { values[variant] }
            </Box>
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}

export default InputSection;
