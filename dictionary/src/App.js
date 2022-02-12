import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  const [words, setWords] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("English")
  const dictionaryApp = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/Programming"
      );
      setMeanings(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApp();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100%", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header category={category} setCategory={setCategory} words={words} setWords={setWords} />
      </Container>
    </div>
  );
}
export default App;
