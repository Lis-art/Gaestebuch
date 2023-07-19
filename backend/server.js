import express from "express";
import cors from "cors";
import "./models/index.js";
import { entry } from "./models/EntryModel.js";

const app = express();
const port = 3001;

// middleware
app.use(express.json());

// Aufruf von
app.get("/api/entries", async (req, res) => {
	const data = await entry.find();
	res.send(data);
});

app.get("/api/entries/:id", async (req, res) => {
	const id = req.params.id;
	const oneEntry = await entry.find({ _id: id });
	res.send(oneEntry);
});

app.post("/api/entries", async (req, res) => {
	const content = req.body;
	const newEntry = await entry.create(content);
	res.send(newEntry);
});

app.put("/api/entries/:id", async (req, res) => {
	const { id } = req.params;
	const content = req.body;
	const updatedEntry = await entry.findByIdAndUpdate(id, content);
	res.send(updatedEntry);
});

app.delete("/api/entries/:id", async (req, res) => {
	const id = req.params.id;
	const deletedEntry = await entry.findByIdAndRemove(id);
	res.send(deletedEntry);
});

app.listen(port, () => {
	console.log("tschuuu, tschuuu");
});
