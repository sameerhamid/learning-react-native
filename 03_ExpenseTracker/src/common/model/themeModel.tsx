export class Colors {
  primary: string;

  background: string;

  card: string;

  text: string;

  border: string;

  notification: string;

  primary50?: string;
  primary100?: string;
  primary200?: string;
  primary400?: string;
  primary500?: string;
  primary700?: string;
  primary800?: string;
  accent500?: string;
  error50?: string;
  error500?: string;
  gray500?: string;
  gray700?: string;

  constructor(
    primary: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string
  ) {
    this.primary = primary;
    this.background = background;
    this.card = card;
    this.text = text;
    this.border = border;
    this.notification = notification;
  }
}

export class ThemeModelItem {
  dark: boolean;
  colors: Colors;

  constructor(dark: boolean, colors: Colors) {
    this.dark = dark;
    this.colors = colors;
  }
}

export class ThemeModel {
  ThemeModel?: ThemeModelItem;
}
