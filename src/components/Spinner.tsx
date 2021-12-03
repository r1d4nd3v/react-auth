import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box
      sx={{ display: "flex", position: "absolute", top: "100px", left: "50%" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
