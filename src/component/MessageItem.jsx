import Image from "next/image";
import { useEffect, useRef } from "react";

export function MessageItem(props) {
  const ref = useRef(null);
  useEffect(() => {
    if (props.isLastItem) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.isLastItem]);
  return (
    <li className="m-4 grid grid-cols-10" ref={ref}>
      <Image
        src="/message.svg"
        alt="messageIcon"
        width={50}
        height={50}
        layout="fixed" //これがあると全てのサイズが揃う
        priority
        className="col-start-1 col-span-1 -scale-x-100"
      />
      <div className="col-start-3 col-span-8 md:col-start-2 md:col-span-9">
        <strong className="block">{props.name}</strong>
        <p>{props.text}</p>
      </div>
    </li>
  );
}
