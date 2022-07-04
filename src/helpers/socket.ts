import { getToken } from "./storage";

const socket = () => {
  let instance: any;
  const initSk = () => new WebSocket(`${process.env.NEXT_PUBLIC_WS}${getToken()}`);
  const refresh = () => {
    if (instance) {
      instance.onclose();
    }
    instance = null;
  };
  return {
    init: () => {
      if (!instance) instance = initSk();
      return instance;
    },
    refresh,
  };
};

export default socket;
