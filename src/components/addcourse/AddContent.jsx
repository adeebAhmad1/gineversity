import React, { Component } from "react";
import Header from "../nav";
import Footer from "../footer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
class AddContent extends Component {
  state={
    add: false,
    dropdownItems: []
  }
  componentDidMount(){
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const dropdownItems = items.map(el=> `Chapter ${el}`);
    this.setState({dropdownItems});
  }
  render() {
    return (
      <div className="add_content">
        <Header />
        <div className="content">
          <div className="content_inner">
            <div className="add_content_wrapper" style={{textAlign: `center`,marginBottom: `50px`}}>
              <div className="course add_course" style={{ border: `4px dashed` }}>
                <div className="">
                  <label htmlFor="coursefile">
                    <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
                    <div className="text_add">Add Thumbnail</div>
                  </label>
                  <input type="file" id="coursefile" style={{ display: `none` }}/>
                </div>
              </div>
              Size: 300 x 300
            </div>
            <div className="price_wrapper input_content_wrapper">
              
              <p>
                <label htmlFor="price">Title: </label>
                <input value="My Title" readOnly id="price" type="text" placeholder="Price" />
              </p>
             <p>
                <label htmlFor="price">Category: </label>
                <input value="COmputer" readOnly id="price" type="text" placeholder="Price" />
              </p>
             <p>
                <label htmlFor="price">Short Description: </label>
                <input value="The file will have its original line endings in your working directory" readOnly id="price" type="text" placeholder="Price" />
              </p>
             </div>
             <div className="input_content_wrapper">
              <p>
                <label htmlFor="description">Description: </label>
                <textarea id="description" value="The file will have its original line endings in your working directory" readOnly rows={5} placeholder="Description"></textarea>
              </p>
              <p className="mt-5">
                <label htmlFor="price">Set Price: </label>
                <input id="price" type="text" placeholder="Price" />
              </p>
             </div>
            </div>
          <div className="dropdown_items_wrapper">
          {this.state.add ? "" : <button onClick={()=> this.setState({dropdownItems: [...this.state.dropdownItems, <input type="text"/>],add: true})} className="add_btn">+ Add Chapter</button>}
          <ol type="I">
            {this.state.dropdownItems.map(i=> <li className="dropdown_item"> <Dropdown title={i} /> </li>)}
          </ol>
          </div>
          <div style={{ textAlign: "center",width: `100%` }}>
              <Link to="/addcontent" className="btn btn-outline-danger addcoursebtn btnStyle">Submit</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddContent;
