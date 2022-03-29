import { pushMessage } from "src/firebase";
import Image from "next/image";

export function MessageSubmitButton(props) {
  return (
    <div>
      <div className="m-auto w-full inline-flex justify-center p-1 sm:mt-0 sm:ml-3 sm:w-auto">
        <button
          disabled={props.text === ""}
          onClick={() => {
            pushMessage({ name: props.name, text: props.text });
            props.setText("");
            props.inputEl.current.focus();
          }}
        >
          <Image src="/send.svg" alt="send" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
