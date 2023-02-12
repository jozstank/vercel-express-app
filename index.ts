import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
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

app.get("/users", (req: Request, res: Response) => {
  res.send({ name: "aung aung", email: "aung@gmail.com", age: 20 });
});

app.listen(port, () => {
  console.log("server is running on port 3000");
});
