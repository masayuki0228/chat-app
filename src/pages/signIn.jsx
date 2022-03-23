import Head from "next/head";
import { SignIn } from "src/component/SignIn";
import { useState } from "react";

export default function Sign() {
  const [name, setName] = useState("sss");
  console.log(name);
  return (
    <div>
      <Head>
        <title>SignIn</title>
      </Head>

      <SignIn setName={setName} />
    </div>
  );
}
