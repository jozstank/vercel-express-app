import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser, { BodyParser } from "body-parser";
import fs from "fs";
import formidable from "formidable";
import { v4 as uuidv4 } from "uuid";
dotenv.config();
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static("public"));
const apiUrl = process.env.API_URL;
const html = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script type="text/javascript">
        localStorage.setItem('apiUrl', '${apiUrl}')
        window.location.href = "/"
    </script>
  </body>
</html>`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "aung aung", email: "aung@gmail.com", age: 20 });
});

app.post("/api/fileUpload", (req: Request, res: Response) => {
  // const fileType = req.headers["content-type"]?.split("/")[1];
  // const createWriteStream = fs.createWriteStream(`${uuidv4()}.${fileType}`);
  // req.pipe(createWriteStream);

  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      res.end(String(err));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ fields, files }, null, 2));
  });
});
app.listen(port, () => {
  console.log("server is running on port 3000");
});
