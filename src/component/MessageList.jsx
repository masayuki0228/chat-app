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

  const length = messages.length;

  return (
    <ul className="overflow-auto">
      {messages.map((message, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={message.key}
            name={message.name}
            text={message.text}
            isLastItem={isLastItem}
          />
        );
      })}
    </ul>
  );
}
