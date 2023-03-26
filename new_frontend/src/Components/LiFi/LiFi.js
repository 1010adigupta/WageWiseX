import React, { useMemo } from "react";
import style from "./LiFi.module.css";
import { LiFiWidget, WidgetConfig } from "@lifi/widget";
import Navbar from "../Navbar/Navbar";

export const WidgetPage = () => {
  const widgetConfig = useMemo(
    () => ({
      fromChain: 137,
      containerStyle: {
        border: `1px solid ${
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "rgb(66, 66, 66)"
            : "rgb(234, 234, 234)"
        }`,
        borderRadius: "16px",
        marginTop: "80px",
      },
      theme: {
        palette: {
          primary: { main: "#9900d1" },
          secondary: { main: "#F5B5FF" },
        },
        shape: {
          borderRadius: 0,
          borderRadiusSecondary: 0,
        },
      },
      appearance: "dark",
      disableAppearance: true,
    }),
    []
  );

  return (
    <div className={style.container}>
      <Navbar />
      <LiFiWidget config={widgetConfig} />
    </div>
  );
};
