import "./config/observability";
import { startServer } from "./app";

startServer().catch((err) => {
  console.error(err);
  throw err;
});
