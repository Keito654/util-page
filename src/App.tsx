import { FC } from 'react';
import { Box, Container } from '@mui/material';
import { FullHalfConvert } from 'components/FullHalfConvert';

export const App: FC = () => {
  return (
    <Container fixed>
      <Box sx={{ my: 4 }}>
        <FullHalfConvert />
      </Box>
    </Container>
  );
};
