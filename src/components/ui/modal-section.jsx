import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

/**
 * ModalSection 컴포넌트
 * 버튼 클릭 시 Dialog 를 열고, 제목/내용/확인/취소 버튼을 보여준다.
 * 닫기(X) 버튼, 취소/확인 버튼, 배경 클릭으로 모달을 닫을 수 있으며,
 * 닫힌 방식(확인/취소/닫기)을 화면에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ModalSection />
 */
function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (reason) => {
    setResult(reason);
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
        Modal
      </Typography>
      <Box sx={{ maxWidth: 'sm', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" onClick={ handleOpen }>
          모달 열기
        </Button>
        <Box sx={{ mt: 2, color: 'text.secondary', fontSize: '1rem' }}>
          최근 결과: { result || '없음' }
        </Box>
      </Box>
      <Dialog
        open={ isOpen }
        onClose={ () => handleClose('배경 클릭/ESC로 닫음') }
        aria-labelledby="modal-section-title"
        aria-describedby="modal-section-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="modal-section-title" sx={{ pr: 6 }}>
          모달 제목
          <IconButton
            aria-label="닫기"
            onClick={ () => handleClose('닫기 버튼으로 닫음') }
            sx={{ position: 'absolute', right: 8, top: 8, color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="modal-section-description">
            모달 내용입니다. 확인 또는 취소를 선택하거나, 배경을 클릭해 닫을 수 있습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => handleClose('취소') }>취소</Button>
          <Button variant="contained" onClick={ () => handleClose('확인') }>확인</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ModalSection;
