// theme
import theme from "@/utils/mui/theme";

// providers
import { ThemeProvider } from "@mui/material/styles";
import ReactQueryProvider from "./queryClient";
import UserProvider from "./user";
import { ModalProvider } from "./modal";
import ImagesProvider from "./images";
import { ShoppingCartProvider } from "@/providers/shoppingCard";
import { NotificationProvider } from "./notification";

export interface IProvidersProps {
  children: ReactNode;
  dehydrateState: DehydratedState;
}

export default function Providers({
  children,
  dehydrateState,
}: IProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider dehydrateState={dehydrateState}>
        <UserProvider>
          <ShoppingCartProvider>
            <StorageProvider>
              <FiltersProvider>
                <ImagesProvider>
                  <ModalProvider>
                    <NotificationProvider>{children}</NotificationProvider>
                  </ModalProvider>
                </ImagesProvider>
              </FiltersProvider>
            </StorageProvider>
          </ShoppingCartProvider>
        </UserProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
