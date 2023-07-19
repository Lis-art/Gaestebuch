import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/entries");
      setEntries(res.data)
    }
    fetchData();
  }, [])

  return (
    <>
      {entries?.map((entry) => (
      <div key={entry._id}>
        {entry.textfield}
        </div>))}
    </>
  )
}

export default App
