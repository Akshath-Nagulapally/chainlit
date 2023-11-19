import { useRecoilValue } from 'recoil';

import { Stack, Typography } from '@mui/material';

import LogoDark from 'assets/logo_dark.svg';
import LogoLight from 'assets/logo_light.svg';

import { settingsState } from 'state/settings';

export default function WaterMark() {
  const { theme } = useRecoilValue(settingsState);
  const src = theme === 'light' ? LogoLight : LogoDark;
  return (
    <Stack mx="auto">
        <Typography fontSize="12px" color="text.secondary">
          
        </Typography>
      </a>
    </Stack>
  );
}
