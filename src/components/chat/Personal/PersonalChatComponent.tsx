import React, { useState } from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat/Personal/Blocks/ChatComponent";

const PersonalChatComponent = () => {
  const [hasData, setHasData] = useState(false);

  return (
    <ContentComponent showFooter={false}>
      <BlockChatComponent hasData={hasData} setHasData={setHasData} />
    </ContentComponent>
  );
};

export default PersonalChatComponent;
