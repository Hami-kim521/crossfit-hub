import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const CARDS = [
  {
    title: '카드 하나',
    description: '첫 번째 카드의 설명입니다. 카드에 마우스를 올리면 그림자가 커집니다.',
    background: 'linear-gradient(135deg, #42a5f5, #1565c0)',
  },
  {
    title: '카드 둘',
    description: '두 번째 카드의 설명입니다. CardMedia, CardContent, CardActions 로 구성됩니다.',
    background: 'linear-gradient(135deg, #66bb6a, #2e7d32)',
  },
  {
    title: '카드 셋',
    description: '세 번째 카드의 설명입니다. Grid 로 반응형 배치를 적용했습니다.',
    background: 'linear-gradient(135deg, #ffa726, #e65100)',
  },
];

/**
 * CardSection 컴포넌트
 * CardMedia, CardContent, CardActions 로 구성된 카드 3개를 Grid 로 배치하고,
 * 호버 시 elevation(그림자)이 커지는 효과를 적용한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <CardSection />
 */
function CardSection() {
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
        Card
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
        { CARDS.map((card) => (
          <Grid key={ card.title } size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={ 1 }
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': { boxShadow: 8, transform: 'translateY(-4px)' },
              }}
            >
              <CardMedia
                component="div"
                role="img"
                aria-label={ card.title }
                sx={{ height: 140, background: card.background }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  { card.title }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  { card.description }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히</Button>
                <Button size="small">공유</Button>
              </CardActions>
            </Card>
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}

export default CardSection;
