import Image from "next/image";
import { useState, useRef } from "react";
import { MessageField } from "src/component/MessageField";
import { MessageSubmitButton } from "src/component/MessageSubmitButton";

export function MessageInputField() {
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  return (
    <div className="grid grid-cols-10 m-4">
      <div className="col-start-1 col-span-1">
        <Image src="/icon.svg" alt="Icon" width={60} height={60} />
      </div>
      <div className="col-start-2 col-span-8">
        <MessageField
          text={text}
          setText={setText}
          inputEl={inputEl}
        />
      </div>
      <div className="col-start-10 col-span-1">
        <MessageSubmitButton
          text={text}
          setText={setText}
          inputEl={inputEl}
        />
      </div>
    </div>
  );
}
