// import Colors from "../styles/colors";

import { GlobalStyles } from "../constansts/stylex";
import { ThemeModelItem } from "../model/themeModel";

/*
 * pass color here as Dark theme
 */
export const DarkTheme: ThemeModelItem = {
  dark: true,
  colors: {
    primary: GlobalStyles.colors.primary,
    background: GlobalStyles.colors.background,
    card: GlobalStyles.colors.card,
    text: GlobalStyles.colors.text,
    border: GlobalStyles.colors.border,
    notification: GlobalStyles.colors.notification,
  },
};
