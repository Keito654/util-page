import { FC } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const FnctionFrame: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        my: 4,
        border: '2px solid #000000',
        borderRadius: '10px',
        padding: '2%',
      }}
    >
      {children}
    </Box>
  );
};
