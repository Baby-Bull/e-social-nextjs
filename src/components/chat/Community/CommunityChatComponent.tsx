import React, { useState } from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat/Community/Blocks/ChatComponent";

const CommunityChatComponent = () => {
  const [isRenderRightSide, setIsRenderRightSide] = useState(false);

  return (
    <ContentComponent showFooter={false} showHeader={!isRenderRightSide}>
      <BlockChatComponent isRenderRightSide={isRenderRightSide} setIsRenderRightSide={setIsRenderRightSide} />
    </ContentComponent>
  );
};

export default CommunityChatComponent;
