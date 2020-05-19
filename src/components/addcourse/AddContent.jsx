import React, { Component } from "react";
import Header from "../nav";
import Footer from "../footer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
class AddContent extends Component {
  render() {
    const dropdownItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
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
                    <div className="text_add">Add Cover Photo</div>
                  </label>
                  <input type="file" id="coursefile" style={{ display: `none` }}/>
                </div>
              </div>
              Size: 300 x 300
            </div>
            <div className="price_wrapper input_content_wrapper">
              <p>
                <label htmlFor="price">Set Price: </label>
                <input id="price" type="text" placeholder="Price" />
              </p>
              <p>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" placeholder="Title" />
              </p>
              <p>
                <label htmlFor="description">Short Description: </label>
                <textarea id="description" rows={5} placeholder="Description"></textarea>
              </p>
              <p>
                <label htmlFor="category">Category: </label>
                <input id="category" placeholder="Category" />
              </p>
            </div>
            <div className="input_content_wrapper">
              
              <p>
                <label htmlFor="description">Description: </label>
                <textarea id="description" rows={5} placeholder="Description"></textarea>
              </p>
            </div>
          </div>
          <div className="dropdown_items_wrapper">
          <button className="add_btn">+ Add Chapter</button>
          <ol type="I">
            {dropdownItems.map(i=> <li className="dropdown_item"> <Dropdown i={i}/> </li>)}
          </ol>
          </div>
          <div style={{ textAlign: "center",width: `100%` }}>
              <Link to="/addcontent" className="btn btn-outline-danger addcoursebtn btnStyle">Submit for Preview</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddContent;
