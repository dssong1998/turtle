import React from "react";
import { Helmet } from "react-helmet-async";

const HeaderTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} • 부기북스</title>
    </Helmet>
  );
};
export default HeaderTitle;
