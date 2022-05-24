import styled from "styled-components";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Inner = styled.div`
  width: 100%;
  height: 800px;
  /* background-color: red; */
`;
const Day = styled.div`
  position: inherit;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #93caee;
`;
const Title = styled.h1`
  position: inherit;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #696969;
`;
const Z = styled.div`
  position: relative;
  top: 65px;
  left: 0;
  right: 0;
  width: 1120px;
  height: 730px;
  margin: 0 auto;
`;
const Container = styled.li`
  list-style: none;
  margin-right: 35px;
  width: 350px;
  height: 465px;
  border-radius: 20px;
  background-color: #ffffff;
`;
const Sort = styled.div`
  position: absolute;
  display: flex;
  margin: 0;
  left: -40px;
`;
const MealMenu = styled.li`
  list-style-type: none;
  text-align: center;
`;
const Before = styled(BsChevronLeft)`
  position: absolute;
  top: 50px;
  left: 260px;
  width: 70px;
  color: #696969;
  height: 70px;
`;
const Next = styled(BsChevronRight)`
  position: absolute;
  top: 50px;
  left: 780px;
  width: 70px;
  color: #696969;
  height: 70px;
`;
const Entire = styled.div`
  .swiper {
    list-style: none;
    position: absolute;
    float: left;
    margin-right: 30px;
  }
  .niem {
    position: relative;
    left: 390px;
  }
`;

export default function Meal() {
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTime(Date.prototype.getDate());
  //   }, 1000);
  //   Date.prototype.getDate();
  //   return () => clearInterval(id);
  // }, [time]);
  // let rr;
  // useEffect((rr) => {
  //   rr = Date.Date.prototype.getDate();
  //   if (rr === 0) {
  //     rr = "월요일";
  //   } else if (rr === 1) {
  //     rr = "화요일";
  //   } else if (rr === 2) {
  //     rr = "수요일";
  //   } else if (rr === 3) {
  //     rr = "목요일";
  //   } else if (rr === 4) {
  //     rr = "금요일";
  //   } else if (rr === 5) {
  //     rr = "토요일";
  //   } else {
  //     rr = "일요일";
  //   }
  //   return rr;
  // });
  let rr = new Date().toLocaleDateString().split(".");
  const ff: number = new Date().getDay();
  function Dw(rr: Number) {
    let fff = "월요일";
    if (rr === 1) {
      fff = "월요일";
    } else if (rr === 2) {
      fff = "화요일";
    } else if (rr === 3) {
      fff = "수요일";
    } else if (rr === 4) {
      fff = "목요일";
    } else if (rr === 4) {
      fff = "금요일";
    } else if (rr === 6) {
      fff = "토요일";
    } else {
      fff = "일요일";
    }
    return fff;
  }
  const fw = Dw(ff);
  rr[0] = rr[0] + "년";
  rr[1] = rr[1] + "월";
  rr[2] = rr[2] + "일";
  const ll = rr.join("");
  const arr = [
    {
      day: `${ll}`,
      title: `${fw} 식단표`,
    },
  ];
  const arr2 = [
    { data: "급식 없음" },
    { data: "급식 없음" },
    { data: "급식 없음" },
  ];
  return (
    <>
      <Inner>
        <Z>
          <Before />
          <Next />
          <Entire>
            <ul>
              {arr.map((user) => (
                <>
                  <li className="swiper">
                    <div className="niem">
                      <Day>{user.day}</Day>
                      <Title>{user.title}</Title>
                    </div>
                    <ul>
                      <Sort>
                        {arr2.map((user) => (
                          <>
                            <Container>
                              <MealMenu>{user.data}</MealMenu>
                            </Container>
                          </>
                        ))}
                      </Sort>
                    </ul>
                  </li>
                </>
              ))}
            </ul>
          </Entire>
        </Z>
      </Inner>
    </>
  );
}
