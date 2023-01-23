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
      <a
        target="_blank"
        href="https://icons8.com/icon/IXoJG4Gjzs5g/change"
        rel="noreferrer"
      >
        Change icon by Icons8
      </a>
    </Container>
  );
};
