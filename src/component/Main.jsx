import Head from "next/head";

export function Main(props) {
  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      {props.name}
    </div>
  );
}
