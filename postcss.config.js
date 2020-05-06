module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
    }),
    require("cssnano")({
      // подключили cssnano
      preset: "default", // выбрали настройки по умолчанию
    }),
  ],
};
