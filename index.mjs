import express from "express";
import cors from "cors";
import "dotenv/config";
import axios from "axios";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/report", async (req, res) => {
  console.log(req.body);

  try {
    const response = await axios.post("https://api.eflow.team/v1/networks/reporting/entity/table", req.body, {
      headers: {
        "Content-Type": "application/json",
        "X-Eflow-API-Key": process.env.EVERFLOW_API_KEY,
      },
    });

    console.log("Everflow raw response:", response.data);
    res.json({ message: "Success", data: response.data });
  } catch (error) {
    console.error("Error from Everflow:", error.response?.data || error.message);
    res.status(500).json({ message: "Error fetching reports", error: error.message });
  }
});

// app.get("/test-api", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.eflow.team/v1/networks/offers", {
//       headers: {
//         "X-Eflow-API-Key": process.env.EVERFLOW_API_KEY,
//       },
//     });
//     res.json({ success: true, offers: response.data });
//   } catch (error) {
//     console.error("API test failed:", error.response?.data);
//     res.status(500).json({ success: false, error: error.response?.data });
//   }
// });

app.listen(port, () => {
  console.log(` App listening on port http://localhost:${port}`);
});
