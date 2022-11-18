import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Select from "react-select";
import { Update } from "@mui/icons-material";

const newSchema = () => {
  return (
    <div>
       <Select
        className="drop-down-2"
        defaultValue={{ label: "Add Schema to Segment", value: "" }}
        options={options}
        onChange={ddlhandler}
      />

    </div>
  )
}

export default newSchema