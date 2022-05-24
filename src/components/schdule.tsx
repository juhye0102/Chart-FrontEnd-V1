import styled from "styled-components";
const Ta = styled.div`
  position: absolute;
  height: 624px;
  width: 699px;
  left: 50%;
  top: 130px;
  border-radius: 40px;
  background-color: #ffffff;
  margin-bottom: 200px;
`;
const Ln = styled.div`
  position: absolute;
  width: 2px;
  height: 594px;
  background: #93caee;
  border-radius: 1px;
  left: 100px;
  top: 15px;
`;
const Ln1 = styled.div`
  position: absolute;
  width: 669px;
  height: 2px;
  left: 15px;
  top: 100px;
  background: #93caee;
  border-radius: 1px;
`;
const Sort = styled.ul`
  position: absolute;
  display: flex;
  left: 30px;
  top: 20px;
`;
const St = styled.ul`
  position: absolute;
  top: 65px;
  left: -15px;
`;
const Day = styled.li`
  list-style: none;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #b5b3b3;
  margin-left: 85px;
`;
const Day1 = styled.li`
  list-style: none;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
  color: #b5b3b3;
  margin-top: 35px;
`;
const Sr = styled.div`
  position: absolute;
  display: flex;
  top: 65px;
  left: 75px;
  ul {
    padding-left: 65px;
  }
  li {
    list-style: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 36px;
    color: #696969;
    margin-top: 35px;
  }
`;
const H2 = styled.div`
  position: absolute;
  top: 150px;
  left: 110px;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #93caee;
`;
const H1 = styled.div`
  position: absolute;
  top: 225px;
  left: 110px;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #696969;
`;
const arr = [
  { id: "월" },
  { id: "화" },
  { id: "수" },
  { id: "목" },
  { id: "금" },
];
const arr1 = [
  { key: "1교시" },
  { key: "2교시" },
  { key: "3교시" },
  { key: "4교시" },
  { key: "5교시" },
  { key: "6교시" },
  { key: "7교시" },
];
const arr2 = [
  [
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
  ],
  [
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
  ],
  [
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
  ],
  [
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
  ],
  [
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
    { id: "창체" },
    { id: "체창" },
  ],
];
const arr3 = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
export default function Schedule() {
  return (
    <>
      <H2>2022년 1학기</H2>
      <H1>2-2시간표</H1>
      <Ta>
        <Ln />
        <Ln1 />
        <Sort>
          {arr.map((user) => (
            <Day>{user.id}</Day>
          ))}
        </Sort>
        <St>
          {arr1.map((user) => (
            <Day1>{user.key}</Day1>
          ))}
        </St>
        <Sr>
          {arr3.map((user, idx) => (
            <ul>
              {arr2[idx].map((user) => (
                <li>{user.id}</li>
              ))}
            </ul>
          ))}
        </Sr>
      </Ta>
    </>
  );
}
