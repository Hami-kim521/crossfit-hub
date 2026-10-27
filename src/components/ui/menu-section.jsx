import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const MENU_ITEMS = [
  { label: '홈', icon: <HomeIcon fontSize="small" /> },
  { label: '프로필', icon: <PersonIcon fontSize="small" /> },
  { label: '설정', icon: <SettingsIcon fontSize="small" /> },
  { label: '알림', icon: <NotificationsIcon fontSize="small" /> },
  { label: '도움말', icon: <HelpIcon fontSize="small" /> },
  { label: '로그아웃', icon: <LogoutIcon fontSize="small" /> },
];

/**
 * MenuSection 컴포넌트
 * 버튼 클릭 시 아이콘이 포함된 MenuItem 6개의 Menu 를 열고,
 * 클릭한 메뉴를 화면에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <MenuSection />
 */
function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState('');

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (label) => {
    setSelected(label);
    handleClose();
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
        Menu
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          id="menu-section-button"
          variant="contained"
          aria-controls={ anchorEl ? 'menu-section-menu' : undefined }
          aria-haspopup="true"
          aria-expanded={ anchorEl ? 'true' : undefined }
          onClick={ handleOpen }
        >
          메뉴 열기
        </Button>
        <Menu
          id="menu-section-menu"
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ handleClose }
          slotProps={{ list: { 'aria-labelledby': 'menu-section-button' } }}
        >
          { MENU_ITEMS.map((item) => (
            <MenuItem key={ item.label } onClick={ () => handleItemClick(item.label) }>
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText>{ item.label }</ListItemText>
            </MenuItem>
          )) }
        </Menu>
        <Box sx={{ mt: 2, color: 'text.secondary', fontSize: '1rem' }}>
          선택된 메뉴: { selected || '없음' }
        </Box>
      </Box>
    </Box>
  );
}

export default MenuSection;
