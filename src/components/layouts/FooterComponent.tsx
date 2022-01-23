import React from "react";
import { Link } from "@mui/material";
import { useTranslation } from "next-i18next";

import styles from "src/components/layouts/layout.module.scss";

const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.boxFooterContent}>
        <div className={styles.footerContentLeft}>
          <div className={styles.contentTopLeft}>
            <Link href="/#" color="secondary">
              {t("footer.signin")}
            </Link>
            <Link href="/#" color="secondary">
              {t("footer.signout")}
            </Link>
          </div>
          <div className={styles.contentBottomLeft}>
            <div className={styles.contentBottomLeftMenu}>
              <div>
                <Link href="/#" color="secondary">
                  {t("footer.terms-service")}
                </Link>
              </div>
              <div>
                <Link href="/#" color="secondary">
                  {t("footer.privacy-policy")}
                </Link>
              </div>
            </div>
            <div className={styles.contentBottomLeftMenu}>
              <div>
                <Link href="/#" color="secondary">
                  {t("footer.inquiry")}
                </Link>
              </div>
              <div>
                <Link href="/#" color="secondary">
                  {t("footer.operating-company")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerContentRight}>
          <div className={styles.contentTopRight}>
            <img src="/assets/images/logo/logo_footer.png" alt="logo" />
          </div>
          <div className={styles.contentBottomRight}>Copyright © AilaB inc. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
