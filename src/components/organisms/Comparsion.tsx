import { FC, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export const Comparsion: FC = () => {
  const [baseText, setBaseText] = useState<string | undefined>();
  const [pullText, setPullText] = useState<string | undefined>();
  const [resultText, setReslutText] = useState<string[] | undefined>();

  const handleBaseChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBaseText(() => event.target.value);
  };

  const handlePullChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPullText(() => event.target.value);
  };

  const handleButtonClick = () => {
    if (baseText === undefined || pullText === undefined) {
      setReslutText(undefined);

      return;
    }

    const arrBase = baseText
      .split('\n')
      .map((x) => x.trim())
      .filter((x) => !x.match(/^\/\//));
    const arrConfirm = pullText
      .split('\n')
      .map((x) => x.trim())
      .filter((x) => !x.match(/^\/\//));

    const result = arrBase.filter(
      (x) => !arrConfirm.map((y) => y.toUpperCase()).includes(x.toUpperCase())
    );

    setReslutText(result);
  };

  const handleChangeButtonClick = () => {
    const temp = baseText;
    setBaseText(() => pullText);
    setPullText(() => temp);
  };

  return (
    <>
      <Box sx={{ fontSize: '2rem', marginBottom: '1ch' }}>行ごとに比較</Box>
      <Box>
        <Box
          sx={{
            display: 'inline',
            backgroundColor: 'rgba(0,0,0,.08)',
            borderRadius: '4px',
            color: '#333',
            padding: '0.1em 0.4em',
          }}
        >
          {'//'}
        </Box>
        を先頭につけた行は、コメントとして無視されます。
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="元になる集合"
          multiline
          rows={20}
          sx={{ width: '44%', whiteSpace: 'nowrap' }}
          onChange={handleBaseChange}
          value={baseText}
          spellCheck={false}
          inputProps={{ wrap: 'off' }}
        />
        <Button variant="outlined" onClick={handleChangeButtonClick}>
          <SyncAltIcon />
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label="引く集合"
          multiline
          rows={20}
          sx={{ width: '44%', lineHeight: '500%' }}
          onChange={handlePullChange}
          value={pullText}
          spellCheck={false}
          inputProps={{ wrap: 'off' }}
        />
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" onClick={handleButtonClick}>
          比較する
        </Button>
      </Box>
      <TextField
        label="差分"
        multiline
        rows={20}
        fullWidth
        margin="normal"
        value={resultText ? resultText.join('\n') : ''}
        spellCheck={false}
        inputProps={{ wrap: 'off' }}
      />
    </>
  );
};
