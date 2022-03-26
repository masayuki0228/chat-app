import Image from "next/image";

export function MessageInputField() {
  return (
    <div className="grid grid-cols-10 m-4">
      <div className="col-start-1 col-span-1">
        <Image src="/icon.svg" alt="Icon" width={60} height={60} />
      </div>
      <div className="col-start-2 col-span-8">
        <input className="p-2.5 w-full text-sm rounded-lg border-b-2"></input>
      </div>

      <div className="col-start-10 col-span-1">send</div>
    </div>
  );
}
