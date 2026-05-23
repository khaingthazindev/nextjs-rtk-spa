import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/app/theme";
import NavBar from "@/app/components/NavBar";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <section className={styles.container}>
                <NavBar />
  
                <header className={styles.header}>
                
                </header>
  
                <main className={styles.main}>
                  {children}
                </main>
  
                <footer className={styles.footer}>
                  <span>Learn </span>
                  <a
                    className={styles.link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                  <span>, </span>
                  <a
                    className={styles.link}
                    href="https://redux.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux
                  </a>
                  <span>, </span>
                  <a
                    className={styles.link}
                    href="https://redux-toolkit.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux Toolkit
                  </a>
                  <span>, </span>
                  <a
                    className={styles.link}
                    href="https://react-redux.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Redux
                  </a>
                  ,<span> and </span>
                  <a
                    className={styles.link}
                    href="https://reselect.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reselect
                  </a>
                </footer>
              </section>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
