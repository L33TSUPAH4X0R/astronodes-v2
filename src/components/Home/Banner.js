import { useMediaQuery } from "react-responsive";
import slide from "../../assets/banner.mp4";
import React from "react";
import classes from "./Banner.module.css";
import Wrapper from "../Wrapper";

const Banner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });
  return (
    <Wrapper // DESKTOP İÇİN
      style={{ fontFamily: "Sora , sans-serif", justifyContent: "flex-end" }}
    >
      <h1>
        <p style={{ fontSize: "40px" }}>ASTRONODES</p>
        <br />
        <p style={{ fontSize: "20px" }}>
          Aims to guide people for easy node installation and to spread it to a
          wide audience. It contributes to creating a decentralized environment
          with the participation of many node operators in the network.
        </p>
      </h1>
      {isTabletOrMobile ? "" : <hr className={classes.hr1} />}
      {isTabletOrMobile ? (
        ""
      ) : (
        <video height="600px" src={slide} autoPlay muted />
      )}
    </Wrapper>
  );
};

export default Banner;
