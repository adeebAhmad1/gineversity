import React, { Component } from 'react';
import LoginCard from '../../components/loginForm';
import './style.css';
import { Link } from 'react-router-dom';

const style = { minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const navStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: '10vh', marginLeft: 'auto', marginRight: 'auto' };
const logoName = { fontSize: '28px', fontWeight: 'bold', color: '#c0392b', fontFamily: `'Montserrat', sans-serif` };

class index extends Component {

    render() {
        return (
            <div className="container-fluid p-0" style={style}>
                <div className="col-lg-9 col-12" style={navStyle}>
                    <h6 style={logoName}>GENIVERSITY</h6>
                    <Link className="link-blue" to='/community'>Cancel</Link>
                </div>
                <div className="col-lg-10 col-12 p-0 form-setting">
                    <LoginCard />
                </div>
            </div>
        )
    }
}

export default index;