import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection;

db.on("error", () => {
	console.log("db dead");
});

db.once("open", () => {
	console.log("db live");
});

const Data = new mongoose.Schema({
	data: String,
});

const app = express();
const router = express.Router();

app.use(router);

router.get("/", (req, res) => {
	console.log("basic get");
});

router.post("/html", (req, res) => {});

app.listen(8888, () => {
	console.log("server is working well");
});
