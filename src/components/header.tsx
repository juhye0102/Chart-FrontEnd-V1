import React from "react";
import Image from "../images/Appicon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loginpage from "./login";
import { useRecoilState } from "recoil";
import loginPageState from "../atom";
const Head = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 70px;
  top: 0px;
  left: 0px;
  padding: 0%;
`;
const Logo = styled.img`
  position: absolute;
  width: 200px;
  height: 60px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
`;
const Mainmenu = styled.ul`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  li {
    list-style-type: none;
  }
  .item .item__contents {
    width: 100%;
    position: fixed;
    left: 0;
    display: block;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const ItemName = styled(Link)`
  margin: 10px 40px 11px 45px;
  font-size: 20px;
  opacity: 0.61;
  /* color: #000000; */
  color: #000000;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  text-decoration: none;
  &:focus,
  &:hover {
    color: #93caee;
  }
`;
const LogIn = styled.div`
  margin: 0px 40px 11px 45px;
  font-size: 20px;
  opacity: 0.61;
  color: #000000;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  text-decoration: none;
  &:focus,
  &:hover {
    color: #93caee;
  }
`;
const arr = [
  { value: "시간표", id: "/login/schedule" },
  { value: "게시판", id: "/login/board" },
  { value: "마이페이지", id: "/login/mypage" },
];
export default function Header() {
  // const searchInputRef = useRef<any>(null);
  // const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [state, setState] = useRecoilState<boolean>(loginPageState);
  const showLogIn = () => {
    setState(!state);
  };
  // window.onclick((e) => setState(false));
  return (
    <>
      {state ? (
        <>
          <Loginpage />
        </>
      ) : (
        <></>
      )}
      <Head>
        <StyledLink to="/">
          <Logo src={Image}></Logo>
        </StyledLink>
        <Mainmenu>
          {arr.map((user) => (
            <li className="item">
              <ItemName to={user.id}>{user.value}</ItemName>
            </li>
          ))}
          <li>
            <LogIn onClick={showLogIn}>Login</LogIn>
          </li>
        </Mainmenu>
      </Head>
    </>
  );
}
