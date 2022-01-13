import { useTranslation } from "next-i18next";
import React from "react";

import styles from 'src/components/layouts/layout.module.scss';

const HeaderComponent = () => {
  const { t } = useTranslation();
  return  (
      <div className={styles.header}>{t('header-title')}</div>
  )
}
export default HeaderComponent;
