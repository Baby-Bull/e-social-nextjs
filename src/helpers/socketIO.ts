import { io } from "socket.io-client";

const socketIO = io(process.env.NEXT_PUBLIC_WS || "http://localhost:3049");

export default socketIO;
