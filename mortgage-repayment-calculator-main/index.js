import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Setup path cho __dirname (vì dùng ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cài view engine là EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static("public")); // Cho phép truy cập file tĩnh: CSS, images,...
app.use(bodyParser.urlencoded({ extended: true })); // Đọc dữ liệu từ form

// GET route - Trang lần đầu load, chưa có kết quả
app.get("/", (req, res) => {
  res.render("index.ejs", {
    showResult: false,
    monthly: null,
    total: null
  });
});

// POST route - Khi user submit form
app.post("/submit", (req, res) => {
  const amount = parseFloat(req.body.amount);
  const term = parseFloat(req.body.term);
  const interest = parseFloat(req.body.interest);
  const type = req.body.mortgageType;

  let monthly = 0;
  let total = 0;

  if (type === "repayment") {
    // Công thức trả góp hàng tháng (mortgage repayment)
    const monthlyInterest = interest / 100 / 12;
    const numPayments = term * 12;
    const factor = Math.pow(1 + monthlyInterest, numPayments);
    monthly = (amount * monthlyInterest * factor) / (factor - 1);
    total = monthly * numPayments;
  } else {
    // Trường hợp "interest only"
    monthly = (amount * (interest / 100)) / 12;
    total = monthly * 12 * term;
  }

  // Làm tròn đẹp & có dấu phẩy
  monthly = monthly.toLocaleString("en-UK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  total = total.toLocaleString("en-UK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Render lại index.ejs với kết quả
  res.render("index.ejs", {
    showResult: true,
    monthly,
    total
  });
});

// Run server

export default app;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
