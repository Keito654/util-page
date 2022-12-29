import { FC } from 'react';
import { Box, Container } from '@mui/material';
import { FullHalfConvert } from 'components/organisms/FullHalfConvert';

export const App: FC = () => {
  return (
    <Container fixed>
      <Box
        sx={{
          my: 4,
          border: '2px solid #000000',
          borderRadius: '10px',
          padding: '2%',
        }}
      >
        <FullHalfConvert />
      </Box>
    </Container>
  );
};
