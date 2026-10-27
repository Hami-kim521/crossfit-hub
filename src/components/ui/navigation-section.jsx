import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const MENUS = ['홈', '소개', '서비스', '연락처'];

/**
 * NavigationSection 컴포넌트
 * AppBar + Toolbar 기반 내비게이션. 데스크톱에서는 메뉴 버튼을, 모바일에서는 햄버거 메뉴를 보여주고,
 * 메뉴 클릭 시 메뉴명을 알림창(Snackbar + Alert)으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <NavigationSection />
 */
function NavigationSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setMessage(`${ menu } 메뉴를 클릭했습니다.`);
    setIsOpen(true);
    setAnchorEl(null);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
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
        Navigation
      </Typography>
      <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              { MENUS.map((menu) => (
                <Button key={ menu } color="inherit" onClick={ () => handleMenuClick(menu) }>
                  { menu }
                </Button>
              )) }
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="메뉴 열기"
                onClick={ (event) => setAnchorEl(event.currentTarget) }
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={ anchorEl }
                open={ Boolean(anchorEl) }
                onClose={ () => setAnchorEl(null) }
              >
                { MENUS.map((menu) => (
                  <MenuItem key={ menu } onClick={ () => handleMenuClick(menu) }>
                    { menu }
                  </MenuItem>
                )) }
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Snackbar
        open={ isOpen }
        autoHideDuration={ 3000 }
        onClose={ handleClose }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={ handleClose } severity="info" variant="filled" sx={{ width: '100%' }}>
          { message }
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default NavigationSection;
