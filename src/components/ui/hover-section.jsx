import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const BASE_SX = {
  width: '100%',
  height: 120,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
};

const EFFECTS = [
  {
    title: '색상 변화',
    sx: { '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText' } },
  },
  {
    title: '크기 확대',
    sx: { '&:hover': { transform: 'scale(1.1)' } },
  },
  {
    title: '그림자',
    sx: { '&:hover': { boxShadow: 12 } },
  },
  {
    title: '위로 떠오름',
    sx: { '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } },
  },
  {
    title: '회전',
    sx: { '&:hover': { transform: 'rotate(5deg)' } },
  },
  {
    title: '테두리 강조',
    sx: { '&:hover': { borderColor: 'secondary.main', borderWidth: 2, color: 'secondary.main' } },
  },
];

/**
 * HoverSection 컴포넌트
 * ButtonBase 로 만든 카드 6개에 색상 변화, 크기 확대, 그림자, 위로 떠오름, 회전, 테두리 강조
 * 호버 효과를 각각 적용하여 Grid 로 배치한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HoverSection />
 */
function HoverSection() {
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
        Hover
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
        { EFFECTS.map((effect) => (
          <Grid key={ effect.title } size={{ xs: 12, sm: 6, md: 4 }}>
            <ButtonBase sx={{ ...BASE_SX, ...effect.sx }}>
              { effect.title }
            </ButtonBase>
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}

export default HoverSection;
