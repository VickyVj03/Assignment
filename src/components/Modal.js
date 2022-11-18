import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ElevateAppBar from "./appbar2";
import { TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "./dropDown";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="modal-btn">
        Save Segment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ElevateAppBar />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Enter Name of the Segment
          </Typography>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Name of the Segment"
            variant="outlined"
          />
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            To save your segment, you need to add the schemas to build the query{" "}
            <br></br>
            <Box className="flex-box">
              <div className="round"></div>&nbsp; - User Traits &nbsp;
              <div className="round-2"></div>&nbsp; - Group Traits
            </Box>
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 3 }} className="new-box">
            <Dropdown />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
