import React from 'react';
import Rating from '../rating'
import Styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class extends React.Component {
    render() {
        return <div className={Styles.card}>
            <img src={this.props.image} className={Styles.image} alt="EBook" />
            <span className={Styles.title}>
                {this.props.title}
            </span>
            <span className={Styles.writer}>
                {"by " + this.props.writer}
            </span>
            <div className="m-2 d-flex flex-row justify-content-between align-items-center" style={{ padding: "0px 5px" }}>
                <Rating stars={this.props.star} ></Rating>
                <h6 className={Styles.priceTag}>{this.props.price}</h6>
            </div>
            <Link to='/ebookdetails' style={{ padding: "6px 20px", outline:"none !important", color:"rgb(192, 57, 43)", borderColor:"rgb(192, 57, 43)", borderRadius:"100px" }} className={"btn"}>BUY THIS BOOK</Link>
            
        </div>
    }
}