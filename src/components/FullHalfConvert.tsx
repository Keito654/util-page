/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const convertFullToHalf = (word: string): string => {
  return word.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (x) => {
    return String.fromCharCode(x.charCodeAt(0) - 0xfee0);
  });
};

const convertHalfToFull = (word: string): string => {
  return word.replace(/[A-Za-z0-9]/g, (x) => {
    return String.fromCharCode(x.charCodeAt(0) + 0xfee0);
  });
};

export const FullHalfConvert: FC = () => {
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [convertedValue, setConvertedValue] = useState<string>('');

  const handleClickFullToHalf = () => {
    setConvertedValue(convertFullToHalf(inputValue ?? ''));
  };

  const handleClickHalfToFull = () => {
    setConvertedValue(convertHalfToFull(inputValue ?? ''));
  };

  return (
    <>
      <Box sx={{ fontSize: '2rem', marginBottom: '1ch' }}>全角半角変換</Box>
      <Box>変換前のテキスト</Box>
      <TextField
        label="テキスト"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        onChange={(e) => {
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
        <Button variant="contained" onClick={handleClickHalfToFull}>
          全て全角文字に変換
        </Button>
        <Button variant="contained" onClick={handleClickFullToHalf}>
          全て半角文字に変換
        </Button>
      </Box>
      <TextField
        label="変換後"
        multiline
        rows={4}
        value={convertedValue}
        fullWidth
        margin="normal"
      ></TextField>
    </>
  );
};
