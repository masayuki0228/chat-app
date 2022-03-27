import { messageRef } from "src/firebase";
import { onValue } from "firebase/database";
import { useState, useEffect } from "react";

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
  console.log(messages);
  return <div>MessageList</div>;
}
