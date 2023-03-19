import React, { createContext, useState, useEffect, useContext } from "react";
import { io, Socket } from "socket.io-client";

interface GeneralProps {
  children: JSX.Element[] | JSX.Element;
}

interface ContextProps {
  socket: any;
}

const GeneralContext = createContext<ContextProps>({
  socket: null,
});

const socket = io(`http://redis-srv:3000`);

console.log(socket);
export const GeneralProvider: React.FC<GeneralProps> = ({ children }) => {
  return <GeneralContext.Provider value={{ socket }}>{children}</GeneralContext.Provider>;
};

export default GeneralContext;
