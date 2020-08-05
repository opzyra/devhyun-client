import { createGlobalStyle } from "styled-components";

import { ITheme } from "./themes";
import { reset } from "./reset";

interface IThemeWrapper {
  theme: ITheme;
}

export * from "./themes";
export * from "./reset";

export const GlobalStyles = createGlobalStyle<IThemeWrapper>`
${reset}
#__next { height: 100% }
`;
