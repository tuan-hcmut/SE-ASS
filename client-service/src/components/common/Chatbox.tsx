import React, { useState, useContext, useEffect, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineSend } from "react-icons/ai";
import GeneralContext from "../../context/generalProvider";
import socket from "../../services/socket";
import AuthContext from "../../context/AuthProvider";

const ChatBox: React.FC = () => {
  const { userChat, setUserChat, message, setListMessage, listMessage, setMessage } = useContext(GeneralContext);
  const { user } = useContext(AuthContext);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messageContainer = messageContainerRef.current;
    if (messageContainer === null) return;

    function handleScroll() {
      if (messageContainer === null) return;
      if (messageContainer.scrollTop + messageContainer.clientHeight >= messageContainer.scrollHeight) {
        return;
      }
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    handleScroll();
  }, [listMessage]);

  const submitHandle = (e: any) => {
    e.preventDefault();
    if (e.type === "submit") {
      setListMessage([...listMessage, [userChat?.id, user.data.id, message].join(".")]);
      const data = {
        message,
        user: user.data,
        userChat,
      };

      socket.emit("send-message", data);
      setMessage("");
    } else setMessage(e.target.value);
  };

  const clickHandle = () => {
    setListMessage([...listMessage, [userChat?.id, user.data.id, message].join(".")]);
    const data = {
      message,
      user: user.data,
      userChat,
    };
    socket.emit("send-message", data);
    setMessage("");
  };

  const handleCloseBoxChat = () => {
    setUserChat(undefined);
  };

  return (
    <>
      <div className={`${userChat ? "fixed" : "hidden"} w-[35rem] h-[45rem] bottom-0 right-[23%] bg-linear-color z-10 rounded-t`}>
        <div className="w-[100%] h-[5rem] border-b-[1px] border-color-grey-dark">
          <div className="flex justify-between h-[100%] px-5 items-center">
            <div className="flex gap-4 items-center">
              <img src={`/${userChat?.photo}`} alt="img" className="w-[3.5rem] h-[3.5rem] object-cover rounded-full" />
              <div className="text-2xl font-medium text-white">
                <div className="flex flex-col gap-1">
                  <div>{userChat?.fullName}</div>
                  <div className="flex gap-1">
                    <RxDotFilled className="text-green-500" />
                    <div className="text-xl font-medium text-color-grey-dark">Active</div>
                  </div>
                </div>
              </div>
            </div>
            <AiOutlineCloseCircle
              className="text-4xl font-medium text-white hover:text-red-700 transition duration-100 cursor-pointer"
              onClick={() => {
                handleCloseBoxChat();
              }}
            />
          </div>
        </div>
        <div className=" w-[100%]">
          <div className="p-5 flex flex-col gap-2 items-end h-[33.5rem] overflow-y-scroll scrollbar-boxchat" ref={messageContainerRef}>
            {listMessage.map((el: any, index: number) => {
              return (
                (user.data.id === el.split(".")[0] || user.data.id === el.split(".")[1]) &&
                (userChat?.id === el.split(".")[1] || userChat?.id === el.split(".")[0]) && (
                  <div className={`${userChat?.id === el.split(".")[1] && "flex items-center gap-4 self-start"}`}>
                    {userChat?.id === el.split(".")[1] && (
                      <div>
                        <img src={`/${userChat?.photo}`} alt="img" className="w-[3.5rem] h-[3.5rem] object-cover rounded-full" />
                      </div>
                    )}
                    <div
                      className={`px-10 py-3 rounded-full ${
                        user.data.id !== el.split(".")[0] ? "bg-blue-500" : "bg-color-grey-dark"
                      } text-2xl font-medium text-white inline-block max-w-[23rem] break-words`}
                    >
                      {el.split(".")[2]}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <form className="w-[100%] h-[6.5rem] flex justify-between items-center px-5" onSubmit={submitHandle}>
          <input
            type={"text"}
            placeholder="Enter your text..."
            min={1}
            max={100}
            value={message}
            onChange={submitHandle}
            className="bg-color-dark rounded-full w-[29rem] h-[4rem] text-white px-5 text-2xl"
          />
          <AiOutlineSend
            className="text-4xl text-blue-600 cursor-pointer"
            onClick={() => {
              clickHandle();
            }}
          />
        </form>
      </div>
    </>
  );
};

export default ChatBox;
