import { React, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsBookmarkCheck } from "react-icons/bs";
import { BASE_URL } from "../Config/BaseUrl";

export default function UserPost() {
  // All state here
  const [comment, setcomment] = useState("");
  const [processing, setProcessing] = useState("Submit");

  // for submit comment

  const CommentFunc = async () => {
    setProcessing('Processing....')
    await fetch(`${BASE_URL}/user/post/comment/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ comment }),
    }).then(async (res) => {
      const result = await res.json();
      console.log(result);
      !res.status === 200
        ? console.log(result.error)
        : console.log(result.data);
    });
  };
  return (
    <UserPostComponent>
      <main className="user-post-data" id="post-data">
        {/* post header */}
        <PostHeader>
          <div className="post-header-top" id="header-top">
            <div className="user-image">
              <img
                width={"45px"}
                height={"45px"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                alt="user-pic"
              ></img>
            </div>
            <div className="username-show">
              <p className="user">Hayat ilyas</p>
            </div>
            <div className="dotted-link">
              <Icons>
                <BsThreeDotsVertical fontSize={"1.5em"} />
              </Icons>
            </div>
          </div>
        </PostHeader>

        {/* end of post header */}

        {/* body of post */}
        <PostPic>
          <div className="post-pic">
            <img
              src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?cs=srgb&dl=pexels-pixabay-36029.jpg&fm=jpg"
              alt="pic"
              width={"480px"}
            ></img>
          </div>
        </PostPic>
        <CommentAndLike>
          <div className="Icons">
            <div className="like-icon icon">
              <RiHeartsLine fontSize={"2em"} />
            </div>
            <div className="comment-icon mx-2 icon">
              <AiOutlineComment fontSize={"2em"} />
            </div>
            <div className="share-icon icon">
              <FiShare fontSize={"2em"} />
            </div>
            <div className="bookmark-icon icon">
              <BsBookmarkCheck fontSize={"2em"} />
            </div>
          </div>
          <div className="like-section">
            <p className="no-of-likes">345 likes</p>
            <p className="user-comment-show">
              <span className="username">Hayat ilyas</span>New Android spyware
              named 'RatMilad' was discovered targeting mobile devices in the
              Middle East, used to spy on{" "}
            </p>
            <p className="no-of-comment">view all 5 comments</p>
            <p className="date-of-publish">10 days ago.</p>
          </div>
        </CommentAndLike>
        <footer className="Comment-section">
          <form
            className="post-form"
            onSubmit={(e) => {
              e.preventDefault();
              CommentFunc();
            }}
          >
            <div className="post input-field">
              <input
                className="comment-field"
                type={"text"}
                placeholder="Write your comment "
                required
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
              />
            </div>
            <div className="submit-btn">
              <button className="btn" type="submit">
                {processing}
              </button>
            </div>
          </form>
        </footer>
      </main>
    </UserPostComponent>
  );
}

const CommentAndLike = styled.div`
  // for comment icons
  .Icons {
    display: flex;
    margin: 1em;
    align-items: center;
    cursor: pointer;

    .icon {
      :hover {
        color: #6f6f6f;
      }
    }
  }

  // for like and comment section
  .like-section {
    margin: 1em;

    .no-of-likes {
      font-weight: bold;
      font-size: 14px;
    }
    .no-of-comment {
      color: #6f6f6f;
      font-size: 14px;
    }
    .date-of-publish {
      color: #6f6f6f;
      font-size: 14px;
    }

    .user-comment-show {
      font-size: 13px;

      .username {
        font-weight: bold;
        margin-right: 0.5em;
        font-size: 14px;
      }
    }
  }

  .mx-2 {
    margin: 0 2em;
  }

  .bookmark-icon {
    margin-left: 16em;
  }
`;
const PostPic = styled.div`
  text-align: center;
`;

const UserPostComponent = styled.div`
  
  width: 40em;
  height: 70em;
  overflow: hidden;
// foooter
  footer {
    .post-form {
      display: flex;
      align-items: center;
    }
    button {
      margin-left: 1em;
      padding: 0.3em 2em;
      margin-top: 0.5em;
      color: white;
      border: 2px solid green;
      border-radius: 2em;
      margin-bottom: 2em;
      background: green;

      // applying hover effect

      :hover {
        background: transparent;
        color: black;
      }
    }
    .comment-field {
      width: 20em;
      border: none;
      background-color: transparent;
      outline: none;
    }
    .input-field {
      border: 1px solid rgb(138, 129, 129);
      width: 20em;
      padding: 0.3em 0.5em;
      margin-bottom: 1em;
      margin-left: 1em;
      border-radius: 4px;
    }
  }
  main {
    width: 30em;
    margin: 1em 5em;
    border-radius: 6px;
    border: 1px solid rgb(138, 129, 129);
  }
`;

const PostHeader = styled.div`
  // hedaer section
  background-color:#f9f9f98c;
  over-flow:hidden;
  .post-header-top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(138, 129, 129);
  }

  .user-image {
    width: 4em;
  }
  .user-image {
    margin-left: 1em;
    margin-top: 0.3em;
    margin-bottom: 0.2em;
    img {
      border-radius: 50%;
    }
  }
  .username-show {
    margin-left: 0.5em;
    font-size: 17px;
  }

  .dotted-link {
    margin-left: 14.5em;
  }
`;

const Icons = styled.div``;
