import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

/* 
PANTONE: UNDER THE SEA
https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2019-palette-exploration
*/
export enum Pantone {
  LivingCoral = "#FF6F61",
  BlueDepths = "#263056",
  /* harmony gallery */
  TurtleGreen = "#81894E",
  ViridianGreen = "#009499",
  TurkishSea = "#195190",
  /* harmony [pid] */
  SeaPink = "#DE98AB",
  LimpetShell = "#98DDDE",
  VibrantYellow = "#FFDA29",
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: Pantone.BlueDepths
    },
    secondary: {
      main: Pantone.LivingCoral
    },
    error: {
      main: red.A400
    },
    background: {
      default: Pantone.BlueDepths,
      paper: "rgba(255, 255, 255, 0)" // transparent
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: Pantone.TurkishSea,
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    fontFamily: "Raleway"
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: "1rem"
      },
      contained: {
        backgroundColor: Pantone.LivingCoral,
        color: Pantone.BlueDepths
      },
      outlined: {
        borderColor: Pantone.TurkishSea,
        color: Pantone.TurkishSea
      }
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span"
      }
    }
  }
});

export default theme;
