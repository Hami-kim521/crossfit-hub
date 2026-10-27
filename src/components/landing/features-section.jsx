import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const FEATURES = [
  {
    icon: <GroupsIcon fontSize="large" />,
    title: '소그룹 코칭',
    description: '클래스당 최대 12명. 코치가 한 명 한 명의 자세를 직접 봐드립니다.',
  },
  {
    icon: <SportsGymnasticsIcon fontSize="large" />,
    title: '맞춤 스케일링',
    description: '체력과 경험에 맞춰 무게와 동작을 조절해 누구나 안전하게 운동합니다.',
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: '기록으로 성장',
    description: '매일의 WOD 기록을 쌓고, 나의 변화를 눈으로 확인하세요.',
  },
];

/**
 * 랜딩페이지 특징 소개 영역
 *
 * Example usage:
 * <FeaturesSection />
 */
function FeaturesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, textAlign: 'center', mb: 5 }}
        >
          왜 크로스핏 허브일까요?
        </Typography>
        <Grid container spacing={3}>
          { FEATURES.map((feature) => (
            <Grid key={ feature.title } size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={ 2 }
                sx={{ p: 4, height: '100%', textAlign: 'center', borderRadius: 3 }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{ feature.icon }</Box>
                <Typography variant="h3" sx={{ fontSize: '1.4rem', fontWeight: 700, mb: 1 }}>
                  { feature.title }
                </Typography>
                <Typography sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  { feature.description }
                </Typography>
              </Paper>
            </Grid>
          )) }
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
