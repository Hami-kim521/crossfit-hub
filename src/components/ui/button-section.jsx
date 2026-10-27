import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * ButtonSection 컴포넌트
 * variant(contained, outlined, text) x color(primary, secondary, error) 버튼을 보여주고,
 * 클릭 시 어떤 버튼인지 알림창(Snackbar + Alert)으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ButtonSection />
 */
function ButtonSection() {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (variant, color) => {
    setMessage(`${ variant } / ${ color } 버튼을 클릭했습니다.`);
    setIsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
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
        Button
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
              { COLORS.map((color) => (
                <Button
                  key={ color }
                  variant={ variant }
                  color={ color }
                  onClick={ () => handleClick(variant, color) }
                >
                  { color }
                </Button>
              )) }
            </Box>
          </Grid>
        )) }
      </Grid>
      <Snackbar
        open={ isOpen }
        autoHideDuration={ 3000 }
        onClose={ handleClose }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={ handleClose } severity="info" variant="filled" sx={{ width: '100%' }}>
          { message }
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ButtonSection;
