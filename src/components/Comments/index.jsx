import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  render () {
    return (
      <div className="popup" id="comments">
        <div className="popup__box" style={{maxWidth: `600px`}}>
          <h1>Comments</h1>
        <div className="comments_wrapper" style={{height: `60vh`,overflowY: `scroll`}}>
          <Comment isReply={false} name="Hello" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="World" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="Hello" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="World" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="Hello" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="World" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="Hello" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="World" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="Hello" comment="Great Website" time={new Date().toTimeString()} />
          <Comment isReply={false} name="World" comment="Great Website" time={new Date().toTimeString()} />
        </div>
        <div className="input_wrapper_messages">
          <input type="text"/>
          <button><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </div>
        </div>
      </div>
    )
  }
}

export default Comments