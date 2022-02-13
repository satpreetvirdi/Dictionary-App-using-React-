import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, words , setWords }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });
    const handelChange = (language) =>{
        setCategory(language);
        setWords("");
    }

  return (
    <div className="header">
      <span className="title">{words?words:"Word-inator"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            id="standard-basic"
            ariant="standard"
            value={words}
            onChange={
                (e) => setWords(e.target.value)
            }
          />
          <TextField
            select
            className="select"
            value={category}
            onChange={(e) => handelChange(e.target.value)}
            label="Select language"
          >
            {categories.map((options) => (
              <MenuItem key={options.value} value={options.label}>
                {options.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
