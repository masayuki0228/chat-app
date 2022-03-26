import { useState } from "react";

export function MessageField(props) {
  const [isComposed, setIsComposed] = useState(false);

  console.log(props.text);
  return (
    <input
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      onChange={(e) => props.setText(e.target.value)}
      onKeyDown={(e) => {
        // const text = e.target.value;
        if (e.target.value === "") return;
        if (isComposed) return;
        if (e.key === "Enter") {
          console.log("fire");
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
