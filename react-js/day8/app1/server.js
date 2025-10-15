import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// simple test route
app.get("/test/hello", (req, res) => {
  res.json({
    message: "Hello from backend!",
    checkCode: 200,
    userData: {
      name: "John Doe",
      phone: "123-456-7890",
    },
  });
});

const PORT = 5004;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
