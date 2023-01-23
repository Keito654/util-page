import { FC } from 'react';
import { Container } from '@mui/material';
import { FnctionFrame } from 'components/atomic/FunctionFrame';
import { Comparsion } from 'components/organisms/Comparsion';
import { FullHalfConvert } from 'components/organisms/FullHalfConvert';

export const App: FC = () => {
  return (
    <Container fixed>
      <FnctionFrame>
        <FullHalfConvert />
      </FnctionFrame>
      <FnctionFrame>
        <Comparsion />
      </FnctionFrame>
    </Container>
  );
};
