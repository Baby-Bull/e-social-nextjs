import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import classNames from "classnames";

import styles from "src/components/chat/chat.module.scss";
import ChatBoxLeftComponent from "src/components/chat/Blocks/ChatBoxLeftComponent";
import useViewport from "src/helpers/useViewport";

import ChatBoxRightComponent from "./ChatBoxRightComponent";

const BlockChatComponent = () => {
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const [isRenderRightSide, setIsRenderRightSide] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsRenderRightSide(false);
    }
  }, []);

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent toggleRenderSide={toggleRenderSide} />
      ) : null}
      {!isMobile || (isMobile && isRenderRightSide) ? <ChatBoxRightComponent isMobile={isMobile} /> : null}
    </Grid>
  );
};

export default BlockChatComponent;
