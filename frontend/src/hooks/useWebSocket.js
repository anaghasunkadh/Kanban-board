import { useEffect } from "react";
import { io } from "socket.io-client";

export const useWebSocket = (onMessage) => {
    useEffect(() => {
        const socket = io("http://localhost:5000");

        socket.on("updateBoard", onMessage);

        return () => socket.disconnect();
    }, [onMessage]);
};
