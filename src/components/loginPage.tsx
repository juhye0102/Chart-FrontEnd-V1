import styled from "styled-components";
import { useState, useEffect } from "react";
const Login = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 999999px;
  z-index: 2;
  margin: auto;
  width: 40%;
  height: 80%;
  border-radius: 50px;
  background-color: #ffffff;
`;
const Endloginbtn = styled.div`
  border-radius: 30px;
  background-color: #93caee;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;

  top: 70%;
  height: 15%;
  width: 80%;
  :hover {
    background-color: #6497b5;
  }
`;
const Signintxt = styled.div`
  position: absolute;
  font-family: "Noto Sans", sans-serif;
  bottom: 0;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
`;
const Lgul = styled.ul`
  position: absolute;
  border-radius: 50px;
  padding: 0;
  top: 22%;
  margin: 0;
  /* background-color: #000000; */
  width: 100%;
  height: 40%;
  li {
    list-style: none;
    height: 20%;
    width: 75%;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 5%;
  }
  input {
    font-size: 20px;
    border-radius: 5px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 100;
    height: 100%;
    width: 100%;
    border: solid 2px #93caee;
    overflow: scroll;
    :focus {
      border: solid 2px #6497b5;
    }
  }
`;
const Signin = styled.h1`
  font-family: "Noto Sans", sans-serif;
  margin-top: 5%;
  font-weight: 500;
  text-align: center;
  color: #696969;
  font-size: 48px;
`;
export default function LoginPage() {
  const [state, setState] = useState<boolean>(false);
  const Endlogin = () => {
    setState(!state);
  };
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const dtl = [
    { school: "대덕소프트웨어마이스터고등학교" },
    { school: "계룡고등학교" },
  ];
  const grade = [{ grade: 1 }, { grade: 2 }, { grade: 3 }];
  const inputel = [
    { placeholder: "학교를 검색하세요", list: "depList" },
    { placeholder: "학년을 입력하세요", list: "class" },
    { placeholder: "반을 입력하세요", list: "" },
  ];
  return (
    <>
      {state ? (
        <></>
      ) : (
        <Login>
          <Signin>Sign in</Signin>
          <Lgul>
            {inputel.map((user) => (
              <li>
                <input
                  type="text"
                  placeholder={user.placeholder}
                  list={user.list}
                ></input>
              </li>
            ))}
            <datalist id="depList">
              {dtl.map((user) => (
                <option value={user.school}></option>
              ))}
            </datalist>
            <datalist id="class">
              {grade.map((user) => (
                <option value={user.grade}></option>
              ))}
            </datalist>
          </Lgul>

          <Endloginbtn onClick={Endlogin}>
            <Signintxt>Sign in</Signintxt>
          </Endloginbtn>
        </Login>
      )}
    </>
  );
}
