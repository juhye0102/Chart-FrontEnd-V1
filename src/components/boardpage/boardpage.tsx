import styled from "styled-components";
const Button = styled.div`
  position: absolute;
  left: 1347px;
  top: 774px;
  width: 507px;
  height: 80px;
  background-color: #93caee;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const Center = styled.div`
  color: #ffffff;
  font-family: "Noto Sans Kr", sans-serif;
  font-size: 30px;
  font-weight: 500;
  position: relative;
  width: 300px;
  height: 40px;
  left: 33%;
  top: 18%;
`;
export default function Boardpage() {
  return (
    <>
      <Button>
        <Center>새 글 작성하기</Center>
      </Button>
    </>
  );
}
