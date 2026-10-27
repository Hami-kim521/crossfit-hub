import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ScheduleIcon from '@mui/icons-material/Schedule';

import usePrograms from '../../hooks/use-programs.js';

/**
 * 랜딩페이지 프로그램 목록 영역 (Supabase programs 테이블 연동)
 *
 * Example usage:
 * <ProgramsSection />
 */
function ProgramsSection() {
  const { programs, isLoading, hasError } = usePrograms();

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'grey.100' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, textAlign: 'center', mb: 5 }}
        >
          프로그램
        </Typography>

        { isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) }

        { hasError && (
          <Alert severity="error">프로그램 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</Alert>
        ) }

        <Grid container spacing={3}>
          { programs.map((program) => (
            <Grid key={ program.id } size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={ 2 } sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Chip label={ program.level } color="primary" size="small" sx={{ mb: 2 }} />
                <Typography variant="h3" sx={{ fontSize: '1.3rem', fontWeight: 700, mb: 1 }}>
                  { program.title }
                </Typography>
                <Typography sx={{ lineHeight: 1.6, color: 'text.secondary', mb: 2 }}>
                  { program.description }
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary', fontSize: '0.9rem' }}>
                  <ScheduleIcon fontSize="small" color="primary" />
                  { program.schedule }
                </Box>
              </Paper>
            </Grid>
          )) }
        </Grid>
      </Container>
    </Box>
  );
}

export default ProgramsSection;
