import { SignIn } from "src/component/SignIn";
import { Main } from "src/component/Main";
import { useState } from "react";
import jsconfig from "jsconfig.json";

export default function Index() {
  const [name, setName] = useState("");
  console.log(name);
  if (jsconfig.signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
}
