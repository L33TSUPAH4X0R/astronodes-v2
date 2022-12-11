import slide from "../../assets/banner.mp4";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Wrapper from "../Wrapper";

const BannerMobile = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });
  return (
    <Wrapper
      style={{ fontFamily: "Sora , sans-serif", justifyContent: "center" }}
    >
      {isTabletOrMobile ? (
        <video height="350px" src={slide} autoPlay muted />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default BannerMobile;
