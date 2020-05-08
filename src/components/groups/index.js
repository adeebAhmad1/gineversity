import React, { Component, lazy, Suspense, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerFeeds, getFeeds, getFeedsAuth } from '../../redux/actions/feedActions';
import { Link } from 'react-router-dom';
import Model from './model';
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
                return <li key={i._id} className="side-item side-item-hotel">
                    <Link to="/" href="dangerouslySetInnerHTML" className="side-link">
                        <img className="side-img" src={i.image} alt="topic" />
                        <span className="side-text">{i.name}</span>
                    </Link>
                </li>
            })
    }

    renderCoursesLinks(TopicList) {
        if (TopicList && TopicList.length > 0)
            return TopicList.slice(0, 2).map(i => {
                return <li key={i._id} className="left-side-item">
                    <div alt="topic" className="side-more-img" style={{ width: "2.3rem", verticalAlign: "middle", height: "2.3rem", backgroundColor: "blue", textAlign: "center", display: "inline-block" }}>F</div>
                    <span className="left-side-text ml-4">Focal Person</span>
                </li>
            })
    }

    render() {
        const { auth, profile, Feed, TopicList } = this.props;

        return <div className="content">
            <Model/>
            <nav className="sidebar ">
                <h2 className="page-heading">Freelancer of Upwork Fiverr and PeoplePerHour</h2>
                <h6 onClick={() => window.innerWidth < 1000 ? this.refs.dropdown.classList.toggle("display_on_short") : ""} style={{ width: '100%', backgroundColor: '#f4f2f2', textAlign: 'center', fontWeight: 'bold', color: '#e74c3c', marginBottom: '0px' }} className={"sidebar-heading"}><span className="fa fa-feed mr-2"></span>Communities You're In</h6>
                <div className={`hide_on_click ${window.innerWidth < 1000 ? "display_on_short" : ""}`} ref="dropdown">
                    <ul className="side-nav">
                        {this.renderCommunityLinks(TopicList)}
                    </ul>
                    <div className="side-more-images">
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "red" }}>+20</div>
                        <Link to="/groups" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                    </div>
                </div>
                {/*////////////////////////////// code for mobile view start with auth //////////////////////// */}
                {window.innerWidth < 1000 ? <div style={{ width: `100%` }}>
                    <div className="left-side-border">
                        <h2 className="left-side-heading-h" onClick={() => window.innerWidth < 1000 ? this.refs.courses.classList.toggle("display_on_short") : ""}>People That Are Following</h2>
                        <ul ref="courses" className={`left-side-list ${window.innerWidth < 1000 ? "display_on_short" : ""}`}>
                            {this.renderCoursesLinks(TopicList)}
                            <li><div className="side-more-images">
                                <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                                <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                                <div alt="topic" className="side-more-img" style={{ backgroundColor: "red" }}>+20</div>
                                <Link to="/groups" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                            </div></li>
                        </ul>

                    </div>
                    {auth && profile ?
                        <div>
                            {window.innerWidth < 1000 ? <div><h6 onClick={() => window.innerWidth < 1000 ? this.refs.recommend.classList.toggle("display_on_short") : ""} style={{ width: '100%', backgroundColor: '#f4f2f2', textAlign: 'center', fontWeight: 'bold', color: '#e74c3c', marginBottom: '0px' }} className={"sidebar-heading"}><span className="fa fa-feed mr-2"></span>Recommended to You</h6>
                                <div className={`hide_on_click ${window.innerWidth < 1000 ? "display_on_short" : ""}`} ref="recommend">
                                    <ul className="side-nav">
                                        {this.renderCommunityLinks(TopicList)}
                                    </ul>
                                </div>
                            </div> : ""}
                        </div>
                        : <div>
                            {window.innerWidth < 1000 ? <div style={{ width: `100%` }}>
                                <div className="left-side-border">
                                    <h2 className="left-side-heading-h" onClick={() => window.innerWidth < 1000 ? this.refs.about.classList.toggle("display_on_short") : ""}>About Community</h2>
                                    <h4 ref="about" className="about-text">Hire someone or Get hired Post your Work and Assignments.</h4>
                                </div>
                            </div> : ""}
                        </div>}
                </div> : ""}
                {/* ////////////////////// code for mobile view end with auth  /////////////////////*/}
            </nav>
            <div className="center1">
                <div className="card" style={{ width: "100%", height: "50vh", marginBottom: "2rem" }}>
                    <img className="card-img-top" src={"https://specials-images.forbesimg.com/imageserve/5d9182dc6c7c8f000990b672/960x0.jpg?fit=scale"} style={{ height: "40vh" }} alt="Card image cap" />
                    <div className="card-body">
                        <button type="button" style={{ width: "20%", marginLeft: "2rem" }} className="btn btn-outline-danger mr-3"><i className=" fa fa-check-square"></i> Following </button>
                        {auth && profile ?
                            <a href="#popup" type="button" style={{ width: "20%" }} className="btn btn-outline-danger mr-3"><i className=" fa fa-plus"></i> Suggest Topic </a>
                         : 
                        <button className="btn btn-outline-danger mr-3"  id="dropdown-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  type="button" style={{ width: "20%" }} ><i className=" fa fa-ellipsis-h "></i> More </button>
                        }
                        <div className="dropdown-menu" aria-labelledby="dropdown-menu">
                        <button className="dropdown-item" style={{color: "#000"}} type="button">Unfollow Group</button>
                        <button className="dropdown-item" style={{color: "#000"}} type="button">Report Group</button>
                        <a href="#popup" className="dropdown-item" type="button">Suggest Topic</a>
                    </div>
                    </div>
                </div>
                {/*?///////////////////////////// else info only //////////////////////////*/}
                {auth && profile ? "" :
                    <div className="groupinfo">
                        <h4 >About this group</h4>
                        <hr />
                        <div className="groupinfo-heading">Name of Group</div>
                        <div className="groupinfo-text">Freelancer of Upwork Fiverr and PeoplePerHour</div>
                        <div className="groupinfo-heading">Description</div>
                        <div className="groupinfo-text">Hire Someone or Get hired Post your Work and Assignments</div>
                        <div className="groupinfo-heading">Category</div>
                        <div className="groupinfo-text">IT &amp; Technology</div>
                        <div className="groupinfo-heading">Group Create On</div>
                        <div className="groupinfo-text">12/JUN/2020</div>
                    </div>
                }
                {/* /////////////////// if auth add post and list //////////////////// */}

                <div> {auth && profile && <Suspense fallback={<Fragment />}><AddPost profile={profile} list={TopicList} submit={this.submit} /></Suspense>}</div>
                <div>{auth && profile && <Suspense fallback={<Fragment />}><List list={Feed} /></Suspense>}</div>

            </div>
            {/* /////////////////// normal view start  /////////////////////////////////////// */}
            {window.innerWidth > 1000 ? <div className="left-side">
                <div className="left-side-border">
                    <h2 className="left-side-heading-h">Members</h2>
                    <ul className="left-side-list">
                        {this.renderCoursesLinks(TopicList)}
                    </ul>
                    <div className="side-more-images">
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "red" }}>+20</div>
                        <Link to="/courses" className="side-more-text" style={{ textDecoration: "none" }}>See More +</Link>
                    </div>
                </div>
                {/* ////////////////////// Extra div used to avoide error  /////////////////////*/}

                {/* ///////////////////// if auth  displays recommended //////////////// */}
                {auth && profile ?
                    <div> {window.innerWidth > 1000 ? <div className="about-section">
                        <h2 className="left-side-heading-h"><span className="fa fa-feed mr-2"></span>Recommended to You</h2>

                        <ul className="side-nav">
                            {this.renderCommunityLinks(TopicList)}
                        </ul>
                    </div>
                        : ""}</div>
                    // {/* ////////////////// else about box //////////////////////////////// */}
                    : <div>
                        {window.innerWidth > 1000 ? <div className="left-side about-section">
                            <div className="left-side-border">
                                <h2 className="left-side-heading-h">About Community</h2>
                                <h4 className="about-text">Hire someone or Get hired Post your Work and Assignments.</h4>
                            </div>
                        </div> : ""}
                    </div>

                }
            </div> : ""}
            {/* /////////////////// normal view end  /////////////////////////////////////// */}

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

