import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function AccordianComponent({ data }) {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    copyMultiple.indexOf(getCurrentId) === -1
      ? copyMultiple.push(getCurrentId)
      : copyMultiple.splice(copyMultiple.indexOf(getCurrentId), 1);
    console.log(copyMultiple);
    setMultiple(copyMultiple);
  }

  function funToCall(dataItem) {
    if (enableMultiSelection) {
      handleMultiSelection(dataItem.id);
    } else {
      handleSingleSelection(dataItem.id);
    }
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi Selection
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick={() => funToCall(dataItem)} className="title">
                <h3> {dataItem.question} </h3>
                <span> + </span>
              </div>
              <div>
                {dataItem.id === selected ||
                multiple.indexOf(dataItem.id) !== -1 ? (
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
