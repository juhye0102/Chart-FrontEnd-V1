import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import dayjs from "dayjs";
interface mealProps {
  DDISH_NM: string;
}
interface daytimeprops {
  day: string;
}
const Day = styled.div`
  position: inherit;
  top: 20px;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #93caee;
`;
const Title = styled.h1`
  top: 25px;
  position: inherit;
  text-align: center;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #696969;
`;
const Inner = styled.div`
  position: relative;
  top: 150px;
  left: 0;
  right: 0;
  width: 1120px;
  height: 730px;
  margin: 0 auto;
`;
const Container = styled.li`
  list-style: none;
  margin-right: 35px;
  margin-top: 100px;
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
  font-size: 32px;
  list-style-type: none;
  text-align: center;
`;
const Before = styled(BsChevronLeft)`
  position: absolute;
  top: 75px;
  left: 255px;
  width: 70px;
  color: #696969;
  height: 70px;
  :hover {
    cursor: pointer;
  }
`;
const Next = styled(BsChevronRight)`
  position: absolute;
  top: 75px;
  left: 785px;
  width: 70px;
  color: #696969;
  height: 70px;
  :hover {
    cursor: pointer;
  }
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
const MealMenuEl = styled.span`
  font-family: "Amiko", sans-serif;
  font-weight: 500;
  font-size: 32px;
`;
const Daytime = styled.li`
  font-family: "Amiko", sans-serif;
  color: #696969;
  font-size: 24px;
  list-style: none;
  float: left;
  margin-left: 335px;
`;
const Daytimeul = styled.ul`
  left: -260px;
  top: 200px;
  right: 0;
  position: absolute;
  width: 1200px;
  height: 40px;
`;
export default function Meal() {
  const [showMenu, setShowMenu] = useState([]);
  const [day, setDay] = useState<any>(new Date());
  let today = new Date(day);
  let dateString: string = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let dayName: string = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  useEffect(() => {
    console.log("asd");
    const date = new Date(day);
    const mealDate = dayjs(date).format("YYYYMMDD");
    asdf();
    async function asdf() {
      const params = {
        // Type: "json",
        // pIndex: 1,
        // pSize: 100,
        // ATPT_OFCDC_SC_CODE: "G10",
        // SD_SCHUL_CODE: "7430310",
        MLSV_YMD: mealDate,
      };

      await axios
        .get(
          "https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430310",
          { params }
        )
        .then((res) => {
          const data = res.data;
          setShowMenu(data.mealServiceDietInfo[1].row);
          console.log(showMenu);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [day, setDay]);
  const daytime: daytimeprops[] = [
    { day: "아침" },
    { day: "점심" },
    { day: "저녁" },
  ];
  const previousDay = (): void => {
    setDay(new Date(day.setDate(day.getDate() - 1)));
  };
  const nextDay = (): void => {
    setDay(new Date(day.setDate(day.getDate() + 1)));
  };
  let index: number = 0;
  return (
    <>
      <Inner>
        <Before onClick={previousDay} />
        <Next onClick={nextDay} />

        <Entire>
          <ul>
            <li className="swiper">
              <div className="niem">
                <Day>{dateString}</Day>
                <Title>{dayName} 식단표</Title>
              </div>
              <Daytimeul>
                {daytime.map((user: daytimeprops) => (
                  <Daytime>{user.day}</Daytime>
                ))}
              </Daytimeul>

              <ul>
                <Sort>
                  {showMenu.map((user: mealProps) => (
                    <>
                      <Container>
                        <MealMenu>
                          {user.DDISH_NM.split("<br/>").map((line: string) => {
                            return (
                              <MealMenuEl key={index++}>
                                {line}
                                <br />
                              </MealMenuEl>
                            );
                          })}
                        </MealMenu>
                      </Container>
                    </>
                  ))}
                </Sort>
              </ul>
            </li>
          </ul>
        </Entire>
      </Inner>
    </>
  );
}
