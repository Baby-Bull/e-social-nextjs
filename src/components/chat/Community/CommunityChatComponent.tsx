import React from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import BlockNoDataComponent from "src/components/chat/Community/Blocks/NoDataComponent";
import BlockChatComponent from "src/components/chat/Community/Blocks/ChatComponent";

interface ICommunityChatComponentProps {
  hasData?: boolean;
}

const CommunityChatComponent: React.SFC<ICommunityChatComponentProps> = ({ hasData = true }) => (
  <ContentComponent showFooter={false}>{hasData ? <BlockChatComponent /> : <BlockNoDataComponent />}</ContentComponent>
);

export default CommunityChatComponent;
