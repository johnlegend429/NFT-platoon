import { Router } from "next/router";
import type { AppProps } from "next/app";

import AOS from "aos";
import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "../styles/globals.css";
import "../styles/nprogress.css";
import "aos/dist/aos.css";

import AppLayout from "layouts/AppLayout";
import { useEffect } from "react";
import { MyMark } from "components/MyMark";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <AppLayout>
      <Component {...pageProps} />
      <MyMark />
    </AppLayout>
  );
}

export default MyApp;
