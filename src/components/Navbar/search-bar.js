import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex justify-center items-center w-full max-w-xl">
      <TextField
        variant="outlined"
        placeholder="Search..."
        fullWidth
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={{
                  color: focused ? "#3f51b5" : "#888",
                  fontSize: 24,
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: 48,
            paddingRight: 1,
            "& fieldset": {
              borderColor: focused ? "#3f51b5" : "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3f51b5",
            },
          },
          "& .MuiInputBase-input": {
            padding: "12px 14px",
          },
        }}
      />
    </div>
  );
};

export default SearchBar;




