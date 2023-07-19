import express from "express";
import cors from "cors";

import { entry } from "./models/EntryModel.js"
import "./models/index.js"


const app = express()
const PORT = 3001

app.use(express.json())


app.get("/api/entries", async (req, res) => {
    const allEntries = await entry.find()
    res.send(allEntries);
})

app.get("/api/entries/:id", async (req, res) => {
    const id = req.params.id
    const oneEntry = await entry.find({_id: id})
    res.send(oneEntry)
})

app.post("/api/entries", async (req, res) => {
    const newEntry = await entry.create(req.body)
    res.send(newEntry);
})

app.put("/api/entries/:id", async (req, res) => {
    const entryId = req.params.id
    const content = req.body
    const updatedEntry = await entry.findByIdAndUpdate(entryId, content)
    res.send(updatedEntry);
})

        // "/api/entries/:id:name:klasse"
app.delete("/api/entries/:id", async (req, res) => {
    const entryId = req.params.id
    const deletedEntry = await entry.findByIdAndRemove(entryId)
    // const {id, name, klasse} = req.params;
    res.send(deletedEntry);
})









app.listen(PORT, () => console.log("Server läuft auf", PORT))