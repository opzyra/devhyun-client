import { createGlobalStyle } from "styled-components";

import { ITheme } from "./themes";
import reset from "./reset";

interface IThemeWrapper {
  theme: ITheme;
}

export const GlobalStyle = createGlobalStyle<IThemeWrapper>`
${reset}
#__next { height: 100% }
`;
