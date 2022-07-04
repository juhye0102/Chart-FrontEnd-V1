import Meal from "./meal";
import Section from "./section";
import { useEffect } from "react";
import axios from "axios";
import {
  schoolCode,
  areaCode,
  gradeEl,
  classsNum,
  isSignUp,
} from "../../State/atom";
import { useRecoilValue, useRecoilState } from "recoil";
export default function Mainpage() {
  const [state, setState] = useRecoilState(isSignUp);
  const SchoolCode = useRecoilValue(schoolCode);
  const AreaCode = useRecoilValue(areaCode);
  const grade = useRecoilValue(gradeEl);
  const ClassNum = useRecoilValue(classsNum);
  useEffect(() => {
    const func = window.location.search;
    const code = func.replace("?code=", "");
    console.log(code);
    acessToken();
    async function acessToken() {
      const logindata = {
        accessToken: code,
        schoolCode: SchoolCode,
        areaCode: AreaCode,
        grade: grade,
        classNum: ClassNum,
      };
      await axios
        .post("http://118.67.130.149:8080/api/v1/auth/signup/code", logindata)
        .then((res) => {
          console.log(res);
          setState(true);
        })
        .catch((err) => {
          console.log(err);
          console.log("잘못한거임ㅋ");
        });
    }
  }, []);
  console.log(state);
  if (state === true) {
    const func = window.location.search;
    const code = func.replace("?code=", "");
    axios
      .post("http://118.67.130.149:8080/api/v1/auth/login/code", { code })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "잘못된로그인오류입니다.");
      });
  }
  return (
    <>
      <Meal />
      <Section />
    </>
  );
}
