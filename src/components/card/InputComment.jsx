import React from "react";

const InputComment = (props) => {
  return (
    <div className="comment_input_wrapper">
      <input type="text" placeholder={props.placeholder} />
      <button className="fa fa-paper-plane" onClick={e => props.onhandleComment(e)}></button>
    </div>
  );
};

export default InputComment;
