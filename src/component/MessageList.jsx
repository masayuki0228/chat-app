import { messageRef } from "src/firebase";
import { onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { MessageItem } from "src/component/MessageItem";

export function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    onValue(messageRef, (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);
  // console.log(messages);

  const length = messages.length;

  return (
    <ul className="overflow-auto">
      {messages.map((message, index) => {
        const isLastItem = length === index + 1;
        console.log(message);
        return (
          <MessageItem
            key={message.key}
            name={message.name}
            text={message.text}
            isLastItem={isLastItem}
          />
          // <li key={message.key} className="m-4 grid grid-cols-10" ref={ref}>
          //   <Image
          //     src="/message.svg"
          //     alt="messageIcon"
          //     width={50}
          //     height={50}
          //     layout="fixed" //これがあると全てのサイズが揃う
          //     priority
          //     className="col-start-1 col-span-1 -scale-x-100"
          //   />
          //   <div className="col-start-3 col-span-8 md:col-start-2 md:col-span-9">
          //     <strong className="block">{message.name}</strong>
          //     <p>{message.text}</p>
          //   </div>
          // </li>
        );
      })}
    </ul>
  );
}
