import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SLIDES = [
  { title: '슬라이드 1', background: 'linear-gradient(135deg, #42a5f5, #1565c0)' },
  { title: '슬라이드 2', background: 'linear-gradient(135deg, #66bb6a, #2e7d32)' },
  { title: '슬라이드 3', background: 'linear-gradient(135deg, #ffa726, #e65100)' },
  { title: '슬라이드 4', background: 'linear-gradient(135deg, #ab47bc, #6a1b9a)' },
];

/**
 * SwipeSection 컴포넌트
 * react-swipeable 로 터치/마우스 좌우 스와이프를 감지하여 슬라이드를 전환한다.
 * 이전/다음 버튼과 현재 슬라이드 인덱스(예: 1 / 4)도 함께 제공한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SwipeSection />
 */
function SwipeSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

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
        Swipe
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
        <Box
          { ...handlers }
          sx={{
            overflow: 'hidden',
            borderRadius: 2,
            cursor: 'grab',
            userSelect: 'none',
            '&:active': { cursor: 'grabbing' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${ index * 100 }%)`,
              transition: 'transform 0.4s ease',
            }}
          >
            { SLIDES.map((slide) => (
              <Box
                key={ slide.title }
                sx={{
                  flex: '0 0 100%',
                  height: { xs: 200, md: 280 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: slide.background,
                  color: 'common.white',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 'bold',
                }}
              >
                { slide.title }
              </Box>
            )) }
          </Box>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <IconButton aria-label="이전 슬라이드" onClick={ handlePrev } disabled={ index === 0 }>
            <ChevronLeftIcon />
          </IconButton>
          <Box sx={{ minWidth: 60, textAlign: 'center', color: 'text.secondary', fontSize: '1rem' }}>
            { index + 1 } / { SLIDES.length }
          </Box>
          <IconButton
            aria-label="다음 슬라이드"
            onClick={ handleNext }
            disabled={ index === SLIDES.length - 1 }
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SwipeSection;
