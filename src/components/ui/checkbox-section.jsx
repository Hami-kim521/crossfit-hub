import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

const OPTIONS = ['사과', '바나나', '포도', '딸기'];

/**
 * CheckboxSection 컴포넌트
 * 다중 선택 체크박스와 전체 선택/해제 기능을 제공하고,
 * 선택된 항목의 개수를 실시간으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <CheckboxSection />
 */
function CheckboxSection() {
  const [checked, setChecked] = useState([]);

  const isAllChecked = checked.length === OPTIONS.length;
  const isIndeterminate = checked.length > 0 && !isAllChecked;

  const handleAllChange = (event) => {
    setChecked(event.target.checked ? OPTIONS : []);
  };

  const handleChange = (option) => (event) => {
    setChecked((prev) => (
      event.target.checked ? [...prev, option] : prev.filter((item) => item !== option)
    ));
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
        Checkbox
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormControlLabel
          label="전체 선택"
          control={
            <Checkbox
              checked={ isAllChecked }
              indeterminate={ isIndeterminate }
              onChange={ handleAllChange }
            />
          }
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 3 }}>
          { OPTIONS.map((option) => (
            <FormControlLabel
              key={ option }
              label={ option }
              control={
                <Checkbox
                  checked={ checked.includes(option) }
                  onChange={ handleChange(option) }
                />
              }
            />
          )) }
        </Box>
        <Box sx={{ mt: 2, color: 'text.secondary', fontSize: '1rem' }}>
          선택된 항목: { checked.length } / { OPTIONS.length }개
        </Box>
      </Box>
    </Box>
  );
}

export default CheckboxSection;
