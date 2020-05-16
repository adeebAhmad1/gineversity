import React from "react";

const InputComment = ({placeholder}) => {
  return (
    <div className="comment_input_wrapper">
      <input type="text" placeholder={placeholder} />
      <button className="fa fa-paper-plane"></button>
    </div>
  );
};

export default InputComment;
