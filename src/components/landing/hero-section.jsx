import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * 랜딩페이지 히어로 영역
 *
 * Props:
 * @param {function} onClickCta - 체험 신청 버튼 클릭 시 실행할 함수 [Required]
 *
 * Example usage:
 * <HeroSection onClickCta={ handleScrollToJoin } />
 */
function HeroSection({ onClickCta }) {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(160deg, #111 0%, #1c1c1c 55%, #3a1a05 100%)',
        color: '#fff',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
        >
          CROSSFIT HUB
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.25rem', md: '4rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            my: 2,
          }}
        >
          어제의 나를 넘어서는
          <br />
          가장 확실한 방법
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'grey.400',
            mb: 4,
          }}
        >
          초보자부터 선수까지, 코치와 함께 하는 소그룹 크로스핏.
          <br />
          지금 무료 체험으로 시작해 보세요.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={ onClickCta }
          sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 700 }}
        >
          무료 체험 신청
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
