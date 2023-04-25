import React, { createContext, useState, useEffect, useContext } from "react";
import socket from "../services/socket";
import { UserPayload } from "../shared/variables";
import AuthContext from "./AuthProvider";

interface GeneralProps {
  children: JSX.Element[] | JSX.Element;
  user: UserPayload;
}

interface ContextProps {
  userChat: UserPayload | undefined;
  listUsers: any;
  setUserChat: any;
  setListUsers: any;
  message: any;
  setMessage: any;
  listMessage: any;
  setListMessage: any;
  listLocations: { lng: number; lat: number; capacity: number }[];
  setListLocation: any;
}

const GeneralContext = createContext<ContextProps>({
  userChat: undefined,
  setUserChat: () => {},
  listUsers: undefined,
  setListUsers: () => {},
  message: "",
  setMessage: () => {},
  listMessage: [""],
  setListMessage: () => {},
  listLocations: [],
  setListLocation: () => {},
});

export const GeneralProvider: React.FC<GeneralProps> = ({ children }) => {
  const [userChat, setUserChat] = useState<UserPayload>();
  const [listUsers, setListUsers] = useState<UserPayload[][]>([]);
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState<string[]>([]);
  const [listLocations, setListLocation] = useState<{ lng: number; lat: number; capacity: number }[]>([]);

  const { user } = useContext(AuthContext);

  const parseObject = (data: string) => {
    const newData: any = JSON.parse(data);
    delete newData[user.data.id === undefined ? 0 : user.data.id];
    const arr = Object.entries(newData).map(([key, value]: [string, any]) => [JSON.parse(value) as UserPayload]);
    return arr;
  };

  useEffect(() => {
    socket.emit("get-all-infor", "");
    socket.on("list-users-online", (data: string) => {
      setListUsers(parseObject(data));
    });

    socket.on("send-message", (data: { messages: string[]; userChat: UserPayload }) => {
      console.log(data);
      setListMessage([...data.messages].reverse());
      setUserChat(data.userChat);
    });

    socket.on("messages", (data: any) => {
      setListMessage([...data].reverse());
    });
    return () => {
      socket.off("get-list-users-online");
      socket.off("list-users-online");
      socket.off("send-message");
      socket.off("messages");
    };
  }, []);

  return (
    <GeneralContext.Provider
      value={{ userChat, setUserChat, listUsers, setListUsers, listMessage, setListMessage, message, setMessage, listLocations, setListLocation }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
