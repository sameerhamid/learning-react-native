import { GlobalStyles } from "../constansts/stylex";
import { ThemeModelItem } from "../model/themeModel";

/**
 * pass color here as light theme
 */
export const LightTheme: ThemeModelItem = {
  dark: false,
  colors: {
    primary: GlobalStyles.colors.primary,
    background: GlobalStyles.colors.background,
    card: GlobalStyles.colors.card,
    text: GlobalStyles.colors.text,
    border: GlobalStyles.colors.border,
    notification: GlobalStyles.colors.notification,
  },
};
