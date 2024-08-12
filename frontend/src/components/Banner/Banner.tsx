import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner">
      <img
        src="../../img/banner.jpg"
        className="img-fluid"
        alt="К весне готовы!"
      />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
};

export default Banner;
