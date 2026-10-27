import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * 랜딩페이지 푸터
 *
 * Example usage:
 * <FooterSection />
 */
function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, textAlign: 'center', backgroundColor: '#111', color: 'grey.500' }}
    >
      <Typography sx={{ fontSize: '0.9rem' }}>
        © 2026 CrossFit Hub. All rights reserved.
      </Typography>
    </Box>
  );
}

export default FooterSection;
