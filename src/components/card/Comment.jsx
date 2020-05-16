import React, { useState } from "react";
import InputComment from "./InputComment";

const Comment = ({ name, comment, isReply }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="comment_outer">
      <div className="comment_inner">
        <div className="profile_flex">
          <div className="icon_comment" style={{ display: `inline-flex` }}>
            {name[0].toUpperCase()}
          </div>
          <div className="commenter">{name}</div>
        </div>
        <div className="comment_wrapper">
          <div className="comment">{comment}</div>
        </div>
        <div className="comment_button_wrapper">
          <button>Like</button>
          {
            isReply ?
            "" :
            <button onClick={() => setHidden((h) => !h)}>Reply</button>
          }
        </div>
        {isReply ? (
          ""
        ) : (
          <div>
            {hidden ? (
              ""
            ) : (
              <div className="reply_comment_wrapper">
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <Comment name="Hello World" isReply={true} comment="Hello World How are You?????"/>
                <InputComment placeholder="Write Reply" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
