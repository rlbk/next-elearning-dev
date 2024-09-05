import { ConfigProvider } from "antd";
import React from "react";

type Props = { children: React.ReactNode };

export default function ThemeProvider({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6dcffb",
        },
        components: {
          Button: {
            controlHeight: 45,
            borderRadius: 0,
            controlOutline: "none",
            defaultBorderColor: "#6dcffb",
          },
          Input: { controlHeight: 45, borderRadius: 0, controlOutline: "none" },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
