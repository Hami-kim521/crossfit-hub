import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-32px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(-12px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const boxSx = {
  width: 96,
  height: 96,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'common.white',
  fontWeight: 'bold',
};

/**
 * AnimationSection 컴포넌트
 * MUI 트랜지션(Fade, Grow, Slide)과 CSS 애니메이션(keyframes bounce, spin)을
 * 버튼 클릭으로 재생한다. 마지막 카드는 Grow 트랜지션과 CSS spin 애니메이션을 조합한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <AnimationSection />
 */
function AnimationSection() {
  const [isFade, setIsFade] = useState(true);
  const [isGrow, setIsGrow] = useState(true);
  const [isSlide, setIsSlide] = useState(true);
  const [isCombo, setIsCombo] = useState(true);
  const [bounceCount, setBounceCount] = useState(0);

  const cards = [
    {
      title: 'Fade',
      buttonLabel: isFade ? '숨기기' : '보이기',
      onClick: () => setIsFade((prev) => !prev),
      content: (
        <Fade in={ isFade } timeout={ 600 }>
          <Box sx={{ ...boxSx, bgcolor: 'primary.main' }}>Fade</Box>
        </Fade>
      ),
    },
    {
      title: 'Grow',
      buttonLabel: isGrow ? '숨기기' : '보이기',
      onClick: () => setIsGrow((prev) => !prev),
      content: (
        <Grow in={ isGrow } timeout={ 600 }>
          <Box sx={{ ...boxSx, bgcolor: 'secondary.main' }}>Grow</Box>
        </Grow>
      ),
    },
    {
      title: 'Slide',
      buttonLabel: isSlide ? '숨기기' : '보이기',
      onClick: () => setIsSlide((prev) => !prev),
      content: (
        <Slide in={ isSlide } direction="up" timeout={ 600 } mountOnEnter unmountOnExit>
          <Box sx={{ ...boxSx, bgcolor: 'success.main' }}>Slide</Box>
        </Slide>
      ),
    },
    {
      title: 'CSS Bounce',
      buttonLabel: '재생',
      onClick: () => setBounceCount((prev) => prev + 1),
      content: (
        <Box
          key={ bounceCount }
          sx={{
            ...boxSx,
            bgcolor: 'warning.main',
            animation: bounceCount > 0 ? `${ bounce } 0.8s ease` : 'none',
          }}
        >
          Bounce
        </Box>
      ),
    },
    {
      title: 'Grow + CSS Spin',
      buttonLabel: isCombo ? '숨기기' : '보이기',
      onClick: () => setIsCombo((prev) => !prev),
      content: (
        <Grow in={ isCombo } timeout={ 600 }>
          <Box
            sx={{
              ...boxSx,
              bgcolor: 'error.main',
              animation: isCombo ? `${ spin } 1s ease-in-out` : 'none',
            }}
          >
            Combo
          </Box>
        </Grow>
      ),
    },
  ];

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
        Animation
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
        { cards.map((card) => (
          <Grid key={ card.title } size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 1, textAlign: 'center', color: 'text.secondary' }}
            >
              { card.title }
            </Typography>
            <Box
              sx={{
                height: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              { card.content }
            </Box>
            <Box sx={{ mt: 1, textAlign: 'center' }}>
              <Button variant="outlined" onClick={ card.onClick }>
                { card.buttonLabel }
              </Button>
            </Box>
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}

export default AnimationSection;
