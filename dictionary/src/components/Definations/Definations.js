import { borderBottom } from "@mui/system";
import React from "react";
import "./Definations.css";

const Definations = ({ words, meanings, category }) => {
  return (
    <div className="meanings">
      {meanings[0] && words && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 ,marginBottom: "5px" }}
          controls
        >
          Your Browser doesn't support audio element .
        </audio>
      )}
      {words === "" ? (
        <span className="subTitle">Start by typing a word in Seacrh </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((def) =>
            def.definitions.map((items) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{items.definition} </b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {items.example && (
                  <span>
                    <b>Example :</b>
                    {items.example}
                  </span>
                )}
                {items.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {items.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definations;
