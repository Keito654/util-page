import { Box, Button, TextField } from '@mui/material';
import { TextBox } from 'components/atomic/TextBox';
import { type FC, useState } from 'react';

export const RemoveNewLine: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [removedValue, setRemovedValue] = useState('');

  const handleClick = () => {
    const result = inputValue.replace(/\r?\n|\r/g, '');
    setRemovedValue(result);
  };

  return (
    <>
      <Box sx={{ fontSize: '2rem', marginBottom: '1ch' }}>全角半角変換</Box>
      <TextBox
        labelText="変換前のテキストを入力"
        handleChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '1ch 0',
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          改行を取り除く
        </Button>
      </Box>
      <TextField
        label="変換後のテキスト"
        value={removedValue}
        fullWidth
        margin="normal"
        spellCheck={false}
      />
    </>
  );
};
