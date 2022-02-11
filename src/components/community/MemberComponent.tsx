import React from "react";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import GridViewComponent from "src/components/community/blocks/GridViewComponent";

import { tabsCommunity } from "./mockData";

const MemberComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentComponent>
      <GridViewComponent data={tabsCommunity[2]?.data} title={t("community:community-members")} />
    </ContentComponent>
  );
};
export default MemberComponent;
