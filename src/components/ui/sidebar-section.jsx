import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MailIcon from '@mui/icons-material/Mail';

const POSITIONS = [
  { value: 'left', label: '왼쪽' },
  { value: 'right', label: '오른쪽' },
];

const LINKS = [
  { label: '홈', href: '#home', icon: <HomeIcon /> },
  { label: '소개', href: '#about', icon: <InfoIcon /> },
  { label: '서비스', href: '#service', icon: <MiscellaneousServicesIcon /> },
  { label: '연락처', href: '#contact', icon: <MailIcon /> },
];

/**
 * SidebarSection 컴포넌트
 * 버튼 클릭으로 Drawer(사이드바)를 열고 닫으며, 왼쪽/오른쪽 위치를 선택할 수 있다.
 * 사이드바 내부에는 List 와 ListItem 으로 구성된 네비게이션 링크가 있다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SidebarSection />
 */
function SidebarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState('left');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePositionChange = (event, newPosition) => {
    if (newPosition !== null) {
      setPosition(newPosition);
    }
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
        Sidebar
      </Typography>
      <Box
        sx={{
          maxWidth: 'sm',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ToggleButtonGroup
          exclusive
          size="small"
          value={ position }
          onChange={ handlePositionChange }
          aria-label="사이드바 위치"
        >
          { POSITIONS.map((item) => (
            <ToggleButton key={ item.value } value={ item.value }>
              { item.label }
            </ToggleButton>
          )) }
        </ToggleButtonGroup>
        <Button variant="contained" onClick={ handleToggle }>
          사이드바 { isOpen ? '닫기' : '열기' }
        </Button>
      </Box>
      <Drawer anchor={ position } open={ isOpen } onClose={ handleClose }>
        <Box sx={{ width: 250 }} role="navigation" aria-label="사이드바 메뉴">
          <Typography variant="h6" component="div" sx={{ p: 2 }}>
            메뉴
          </Typography>
          <Divider />
          <List>
            { LINKS.map((link) => (
              <ListItem key={ link.label } disablePadding>
                <ListItemButton component="a" href={ link.href } onClick={ handleClose }>
                  <ListItemIcon>{ link.icon }</ListItemIcon>
                  <ListItemText primary={ link.label } />
                </ListItemButton>
              </ListItem>
            )) }
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SidebarSection;
