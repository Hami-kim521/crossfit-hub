import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ZONES = [
  { id: 'source', title: '아이템 목록' },
  { id: 'target', title: '드롭 영역' },
];

const INITIAL_ITEMS = [
  { id: 1, label: '아이템 1', zone: 'source' },
  { id: 2, label: '아이템 2', zone: 'source' },
  { id: 3, label: '아이템 3', zone: 'source' },
  { id: 4, label: '아이템 4', zone: 'source' },
];

/**
 * DragDropSection 컴포넌트
 * HTML5 Drag and Drop API 로 아이템을 '아이템 목록'과 '드롭 영역' 사이에서 이동한다.
 * 드래그 중인 아이템은 반투명하게, 드롭 가능한 영역은 강조 테두리로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <DragDropSection />
 */
function DragDropSection() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [draggingId, setDraggingId] = useState(null);
  const [overZone, setOverZone] = useState(null);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', String(id));
    event.dataTransfer.effectAllowed = 'move';
    setDraggingId(id);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setOverZone(null);
  };

  const handleDragOver = (event, zoneId) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setOverZone(zoneId);
  };

  const handleDragLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOverZone(null);
    }
  };

  const handleDrop = (event, zoneId) => {
    event.preventDefault();
    const id = Number(event.dataTransfer.getData('text/plain'));
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, zone: zoneId } : item)));
    handleDragEnd();
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
        Drag & Drop
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
        { ZONES.map((zone) => {
          const isOver = overZone === zone.id;
          return (
            <Grid key={ zone.id } size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 1, textAlign: 'center', color: 'text.secondary' }}
              >
                { zone.title }
              </Typography>
              <Box
                onDragOver={ (event) => handleDragOver(event, zone.id) }
                onDragLeave={ handleDragLeave }
                onDrop={ (event) => handleDrop(event, zone.id) }
                sx={{
                  minHeight: 240,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  borderRadius: 2,
                  border: '2px dashed',
                  borderColor: isOver ? 'primary.main' : 'divider',
                  bgcolor: isOver ? 'action.hover' : 'transparent',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
              >
                { items.filter((item) => item.zone === zone.id).map((item) => (
                  <Paper
                    key={ item.id }
                    draggable
                    onDragStart={ (event) => handleDragStart(event, item.id) }
                    onDragEnd={ handleDragEnd }
                    elevation={ draggingId === item.id ? 0 : 2 }
                    sx={{
                      p: 1.5,
                      textAlign: 'center',
                      cursor: 'grab',
                      opacity: draggingId === item.id ? 0.4 : 1,
                      userSelect: 'none',
                      '&:active': { cursor: 'grabbing' },
                    }}
                  >
                    { item.label }
                  </Paper>
                )) }
              </Box>
            </Grid>
          );
        }) }
      </Grid>
    </Box>
  );
}

export default DragDropSection;
