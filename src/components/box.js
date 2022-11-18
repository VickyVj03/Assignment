import React from 'react'
import { useState, useEffect } from 'react';
import Select from "react-select";
import Box from "@mui/material/Box";
const NewBox = ({data,newoptions}) => {
  var options = [ {
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
  },]
  const [list, setList] =useState([])
  const [filterOptions,setFilteredOptions]=useState([])
  const [updatedOptions, setUpdatedOptions] = useState([])
  const [newOptions, setNewOptions] = useState([{
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
  },])

  useEffect(() => {
    options.map((option)=>{
      console.log(option.label);
      data.forEach(element => {
        if(option.label === element){
          var indexLabel = options.find((opt)=>opt.label === option.label) 
          console.log(indexLabel);
          setList(list.concat(indexLabel))

          // console.log("list",list);
          list.forEach((li)=>{
            const filterOptions= newOptions.filter((newOption)=>{
              if(indexLabel.value !== newOption.value){
                console.log(indexLabel.label, newOption.label);
                return indexLabel.label
                // alert(indexLabel.value)
                // console.log("newOptions",newOption)
                // setUpdatedOptions(updatedOptions.push(newOption))
                // console.log("updatedOption",updatedOptions);
             
              }
              return false
            })
            setFilteredOptions(filterOptions.concat(filterOptions))
            console.log("filter",filterOptions);

            setNewOptions(filterOptions)
           
          })
          
        }
      });
    
    })
  },[data])


  return (
    <div>
      {data.map((value)=> {
       return <Select
            className="drop-down-2"
          defaultValue={{ label: `${value}`, value: "" }}
            options={newOptions}
      />
           
        })}
       
    </div>
  )
}

export default NewBox

// return <Select
// className="drop-down-2"
// defaultValue={{ label: `${value}`, value: "" }}
// options=  {list}
// />