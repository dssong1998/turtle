import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GAHoc = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-WHBKXRV");
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
        state: window.history?.state,
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
