import React from "react";
import "./Definations.css";

const Definations = ({ words, meanings, category }) => {
  return (
    <div className="meanings">
      {words === "" ? (
        <span className="subTitle">Start by typing a word in Seacrh </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((def) =>
            def.definations.map((items) => (
              <div className="singleMean"
              style={{backgroundColor: "white" , color: "white"}}
              >
                
                <b>{items.defination} </b>
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definations;