import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import CommunityPage from '../pages/communityPage';
import TopicPage from '../pages/topicPage';
import CoursePage from '../pages/coursePage';
import EBookPage from '../pages/ebookPage';
import ebookdetailsPage from '../pages/ebookdetailsPage';
import MyPurchasesPage from '../pages/mypurchasesPage';
import Profile from '../components/Profile';
export function Routes() {
    return <div>
        <Switch>
        <Route exact path='/community' component={CommunityPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={SignupPage} />
        <Route path='/user/:id/topics' component={TopicPage} />
        <Route path='/courses' component={CoursePage}/>
        <Route path='/ebooks' component={EBookPage}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/ebookdetails' component={ebookdetailsPage}/>
        <Route path='/mypurchases' component={MyPurchasesPage}/>
        <Route render={() => <Redirect to='/community' />} />
    </Switch>
    </div>
}