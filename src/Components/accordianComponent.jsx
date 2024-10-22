import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function AccordianComponent({ data }) {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
  }

  return (
    <div className="wrapper">
      <button> Enable Multi Selection </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3> {dataItem.question} </h3>
                <span> + </span>
              </div>
              <div>
                {dataItem.id === selected ? (
                  <div className="content"> {dataItem.answer} </div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <h3>No data found </h3>
        )}
      </div>
    </div>
  );
}
