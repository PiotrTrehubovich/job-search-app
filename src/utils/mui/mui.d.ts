import {
  TypeText,
  TypographyVariants,
  TypographyPropsVariantOverrides,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    caption: string;
  }
  interface TypographyVariants {
    h4Bold: React.CSSProperties;
    h5Bold: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h4Bold?: React.CSSProperties;
    h5Bold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4Bold: true;
    h5Bold: true;
  }
}
