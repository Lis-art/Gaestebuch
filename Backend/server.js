import express from "express";
import cors from "cors";
import "./modules/index.js";
//importieren von der Verbindung mit der Datenbank
//kann dauern bis Änderungen registriert werden
import { entry } from "./modules/EntryModel.js";
// Schema aus dem export aus der der EntryModel datei wird importiert, entry ist die collection

const app = express()
// um Node einfacher zu bedienen, initialisieren hier den Server
const PORT = 3001
// Zugänge zum Server

app.use(express.json())
// damit req.body in JSON ausgelesen werden kann, middeleware wird vor jeder Anfrage aufgerufen
app.use(cors())
// damit Ports miteinander kommunizieren können


app.get("/api/entries", async (req,res) => {
    const data = await entry.find()
    //find Methode die ganze Daten (Objekte) zurückgibt - gibt leeres Array (enthält Objekte) zurück weil entry Collection (Datenbank) noch leer ist
    res.send(data);
})

app.get("/api/entries/:id", async (req,res) => {
    const id = req.params.id; 
    const oneEntry = await entry.find({_id: id});
    //find Methode die ganze Daten (Objekte) zurückgibt - gibt leeres Array (enthält Objekte) zurück weil entry Collection (Datenbank) noch leer ist
    res.send(oneEntry);
})

app.post("/api/entries", async (req,res) => {
    const newEntry = await entry.create(req.body)
    // über create wird neuer Eintrag erstellt aus den Eingaben des Users welcher sie im body eingibt
    res.send(newEntry);
})

app.put("/api/entries/:id", async (req,res) => {
    // beides Clientseitig:
    const {id} = req.params;
    // mit params wird URL aufgerufen -> wie wir mit Client kommunizieren
    const content = req.body;
    const updatedEntry = await entry.findByIdAndUpdate(id, content)
    res.send(updatedEntry);
})

app.delete("/api/entries/:id", async (req,res) => {
    const id = req.params.id;
    // const {id} = req.params -> genau das gleiche wie das obere
    // const {id, name, klasse} = req.params -> Beispiel mit mehreren Properties
    const deletedEntry = await entry.findByIdAndRemove(id);
    res.send(deletedEntry);
})

