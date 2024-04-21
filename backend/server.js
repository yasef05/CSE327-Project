import APP from "./app.js";

APP.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
