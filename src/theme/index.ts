import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: 'pink.600',
        _dark: 'pink.300',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray-200', 'gray.700')(props),
      },
    }),
  },
  shadows: {
    outline: '0 0 0 3px rgba(246, 173, 85, 0.6)',
  },
});

export default theme;
