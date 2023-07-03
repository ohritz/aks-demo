/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import {colors} from "./colors";
export const theme = extendTheme({
    colors: colors,
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
    styles: {
        global: {
          'html, body': {
            color: 'gray.600',
            bg: 'gray.200',
            lineHeight: 'base',
          },
          a: {
            color: 'teal.500',
          },
        },
      },
});

