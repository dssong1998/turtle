import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GAHoc = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-BPG83F1RDZ", {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  }, []);
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BPG83F1RDZ"
        ></script>
      </Helmet>
      {children}
    </>
  );
};
export default GAHoc;
