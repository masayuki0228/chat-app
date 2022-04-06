import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Main } from "src/component/Main";
import { userState } from "src/store/userState";

export default function Index() {
  const name = useRecoilValue(userState);
  const router = useRouter();
  useEffect(() => {
    if (name.name === "") {
      router.push("/signIn");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Main />;
}
