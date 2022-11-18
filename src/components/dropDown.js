import { useState } from "react";
import { useEffect, useRef } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Select from "react-select";
import { Update } from "@mui/icons-material";
import NewBox from './box'
import Button from '@mui/material/Button';
import Axios from "axios"

function SelectBasicExample() {
  const [options,setOptions]  = useState([
    {
      id:"1",
      value: "first_name",
      label: "First Name",
    },
    {
      id:"2",
      value: "last_name",
      label: "Last Name",
    },
    {
      id:"3",
      value: "gender",
      label: "Gender",
    },
    { 
      id:"4",
      value: "age",
      label: "Age",
    },
    {
      id:"5",
      value: "account_name",
      label: "Account Name",
    },
    {
      id:"6",
      value: "city",
      label: "City",
    },
    {
      id:"7",
      value: "state",
      label: "State",
    },
  ]);
  const [defaultValue,setDefaultValue] = useState([{label: "Add Schema to Segment", value: ''}])

  const [dropdown, setDropdown] = useState(false);
  const [num, setNumber] = useState(1);
  const [arr, setArr] = useState([])
  const [optionsNew, setOptionsNew] = useState([]);
  const [listOptions,setListOptions] = useState([]);
  const [showResults, setShowResults] = useState(false)
  const newValue = useRef("")
 


  // useEffect(() => {
  //   if(dropdown===true){
  //     setDropdown(false)
  //   }
  // },)

  const [val, setVal] = useState([]); 


  const handleSubmit = (e) => {
  
    setArr(arr.concat(newValue.current.props.value.label));
      // if(showResults===true){
      //   setShowResults(false)
      //   return showResults
      // }else if(showResults === false){
      //   setShowResults(true)
      //   return showResults
      // }
    
     setShowResults(true)
    
    // setNumber(num + 1)
    // console.log(num);
    // console.log(arr);
    // setDropdown(true)
    // console.log(dropdown);
  }
  

  // const postData = (e) => {
        
  //     Axios.post(url, {
  //       "segment_name":'',
  //       "schema":[
         
  //       ]
  //     })
  // }

  return (
    <div>
      <Box id="modal-modal-description" sx={{ mt: 3 }} className="box"></Box>
    {val}

  
   {showResults ? <Box className="newbox">
        <NewBox  data={arr} />  
      </Box> : null}
    
      
   
       <Select
        className="drop-down-2"
        defaultValue={defaultValue}
        options=  {options}
        // onChange={handleChange}
        ref={newValue}
      />

      {/* {dropdown ===true ? for(num = 0; num < options.length - 1; num++ ){
        <Select
        className="drop-down-2"
        defaultValue={{ label: `${val}`, value: "" }}
        options=  {options}
      />
      }} */}

 

      <Link
        className="add-schema-link"
        component="button"
        variant="body2"
        onClick={handleSubmit}
      >
        <AddIcon />
        Add New Schema
      </Link>
   
      <Button class="save-btn" variant="outlined">Save</Button>

      
    </div>
  );
}

export default SelectBasicExample;
