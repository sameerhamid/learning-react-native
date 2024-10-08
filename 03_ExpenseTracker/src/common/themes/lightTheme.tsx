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

    primary50: GlobalStyles.colors.primary50,
    primary100: GlobalStyles.colors.primary100,
    primary200: GlobalStyles.colors.primary200,
    primary400: GlobalStyles.colors.primary400,
    primary500: GlobalStyles.colors.primary500,
    primary700: GlobalStyles.colors.primary700,
    primary800: GlobalStyles.colors.primary800,
    accent500: GlobalStyles.colors.accent500,
    error50: GlobalStyles.colors.error50,
    error500: GlobalStyles.colors.error500,
    gray500: GlobalStyles.colors.gray500,
    gray700: GlobalStyles.colors.gray700,
  },
};
