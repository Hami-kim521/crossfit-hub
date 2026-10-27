import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const OPTIONS = ['사과', '바나나', '포도', '딸기', '오렌지', '수박'];

/**
 * DropdownSection 컴포넌트
 * MUI Select 로 여러 과일 중 하나를 선택하고, 선택된 값을 실시간으로 화면에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <DropdownSection />
 */
function DropdownSection() {
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
        Dropdown
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
        <FormControl fullWidth>
          <InputLabel id="dropdown-section-label">과일</InputLabel>
          <Select
            labelId="dropdown-section-label"
            id="dropdown-section-select"
            value={ value }
            label="과일"
            onChange={ handleChange }
          >
            { OPTIONS.map((option) => (
              <MenuItem key={ option } value={ option }>
                { option }
              </MenuItem>
            )) }
          </Select>
        </FormControl>
        <Box sx={{ mt: 2, textAlign: 'center', color: 'text.secondary', fontSize: '1rem' }}>
          선택된 값: { value || '없음' }
        </Box>
      </Box>
    </Box>
  );
}

export default DropdownSection;
