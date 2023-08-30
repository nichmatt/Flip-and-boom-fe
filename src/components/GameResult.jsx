// import { setMusicSetting } from "../actionCreators";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import { pause } from "../helpers";

import Card1 from "/assets/card/amethyst.png";
import Card2 from "/assets/card/citrus.png";
// import { fetchUserScoreExp } from "../actionCreators/updateUser";

export default function GameResult({ hp, totalTurn }) {
  const { gameMode } = useSelector((state) => state.gameModeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [exp, setExp] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const props = useSpring({
    val: score,
    from: {
      val: 0,
    },
  });

  const props2 = useSpring({
    val: exp,
    from: {
      val: 0,
    },
  });

  useEffect(() => {
    if (hp > 0) {
      (async () => {
        await pause(2500);

        let tempScore = 0;

        for (let i = 1; i <= hp; i++) {
          tempScore += 1 + 1 * (i / 1000);
        }

        tempScore = Math.floor(tempScore);

        setScore(tempScore);

        await pause(3000);

        tempScore += Math.floor(25000 / totalTurn);

        setScore(tempScore);

        await pause(2000);

        switch (gameMode) {
          case "EAZY":
            setExp(Math.round(tempScore * 0.25));
            break;

          case "MEDIUM":
            setExp(Math.round(tempScore));
            break;

          case "HARD":
            setExp(Math.round(tempScore * 2));
            break;

          default:
            setExp(Math.round(tempScore * 5));
            break;
        }
        setShowCard(true);
      })();
    } else {
      setShowCard(true);
    }
  }, []);

  const handleAfterMatch = (choice) => {
    if (hp !== 0) {
      const payload = {
        difficulty: gameMode.toLowerCase(),
        score,
        experience: exp,
      };
      dispatch(fetchUserScoreExp(payload));
      console.log(payload, "<<<< ini payload");
    }
    if (choice === "leaderboard") {
      navigate("/leaderboard");
    } else if (choice === "home") {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="fixed h-screen w-screen z-20 bg-[rgba(0,0,0,0.7)] top-0 left-0 flex justify-center items-center animate__animated animate__fadeIn">
        <div
          className="w-9/12 h-4/5 backdrop-blur-[2px]  rounded-[20px] flex flex-col items-center justify-center text-3xl font-bold text-white"
          style={{
            background:
              "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
          }}
        >
          <div className="grid grid-cols-3 w-full h-full flex-wrap">
            <div
              name="grid kiri"
              className="flex flex-col h-1/3 my-auto justify-between pl-10 italic tracking-tighter"
            >
              <div className="flex">
                <h1>HP REMAINING :&nbsp;</h1>
                <h2 className="animate__animated animate__fadeInRight animate__delay-1s">
                  {hp}
                </h2>
              </div>
              <div className="flex">
                <h1>TOTAL TURN :&nbsp;</h1>
                <h2 className="animate__animated animate__fadeInRight animate__delay-4s">
                  {totalTurn}
                </h2>
              </div>
              {hp > 0 ? (
                <>
                  <h1>
                    {/* SCORE : <NumberTween number={score} /> */}
                    SCORE : <animated.div className="number">
                      {props.val.interpolate(val => Math.floor(val) )}
                    </animated.div>
                  </h1>
                  <h1>
                    {/* EXPERIENCE : <NumberTween2 number={exp} /> */}
                    EXPERIENCE : <animated.div className="number">
                      {props2.val.interpolate(val => Math.floor(val) )}
                    </animated.div>
                  </h1>
                </>
              ) : (
                <>
                  <h1>You Lose</h1>
                </>
              )}
            </div>
            {showCard ? (
              <div
                name="grid tengah"
                className="tengah m-[20px]  w-[90%] h-[92%]  flex justify-center items-center rounded-md cursor-pointer"
              >
                <div
                  className="relative"
                  onClick={() => handleAfterMatch("leaderboard")}
                >
                  <img src={Card2} alt="card-button" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F98800]"
                    style={{ textShadow: "0.5px 0.1px 5px" }}
                  >
                    <i className="fa-solid fa-play text-center w-full text-[5rem]"></i>
                    <p className="my-[10px] uppercase">leaderboard</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {showCard ? (
              <div
                name="grid kanan"
                className="tengah m-[20px]  w-[90%] h-[92%]  flex justify-center items-center rounded-md cursor-pointer"
              >
                <div
                  className="relative"
                  onClick={() => handleAfterMatch("home")}
                >
                  <img src={Card1} alt="card-button" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#6306C6]"
                    style={{ textShadow: "0.5px 0.1px 5px" }}
                  >
                    <i className="fa-solid fa-house text-center w-full text-[5rem]"></i>
                    <p className="my-[10px] uppercase">home</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <audio autoPlay src="/assets/audio/hore.mp3">
        <source src="/assets/audio/hore.mp3" />
      </audio>
    </>
  );
}
