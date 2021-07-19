import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4> Waring !</h4>
                    Are you sure you want to leave?
                </div>
            </ApprovalCard>  
            <ApprovalCard >
                <CommentDetail author="Sam" avatar={faker.image.avatar()} timeago="Today at 6:00PM" content="Nie blog post"/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Alex" avatar={faker.image.avatar()} timeago="Yesterday at 9:49AM" content="I like the subject"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" avatar={faker.image.avatar()} timeago="Today at 12:00PM" content="Oops!!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));