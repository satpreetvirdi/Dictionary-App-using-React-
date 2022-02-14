import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Switch } from "@mui/material";
import Header from "./components/Header/Header";
import Definations from "./components/Definations/Definations";
// import { styled } from "@mui/system";

function App() {
  const [words, setWords] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  // const [light, setLight] = useState(false)

  

  const dictionaryApp = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${words}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(meanings);
  useEffect(() => {
    dictionaryApp();
  }, [words, category]);

  return (
    <div
      className="App"
      style={{ height: "100%", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
      >
       {/* <div style={{position: "absolute" , top: 0 , right: 15 ,paddingTop: 10}}>
      <spam>{light ? "Dark" : "Light"} Mode</spam>
        <MaterialUISwitch checked={light} onChange={()=>(!light)}/>
      </div>  */}
        <Header
          category={category}
          setCategory={setCategory}
          words={words}
          setWords={setWords}
        />
        {meanings && (
          <Definations words={words} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}
export default App;
