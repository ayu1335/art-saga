import express from "express";
import cors from "cors";
import generateRoutes from "./routes/generate.routes.js";


const app = express();
app.use(cors());

app.use(express.json());


app.use("/api", generateRoutes);
app.use((err: any, req: any, res: any, next: any) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      message: "Invalid JSON body",
    });
  }

  if (err.code?.startsWith("P")) {
    return res.status(500).json({
      message: "Database error",
    });
  }

  console.error(err);
  return res.status(500).json({
    message: "Internal server error",
  });
});



export default app;
