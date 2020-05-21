import React, {useState} from 'react';
import Buttons from './ButtonDiv';

const Dropdown = ({title}) => {
  const items = [1,2,3,4,5,6,7];
  const [dropdownItems,setItems] = useState(items.map(el=> `Lecture ${el}`))
  const [open,setOpen] = useState(false);
  const [add,setAdd] = useState(false);
  const onAdd = ()=>{
    setAdd(true)
    setItems(i=>[...i,<input type="text"/>]);
    setOpen(o=> true)
  }
  return (
    <div>
      <div className="chapter_wrapper">
        <div className="dropdown_button" onClick={()=>setOpen(o=>!o)}>
          {title} <button className="add_buttons fa fa-pencil-square-o" aria-hidden="true"></button>
          <Buttons wrapper={true} onAdd={onAdd} add={add} />
        </div>
        <ol type="i">
          {open ? dropdownItems.map(el=> <li className="nested_dropdown_item"> {el} {add ? "" : (`${Math.floor(Math.random()* 24)}:${Math.floor(Math.random()* 24)}:${Math.floor(Math.random()* 24)}`)} <button className="add_buttons fa fa-pencil-square-o" aria-hidden="true"></button> <Buttons wrapper={false} /> </li>) : ""}
        </ol>
      </div>
    </div>
  );
};

export default Dropdown;