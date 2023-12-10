import { useState } from "react";
import "./SearchInput.css";
import { ISearchInput } from "./SearchInput";
import InputBase from "@mui/material/InputBase";

function SearchInput(props: ISearchInput) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-covering">
      <div className="input-container" id={props.id}>
        <InputBase
          placeholder={props.searchText}
          id="search-input"
          className="Input"
          style={{
            color: "#000",
            padding: "20px 0 20px 34px",
            fontFamily: "DontStarveFont",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "160%",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value.trim() !== "") {
              props.onSearch(e.target.value);
            }
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default SearchInput;
