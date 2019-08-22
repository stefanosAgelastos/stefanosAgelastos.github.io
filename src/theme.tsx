import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#263056"
    },
    secondary: {
      main: "#FF6F61"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#263056", // PANTONE Blue Depths
      paper: "rgba(255, 255, 255, 0.8)" //almost transparent
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "#195190",
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
        backgroundColor: "#FF6F61",
        color: "#263056"
      },
      outlined: {
        borderColor: "#195190",
        color: "#195190"
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

/* 
PANTONE: UNDER THE SEA

263056 Blue Depths
195190 Turkish Sea 
009499 Viridian Green
81894E Turtle Green
FF6F61 Living Coral
DE98AB Sea Pink
FFDA29 Vibrant Yellow
98DDDE Limpet Shell
*/
