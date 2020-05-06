import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const heading = {fontSize: '20px', fontWeight: 'bold', color: '#2f3542', textAlign: 'center', fontFamily: `''Montserrat', sans-serif`, width: '100%'};
const inputStyle = {padding: '24px 24px 24px 24px', outline: 'none !important', fontFamily: `''Montserrat', sans-serif`, boxShadow: 'none !important', fontSize: '16px', marginTop: '12px'};
const btnStyle = { borderRadius: '20px', marginTop: '16px' };
const gStyle = { color: '#c0392b', marginRight: '12px', fontSize: '24px' };

class index extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    state = { email: '', password: '', err: false };

    handleInput(event) { this.setState({ [event.target.name]: event.target.value, err: false }); }

    handleSubmit(event) {
        const { email, password } = this.state;
        const { loginUser } = this.props;
        event.preventDefault();
        if (email && password) {
            var data = { email: String(email), password: String(password) };
            loginUser(data);
        }
    }

    render() {
        const { email, password } = this.state;
        const { isError, err, isLoading } = this.props;
        return (
            <form className="col-lg-7 col-12 shadow-lg login-card " onSubmit={(e) => this.handleSubmit(e)}>
                <h3 style={heading}>Sign in &#38; Start Exploring!</h3>
                <button className="btn btn-block p-2 btn-google d-flex align-items-center justify-content-center"
                    style={btnStyle}>
                    <span className="fa fa-google" style={gStyle}></span>
                    Sign up with google</button>
                <div className="col-12 p-0 d-flex flex-row align-items-center" style={{ marginTop: '24px' }}>
                    <div className="col-5 p-0" style={{ borderTop: '1px solid #ced6e0' }}></div>
                    <h6 className="col-2 p-0" style={{ textAlign: 'center', fontWeight: '600', color: '#747d8c' }}>OR</h6>
                    <div className="col-5 p-0" style={{ borderTop: '1px solid #ced6e0' }}></div>
                </div>
                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                    <input type="text" className="form-control" style={inputStyle} name='email'
                        value={email} placeholder="Your work email" onChange={this.handleInput} required />
                </div>
                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                    <input type="password" className="form-control" style={inputStyle} name='password'
                        value={password} onChange={this.handleInput} placeholder="Your password" required />
                </div>
                <div className="col-12 p-0 d-flex flex-row justify-content-end">
                    <h6 className="link-blue">Forgot password?</h6>
                </div>
                {isError && <h6 style={{ width: '100%', textAlign: 'center', marginTop: '10px', color: 'red', fontSize: '12px !important' }}>
                    {err}
                </h6>}
                <button className="btn btn-block btn-signin" type='submit' style={btnStyle}>
                    {!isLoading && 'Sign in'}
                    {isLoading && <div className="spinner-border ml-1" style={{ width: '1em', height: '1em' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </button>

                <p style={{ width: '100%', textAlign: 'center', marginTop: '16px', color: 'grey', fontSize: '12px !important' }}>Don't have an account?
                 <Link className="link-blue" to='/register'>  Sign up</Link></p>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        err: state.Login.data,
        isError: state.Login.isError,
        isLoading: state.Login.isLoading
    }
}

export default connect(mapStateToProps, { loginUser })(index);