import React, { useState } from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat/Personal/Blocks/ChatComponent";

const PersonalChatComponent = () => {
  const [hasData, setHasData] = useState(false);
  const [isRenderRightSide, setIsRenderRightSide] = useState(false);

  return (
    <ContentComponent showFooter={false} showHeader={!isRenderRightSide}>
      <BlockChatComponent
        hasData={hasData}
        setHasData={setHasData}
        isRenderRightSide={isRenderRightSide}
        setIsRenderRightSide={setIsRenderRightSide}
      />
    </ContentComponent>
  );
};

export default PersonalChatComponent;
