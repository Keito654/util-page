/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { TextBox } from 'components/atomic/TextBox';

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
      <TextBox
        labelText="テキストを入力"
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
        <Button variant="contained" onClick={handleClickHalfToFull}>
          全て全角文字に変換
        </Button>
        <Button variant="contained" onClick={handleClickFullToHalf}>
          全て半角文字に変換
        </Button>
      </Box>
      <TextBox labelText="変換後のテキスト" value={convertedValue} />
    </>
  );
};
