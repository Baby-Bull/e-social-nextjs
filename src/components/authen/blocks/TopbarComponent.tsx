import React from "react";
import { Box, Link, Toolbar, AppBar } from "@mui/material";

import styles from "../authen.module.scss";

const TopbarComponent = () => (
  <Box className={styles.topBar}>
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Box className={styles.logoSection}>
          <Link href="/">
            <a>
              <Box className={styles.logoImg} component="img" alt="avatar" src="/assets/images/logo/logo.png" />
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);
export default TopbarComponent;
