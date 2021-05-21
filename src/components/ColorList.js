import React, { useState } from "react";
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import Color from './Color'
import EditMenu from './EditMenu'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/${colorToEdit.id}`, colorToEdit)
    .then(res=>{
      updateColors(
        colors.map((color) =>{
          if (color.id === colorToEdit.id){
            return res.data;
          } else {
            return color;
          }
        }))
    })
    .catch(err=>{
      console.log(err);
    })
  };

  const deleteColor = color => {
    axiosWithAuth().delete(`/${colorToEdit.id}`)
    .then(res=>{
      updateColors(colors.filter((colorSave)=> colorSave.id !== color.id))
    })
    .catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.