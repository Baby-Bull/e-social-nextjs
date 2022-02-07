import React from "react";

import BlockNoDataComponent from "src/components/chat/Blocks/NoDataComponent";
import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat//Blocks/ChatComponent";

interface IPersonalChatComponentProps {
  hasData?: boolean;
}

const PersonalChatComponent: React.SFC<IPersonalChatComponentProps> = ({ hasData = true }) => (
  <ContentComponent showFooter={false}>{hasData ? <BlockChatComponent /> : <BlockNoDataComponent />}</ContentComponent>
);

export default PersonalChatComponent;
