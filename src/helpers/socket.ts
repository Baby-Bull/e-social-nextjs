import { getToken } from "./storage";

// retryDelay: 5s
const defaultRetryDelay = 5000;

const getWsEndpoint = () => `${process.env.NEXT_PUBLIC_WS}${getToken()}`;

const WebsocketClient = ({
  url,
  retryDelay = defaultRetryDelay,
}: {
  url: string | (() => string);
  retryDelay?: number;
}) => {
  let wsInstance: WebSocket;
  let tryReconnectFn: any;
  // eslint-disable-next-line no-unused-vars
  const eventHandlers: Map<string, Array<(payload?: any) => void | Promise<void>>> = new Map();

  const emitInternal = (event: any, payload: any) => {
    const handlersOfEvent = eventHandlers.get(event);
    if (handlersOfEvent?.length) {
      handlersOfEvent.forEach((handler) => {
        handler(payload);
      });
    }
  };

  const createWsInstance = () => {
    tryReconnectFn = () => {
      window.setTimeout(() => {
        createWsInstance();
        emitInternal("reconnected", null);
      }, retryDelay);
    };
    const wsUrl = typeof url === "function" ? url() : url;
    wsInstance = new WebSocket(wsUrl);

    wsInstance.onopen = (e) => {
      emitInternal("connected", e);
    };

    wsInstance.addEventListener("message", (e: any) => {
      const messageReceived = JSON.parse(e.data);
      const entries = Object.entries(messageReceived ?? {});
      if (entries.length) {
        entries.forEach(([event, payload]) => emitInternal(event, payload));
      }
    });
    wsInstance.onclose = tryReconnectFn;
  };

  createWsInstance();

  return {
    // emit to server
    emit(event, payload) {
      wsInstance.send(
        JSON.stringify({
          ...payload,
          event,
        }),
      );
    },

    on(event, handler) {
      const handlers = eventHandlers.get(event);
      eventHandlers.set(event, handlers?.length ? [...handlers, handler] : [handler]);
    },

    off(event, fnRef = null) {
      if (fnRef) {
        const handlers = eventHandlers.get(event);
        if (handlers?.length) {
          eventHandlers.set(
            event,
            handlers.filter((handler) => handler !== fnRef),
          );
        }
      } else {
        eventHandlers.delete(event);
      }
    },

    close() {
      wsInstance.removeEventListener("close", tryReconnectFn);
      wsInstance.close();
      emitInternal("disconnected", null);
    },

    reconnect() {
      createWsInstance();
      emitInternal("reconnected", null);
    },
  };
};

const socket = (typeof window !== 'undefined') ? WebsocketClient({
  url: getWsEndpoint,
}) : null;

export default socket;
