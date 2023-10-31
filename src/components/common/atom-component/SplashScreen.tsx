import React from "react";

import styles from "../common.module.scss";

const SplashScreen = () => (
  <div className={styles["splash-screen"]}>
    <img alt="splash" src="/assets/loading.gif" style={{ width: "40%" }} />
  </div>
);
export default SplashScreen;
