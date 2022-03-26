import Image from "next/image";
import { useState } from "react";
import { MessageField } from "src/component/MessageField";

export function MessageInputField(props) {
  const [text, setText] = useState("");
  return (
    <div className="grid grid-cols-10 m-4">
      <div className="col-start-1 col-span-1">
        <Image src="/icon.svg" alt="Icon" width={60} height={60} />
      </div>
      <div className="col-start-2 col-span-8">
        <MessageField name={props.name} text={text} setText={setText} />
      </div>
      <div className="col-start-10 col-span-1">send</div>
    </div>
  );
}
