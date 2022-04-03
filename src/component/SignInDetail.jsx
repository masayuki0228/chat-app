import Head from "next/head";
import { useState } from "react";

export function SignInDetail(props) {
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ようこそ
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ニックネーム"
                  onChange={(e) => setString(e.target.value)}
                  onKeyDown={(e) => {
                    if (isComposed) return;
                    if (e.key === "Enter") {
                      props.setName(string);
                      e.preventDefault();
                    }
                  }}
                  onCompositionStart={() => {
                    setIsComposed(true);
                  }}
                  onCompositionEnd={() => {
                    setIsComposed(false);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  if (string === "") {
                    alert("ニックネームを入力してください");
                  }
                  props.setName(string);
                }}
              >
                はじめる
              </button>
              <div className="mt-4 text-center text-gray-400">
                {`Copyright © masayuki`}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// target="_blank"で新規タブを開ける
