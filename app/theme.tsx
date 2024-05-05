import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react'
import '@fontsource-variable/roboto-flex'

const fonts = {
    ...chakraTheme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  }
  
// declare a variable for our theme and pass our overrides in the extendTheme` method from chakra
const theme = extendTheme(fonts);
theme.fonts = {
    heading: `"Roboto","Helvetica","Arial",sans-serif`,
     body: `"Roboto","Helvetica","Arial",sans-serif`,
  }

export default theme;