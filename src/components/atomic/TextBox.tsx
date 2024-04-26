import type { FC } from 'react'
import { TextField } from '@mui/material'

interface Props {
  labelText?: string
  value?: string
  handleChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
}

export const TextBox: FC<Props> = ({ labelText, value, handleChange }) => {
  return (
    <TextField
      label={labelText}
      multiline
      rows={4}
      value={value}
      fullWidth
      margin="normal"
      onChange={handleChange}
      spellCheck={false}
    />
  )
}
