import React from 'react';

const Comment = ({name,time,comment,isReply}) => {
  return (
    <div>
      <div className="comment_wrapper" title={time}>
      <div className="icon_message">
        {name[0]}
      </div>
      <div className="comment_outer">
        <div className="name_wrapper">
          {name}
        </div>
        <div className="comment_inner">
          {comment}
        </div>
      </div>
    </div>
      {isReply ? "" : <div><div className="btn_wrapper">
        
        <button>Like</button>
       <button>Reply</button>
     </div>
     <Comment name="Adeeb" time={new Date().toTimeString()} comment="id est quae quaerat mollitia nemo neque, dolores maiores laboriosam reprehenderit deserunt." isReply={true} /></div>}
    </div>
  );
};

export default Comment;