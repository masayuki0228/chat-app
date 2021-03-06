import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { MessageInputField } from "src/component/MessageInputField";
import { MessageList } from "src/component/MessageList";

function setHeight() {
  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
}
if (typeof window !== "undefined") {
  setHeight();
  window.addEventListener("resize", setHeight);
}
export function Main() {
  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <div className={styles.main}>
        <MessageList />
        <MessageInputField />
      </div>
    </div>
  );
}
