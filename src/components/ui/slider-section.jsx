import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MARKS = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

/**
 * SliderSection 컴포넌트
 * 0~100 범위의 Slider 에 구간 표시(marks)를 추가하고,
 * 현재 값을 실시간으로 화면에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SliderSection />
 */
function SliderSection() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        Slider
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto', px: 2 }}>
        <Slider
          aria-label="값 선택"
          value={ value }
          min={ 0 }
          max={ 100 }
          step={ 1 }
          marks={ MARKS }
          valueLabelDisplay="auto"
          onChange={ handleChange }
        />
        <Box sx={{ mt: 2, textAlign: 'center', color: 'text.secondary', fontSize: '1rem' }}>
          현재 값: { value }
        </Box>
      </Box>
    </Box>
  );
}

export default SliderSection;
