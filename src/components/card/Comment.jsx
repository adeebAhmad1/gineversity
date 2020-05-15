import React from 'react';

const Comment = ({name,comment}) => {
  return (
    <div className="comment_outer">
      <div className="comment_inner">
        <div className="icon_message" style={{display: `inline-flex`}}>
          {name[0].toUpperCase()}
        </div>
        <div className="comment_wrapper">
          <div className="commenter">
            {name}
          </div>
          <div className="comment">
            {comment}
          </div>
        </div>
          <div className="input_wrapper_messages">
            <button>Like</button>
            <button>Reply</button>
          </div>
      </div>
    </div>
  );
};

export default Comment;