import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";

import styles from "src/components/layouts/layout.module.scss";

const HeaderComponent = () => {
  const { t } = useTranslation();
  const [message] = useState(9);
  const [notify] = useState("99+");
  return (
    <div className={styles.header}>
      <div className={styles.boxHeaderContent}>
        <div className={styles.boxHeaderLeft}>
          <img src="/assets/images/logo/logo.png" alt="logo" className={styles.imgLogo} />
          <div className={styles.boxSearch}>
            <input type="text" placeholder={t("header.search-pc")} className={styles.isPc} />
            <img src="/assets/images/icon/ic_search.png" className={styles.isPc} alt="ic_search" />
            <img src="/assets/images/icon/ic_search.png" className={styles.isMobile} alt="ic_search" />
            <input type="text" placeholder={t("header.search-mb")} className={styles.isMobile} />
          </div>
        </div>
        <div className={styles.boxHeaderRight}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" className={styles.icMess}>
            <Badge badgeContent={message} color="error">
              <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" className={styles.icBell}>
            <Badge badgeContent={notify} color="error">
              <img src="/assets/images/icon/ic_bell.png" alt="ic_bell" />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" className={styles.icSetting}>
            <img src="/assets/images/icon/ic_setting.png" alt="ic_setting" />
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" className={styles.icToggle}>
            <img src="/assets/images/icon/ic_toggle.png" alt="ic_toggle" />
          </IconButton>
          <div className={styles.avatar}>
            <img src="/assets/images/avatar.png" alt="avatar" width="18" height="21" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
