import React from "react";
import { Link } from "react-router-dom";

const PostCard = (item) => {
  console.log(item)
  return (
    <div className="f-card">
        <div className="header">
          <div className="options">
            <i class="fa fa-ellipsis-v" aria-hidden="true" style={{fontSize: `1.1rem`}}></i>
          </div>
          <img
            className="co-logo"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            }
            alt="user.name"
          />
          <div className="co-name" style={{display: `inline-block`}}>
            <Link to="/">
              {item.postedBy.name}
            </Link>
          </div>
          <div style={{display: `inline-flex`}} class="align-items-center"><div class="post-option"><span class="fa fa-caret-right post-head-icon"></span></div><div class="post-group-ref">Computers</div></div>
        </div>
        <div>
        <div className="content">
          <p>{item.feed}</p>
        </div>
        <div className="reference">
          {item.feed === "picture upload test" ? <img className="reference-thumb" alt="imga" src="https://cdn.vox-cdn.com/thumbor/PdZbmB57vB9M-oFxApdoaI3oPF0=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/65162399/ply0947_fall_reviews_2019_tv_anime.0.jpg" /> : ""}
        </div>
        </div>
        <span className="line" style={{ height: `1px` }}></span>
        <div className="" style={{ marginBottom: `30px` }}>
          <div className="right">  Comments </div>
        </div>
        <div className="social">
          <div className="social-content"></div>
          <div className="social-buttons">
            <span
              data-fill="favorite"
            >
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
              Approve
            </span>
            <span>
              <i className="fa fa-comment-o post-icon"></i>
              Comment
            </span>
              <span>
                <i className="fa fa-share-square-o post-icon"></i>Share
              </span>
          </div>
        </div>
      </div>
  );
};
/* 

*/
export default PostCard;
