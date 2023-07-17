import { createTheme } from "@mui/material/styles";

// Theme instance
let theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#F7F7F8",
      light: "#5E96FC",
    },
    text: {
      primary: "#232134",
      secondary: "#5E96FC",
      caption: "#ACADB9",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h2: {
      fontSize: 28,
      fontWeight: 700,
      color: theme.palette.text.primary,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 16,
      },
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 12,
      },
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 10,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 8,
          textTransform: "none",
          padding: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontSize: 16,
          fontWeight: 400,
          color: theme.palette.text.caption,
        },
        notchedOutline: {
          borderColor: theme.palette.text.caption,
          borderRadius: 8,
        },
        input: {
          "&::placeholder": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontSize: 16,
          fontWeight: 400,
          color: theme.palette.text.caption,
        },
        notchedOutline: {
          borderColor: theme.palette.text.caption,
          borderRadius: 8,
        },
        input: {
          "&::placeholder": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          "&::selection": {
            // backgroundColor: theme.palette.text.primary,
          },
        },
      },
      defaultProps: {
        variantMapping: {
          h4Bold: "h4",
          h5Bold: "h5",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.text.caption,
          padding: "5px",
          ".MuiSvgIcon-root": {
            fontSize: "1rem",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    ...theme.typography,
    h4Bold: {
      ...theme.typography.h4,
      fontWeight: 600,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 12,
      },
    },
    h5Bold: {
      ...theme.typography.h5,
      fontWeight: 600,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 10,
      },
    },
  },
});

export default theme;
