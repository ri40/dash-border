/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "#FFFFFF",
        greyColor: "ADADAD",
        greyDarkColor: "#AEAEB2",
        beigeColor: "#EEE9E1",
        beigeDarkColor: "#D6D1CA",
        imagePlaceHolderColor: "#EFEFEF",
        textPlaceHolder: "#D4D4D4",
        yellowColorB: "#F4CE48",
        garagblackColor: "#231A2A",
      },

      fontFamily: {
        cairoBold: "Cairo-Bold",
        cairoMedium: "Cairo-Medium",
        cairoRegular: "Cairo-Regular",
        cairoSemiBold: "Cairo-SemiBold",
      },
    },
  },
};
