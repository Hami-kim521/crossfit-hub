import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MENUS = ['홈', '소개', '상품', '연락처', '설정'];

/**
 * FlexNavigationSection 컴포넌트
 * flexbox 로 만든 네비게이션 바. 왼쪽에 로고(MyWebsite), 오른쪽에 메뉴 5개를 양 끝 정렬한다.
 * 메뉴는 연한 회색이며 호버 시 흰색으로 바뀐다.
 *
 * Props: 없음
 *
 * Example usage:
 * <FlexNavigationSection />
 */
function FlexNavigationSection() {
  return (
    <Box
      component="section"
      sx={{ width: '100%', py: { xs: 4, md: 8 } }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 3, px: { xs: 2, md: 3 }, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Flex Navigation
      </Typography>
      <Box
        component="nav"
        sx={{
          width: '100%',
          height: 60,
          px: { xs: 2, md: 3 },
          bgcolor: '#2d3748',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
          MyWebsite
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          { MENUS.map((menu) => (
            <Box
              key={ menu }
              component="a"
              href="#"
              onClick={ (event) => event.preventDefault() }
              sx={{
                color: '#cbd5e0',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#ffffff' },
              }}
            >
              { menu }
            </Box>
          )) }
        </Box>
      </Box>
    </Box>
  );
}

export default FlexNavigationSection;
