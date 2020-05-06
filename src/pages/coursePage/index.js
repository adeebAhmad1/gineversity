import React, { Component } from 'react';
import Navbar from '../../components/nav';
import { connect } from 'react-redux';
import Header from '../../components/courses/header';
import Courses from '../../components/courses/courseList';
import Banner from '../../components/courses/banner';
import Categories from '../../components/courses/topCategories';

class index extends Component {
    render() {
        const { TopicList } = this.props;
        return <div className="container-fluid p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={2} />
                <Header />
                {TopicList && TopicList.length > 0 && <Courses list={TopicList.slice(0, TopicList.length > 5 ? 5 : TopicList.length)} />}
                <Banner />
                {TopicList && TopicList.length > 0 && <Categories list={TopicList.slice(0, TopicList.length > 6 ? 6 : TopicList.length)} />}
            </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError,
        RegisterFeed: state.RegFeed,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps)(index);;