import React, { useEffect, useState } from "react";

import BlockNoDataComponent from "src/components/chat/Personal/Blocks/NoDataComponent";
import ContentComponent from "src/components/layouts/ContentComponent";
import BlockChatComponent from "src/components/chat/Personal/Blocks/ChatComponent";
import { getListChatRooms } from "src/services/chat";

const PersonalChatComponent = () => {
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchListRooms = async () => {
      const listRooms = await getListChatRooms();
      if (listRooms?.items?.length) {
        setHasData(true);
      }
    };
    fetchListRooms();
  }, []);

  return (
    <ContentComponent showFooter={false}>
      {hasData ? <BlockChatComponent /> : <BlockNoDataComponent />}
    </ContentComponent>
  );
};

export default PersonalChatComponent;
