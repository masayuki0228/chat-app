import Head from "next/head";
import { MessageInputField } from "src/component/MessageInputField";
import { MessageList } from "src/component/MessageList";

export function Main(props) {
  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <div>
        <MessageList />
        <MessageInputField name={props.name}/>
      </div>
    </div>
  );
}
