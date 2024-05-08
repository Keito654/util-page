import type { FC } from 'react'
import { Container } from '@mui/material'
import { FunctionFrame } from 'components/atomic/FunctionFrame'
import { Comparsion } from 'components/organisms/Comparsion'
import { FullHalfConvert } from 'components/organisms/FullHalfConvert'
import { RemoveNewLine } from 'components/organisms/RemoveNewLine'

export const App: FC = () => {
  return (
    <Container fixed>
      <FunctionFrame>
        <FullHalfConvert />
      </FunctionFrame>
      <FunctionFrame>
        <Comparsion />
      </FunctionFrame>
      <FunctionFrame>
        <RemoveNewLine />
      </FunctionFrame>
      <a
        target="_blank"
        href="https://icons8.com/icon/IXoJG4Gjzs5g/change"
        rel="noreferrer noopener"
      >
        Change icon by Icons8
      </a>
    </Container>
  )
}
