import React, { Component, lazy, Suspense, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerFeeds, getFeeds, getFeedsAuth } from '../../redux/actions/feedActions';
import { Link } from 'react-router-dom';
const List = lazy(() => import('../community/postList'));
const AddPost = lazy(() => import('../community/addPost'));

class index extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const { profile, getFeeds, getFeedsAuth } = this.props;
        var data;
        if (profile && profile._id) {
            data = { limit: 0, _id: profile._id };
            getFeedsAuth(data, 0);
        } else {
            data = { limit: 0 };
            getFeeds(data, 0);
        }
    }

    submit(data) {
        this.props.registerFeeds(data);
    }

    renderCommunityLinks(TopicList) {
        if (TopicList && TopicList.length > 0)
            return TopicList.map(i => {
                return <Link to='/' key={i._id} style={{paddingLeft: ".5rem", textDecoration: 'none', color: 'black' }} className="left-side-item d-flex flex-row align-items-center pt-3">
                    <img src={i.image} alt="topic" className={"mr-2"} style={{width: '30px', height: '30px', borderRadius: '1000px' }} />
                    <h6 style={{alignSelf:"center", fontWeight: '400', color: 'grey', fontSize: '14px' }}>{i.name}</h6>
                </Link>
            })
    }

    renderCoursesLinks(TopicList) {
        if (TopicList && TopicList.length > 0)
            return TopicList.slice(0, 2).map(i => {
                return <Link key={i._id} style={{ textDecoration: 'none', width: 'fit-content', color: 'black' }} className="d-flex flex-row align-items-center pt-2 pb-2" to=''>
                    <img src={i.image} alt="topic" style={{ width: '30px', height: '30px', borderRadius: '1000px', marginRight: '16px' }} />
                    <h6 style={{ fontWeight: '400', color: 'grey', fontSize: '14px'}}>Dummy Course</h6>
                </Link>
            })
    }

    render() {
        const { auth, profile, Feed, TopicList } = this.props;
        return <div className="col-12 d-flex flex-lg-row flex-column align-items-start" style={{ marginTop: '30px'}}>
            <div className="col-lg-2 col-12 md-4 p-0 left-side">
                <h6 style={{ width: '100%', backgroundColor: '#dfe6e9', textAlign: 'center', fontWeight: 'bold', color: '#e74c3c', marginBottom: '0px' }} className="p-2"><span className="fa fa-feed mr-2"></span> Communities</h6>
                <div className="col-12 d-flex flex-column" style={{ backgroundColor: '#ecf0f1' }} >
                    {this.renderCommunityLinks(TopicList)}
                    <hr style={{ width: '100%', marginBottom: '8px' }} />
                    <h6 className={'left-side-footer-heading'} style={{ fontWeight: 'bold', marginLeft: '6px', fontSize: '12px', color: 'grey' }}>Follow us on</h6>
                    <ul style={{ color: 'grey', fontSize: '10px', fontWeight: '500' }} className="left-side-list col-12 ">
                        <li style={{ cursor: 'pointer' }}>Instagram</li>
                        <li style={{ cursor: 'pointer' }}>Twitter</li>
                        <li style={{ cursor: 'pointer' }}>Facebook</li>
                    </ul>
                    <h6 className={'left-side-footer-heading'} style={{ fontWeight: 'bold', marginLeft: '6px', fontSize: '12px', color: 'grey' }}>Download our app</h6>
                    <ul style={{ color: 'grey', fontSize: '10px', fontWeight: '500' }} className="left-side-list col-12 ">
                        <li style={{ cursor: 'pointer' }}>Google Play Store</li>
                        <li style={{ cursor: 'pointer' }}>App Store</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-7 col-12 ">
                <div className="col-12 d-flex flex-column align-items-center ">
                    {auth && profile && <Suspense fallback={<Fragment />}><AddPost profile={profile} list={TopicList} submit={this.submit} /></Suspense>}
                    <Suspense fallback={<Fragment />}>
                        <List list={Feed} />
                    </Suspense>
                </div>
            </div>
            <div className="col-lg-3 col-12 right-side">
                <h6 style={{padding: '.5rem', width: '100%', backgroundColor: '#dfe6e9', textAlign: 'center', fontWeight: 'bold', color: '#e74c3c', marginBottom: '0px' }}>Recommended Courses</h6>
                <div className="col-12" style={{ backgroundColor: '#ecf0f1' }} >
                    {this.renderCoursesLinks(TopicList)}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        Feed: state.Feed.data,
        isSuccess: state.Feed.isSuccess,
        isLoading: state.Feed.isLoading, // If you want to show a loader until feeds load
        RegLoad: state.RegFeed.isLoading,// REG FEED TO CONRTOL FEED LOADING ERROS ETC
        RegSuc: state.RegFeed.isSuccess,
        RegErr: state.RegFeed.isError,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps, { registerFeeds, getFeeds, getFeedsAuth })(index);

