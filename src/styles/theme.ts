import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B", // Dark/Headings and Text
      "500": "#999999", // Dark/Info
      "400": "rgba(153, 153, 153, 0.5)", // Dark/Info 50%
      "300": "#DADADA", // Light/Info
      "100": "#F5F8FA", // Light/Headings and Text
    },
    yellow: {
      "400": "#FFBA08", //Highlight
      "300": "rgba(255, 186, 8, 0.5)", //Highlight 50%
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700",
      },
    },
  },
});
