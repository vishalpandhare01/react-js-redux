import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function AutohideSnackbar({ open, setOpen, message }) {
 

  return (
    <div>
      {" "}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        // onClose={handleClose}
        message={message}
      />
    </div>
  );
}
