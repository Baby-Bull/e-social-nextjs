import React from "react";

import BlockNoDataComponent from "src/components/chat/Personal/Blocks/NoDataComponent";
import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat/Personal/Blocks/ChatComponent";

interface IPersonalChatComponentProps {
  hasData?: boolean;
}

const PersonalChatComponent: React.SFC<IPersonalChatComponentProps> = ({ hasData = true }) => (
  <ContentComponent showFooter={false}>{hasData ? <BlockChatComponent /> : <BlockNoDataComponent />}</ContentComponent>
);

export default PersonalChatComponent;
