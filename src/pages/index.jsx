import { SignIn } from "src/component/SignIn";
import { Main } from "src/component/Main";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  console.log(name);
  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
}
