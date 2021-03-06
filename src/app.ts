import * as express from "express";
import * as bodyParser from "body-parser";
import * as userController from "./controllers/userController";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 8080);

app.use(bodyParser.json());

// API Endpoints
app.get("/users", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.post("/user", userController.addUser);
app.put("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});