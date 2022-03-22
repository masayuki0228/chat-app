import Head from "next/head";
import { SignIn } from "src/component/SignIn";

export default function Sign() {
  return (
    <div>
      <Head>
        <title>SignIn</title>
      </Head>

      <SignIn />
    </div>
  );
}
