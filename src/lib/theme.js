import base from '@hackclub/theme';
import { merge } from 'lodash';

const theme = base;

const fonts = {
  heading:
    '"Rajdhani", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  body:
    '"Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

theme.useColorSchemeMediaQuery = false;

theme.buttons.primary = merge(theme.buttons.primary, {
  textTransform: 'uppercase'
});

theme.fonts = merge(theme.fonts, fonts);

theme.layout.copy.maxWidth = [null, null, 'copyPlus'];

theme.text.title.fontSize = [5, 6];

theme.radii.circle = '100px';

export default theme;
