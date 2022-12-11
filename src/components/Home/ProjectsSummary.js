import Wrapper from "../Wrapper";
import ObolIcon from "../../assets/Obol.png";
import SuiIcon from "../../assets/sui.png";
import StarknetIcon from "../../assets/starknet.png";
import "./ProjectSummary.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const ProjectsSummary = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  const [isCard1Shown, setisCard1Shown] = useState(false);
  const [isCard2Shown, setisCard2Shown] = useState(false);
  const [isCard3Shown, setisCard3Shown] = useState(false);

  const showCards = () => {
    if (window.scrollY < 200) {
      setisCard1Shown(false);
      setisCard2Shown(false);
      setisCard3Shown(false);
    }
    if (window.scrollY >= 200) {
      setisCard1Shown(true);
      setisCard2Shown(false);
      setisCard3Shown(false);
    }

    if (window.scrollY >= 600) {
      setisCard1Shown(false);
      setisCard2Shown(true);
      setisCard3Shown(false);
    }
    if (window.scrollY >= 1000) {
      setisCard1Shown(false);
      setisCard2Shown(false);
      setisCard3Shown(true);
    }
    if (window.scrollY >= 1400) {
      setisCard1Shown(false);
      setisCard2Shown(false);
      setisCard3Shown(false);
    }
  };

  window.addEventListener("scroll", showCards);

  return (
    <Wrapper
      style={{ backgroundColor: "whitesmoke", fontFamily: "Sora , sans-serif" }}
    >
      <div className="whitesmoke">
        <div className="container">
          <div
            className="card"
            style={{
              zIndex: isTabletOrMobile ? "20" : "",
            }}
          >
            <div
              className="face face1"
              style={{
                transform: isCard1Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <img className="icon" src={ObolIcon} alt=""></img>
                <h3 className="black">Obol</h3>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                transform: isCard1Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </p>
                <a href="/" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              top: isTabletOrMobile ? "-80px" : "",
              zIndex: isTabletOrMobile ? "10" : "",
            }}
          >
            <div
              className="face face1"
              style={{
                transform: isCard2Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <img className="icon" src={SuiIcon} alt=""></img>
                <h3 className="black">Sui</h3>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                transform: isCard2Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </div>
                <a href="/" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ top: isTabletOrMobile ? "-160px" : "" }}
          >
            <div
              className="face face1"
              style={{
                transform: isCard3Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <img className="icon" src={StarknetIcon} alt=""></img>
                <h3 className="black">StarkNet</h3>
              </div>
            </div>
            <div
              className="face face2"
              style={{
                transform: isCard3Shown
                  ? isTabletOrMobile
                    ? "translateY(0)"
                    : ""
                  : "",
              }}
            >
              <div className="content">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </p>
                <a href="/" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsSummary;
