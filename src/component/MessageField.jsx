import { useState } from "react";
import { pushMessage } from "src/firebase";

export function MessageField(props) {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <input
      ref={props.inputEl}
      className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      onChange={(e) => props.setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.target.value === "") return;
        if (isComposed) return;
        if (e.key === "Enter") {
          pushMessage({ name: props.name, text: props.text });
          props.setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={props.text}
    ></input>
  );
}
