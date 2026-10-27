import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ITEMS = Array.from({ length: 30 }, (_, index) => `스크롤 아이템 ${ index + 1 }`);
const SHOW_BUTTON_OFFSET = 100;

/**
 * ScrollSection 컴포넌트
 * 높이 300px 의 스크롤 가능한 Paper 영역에 많은 아이템을 보여주고,
 * 스크롤 위치가 일정 값을 넘으면 Top 이동 버튼을 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ScrollSection />
 */
function ScrollSection() {
  const containerRef = useRef(null);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

  const handleScroll = (event) => {
    setIsTopButtonVisible(event.currentTarget.scrollTop > SHOW_BUTTON_OFFSET);
  };

  const handleTopClick = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
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
        Scroll
      </Typography>
      <Box sx={{ position: 'relative', maxWidth: 'sm', mx: 'auto' }}>
        <Paper
          ref={ containerRef }
          variant="outlined"
          onScroll={ handleScroll }
          sx={{ height: 300, overflowY: 'auto', p: 2 }}
        >
          { ITEMS.map((item) => (
            <Box key={ item } sx={{ py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
              { item }
            </Box>
          )) }
        </Paper>
        <Fab
          size="small"
          color="primary"
          aria-label="맨 위로 이동"
          onClick={ handleTopClick }
          sx={{
            position: 'absolute',
            right: 24,
            bottom: 16,
            opacity: isTopButtonVisible ? 1 : 0,
            visibility: isTopButtonVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.3s, visibility 0.3s',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Box>
  );
}

export default ScrollSection;
