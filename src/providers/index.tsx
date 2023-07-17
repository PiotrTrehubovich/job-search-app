// theme
import theme from "@/utils/mui/theme";

// providers
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
