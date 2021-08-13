import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import "suneditor/dist/css/suneditor.min.css";
import CustomInput from "../../../componentz/CustomInput/CustomInput";
import Spacing from "../../../componentz/Spacing/Spacing";
import { OnPostEdit } from "../../../firebase/firestore";
import CustomButton from "../../../componentz/CustomButton/CustomButton";
import { GetWindowDimensions } from "../../../utils/functions";
import { useHistory, useLocation } from "react-router-dom";
import loader from "../../../assetz/loader.gif";

import "./styles.scss";

const EditPost = () => {
  const history = useHistory();
  const location = useLocation();
  const data = location.state;
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [title, setTitle] = useState(data.title);
  const [thumbnail, setThumbnail] = useState(data.thumbnail || data.tumbnail);
  const [hook, setHook] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(data.tags);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSetHook = (content) => {
    setHook(content);
  };
  const handleChange = (content) => {
    setBody(content);
  };
  const CleanUp = () => {
    setLoading(false);
    history.goBack();
  };
  const OnEditPost = async () => {
    if (body === "" || title === "" || thumbnail === "" || hook === "") {
      setErrorMessage("All fields is required");
      return;
    }
    setLoading(true);
    const newTopic = {
      id: data.id,
      body,
      title,
      hook,
      thumbnail,
      user: "Admin",
      tags,
      posted_at: data.posted_at,
      updated_at: Date.now(),
      articleOfTheWeek: data.articleOfTheWeek,
      views: data.views,
      viewers: data.viewers,
      likes: data.likes,
      likers: data.likers,
      comments: data.comments,
    };
    try {
      OnPostEdit(newTopic, CleanUp);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed, try again");
    }
  };
  const OnMouse = () => {
    if (
      body.trim() === "" ||
      title.trim() === "" ||
      thumbnail.trim() === "" ||
      hook.trim() === ""
    ) {
      setReady(false);
    } else {
      setReady(true);
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      console.log("goback");
    });
  });
  return (
    <>
      {errorMessage !== "" && (
        <span className="noty error">{errorMessage}</span>
      )}
      {successMessage !== "" && (
        <span className="noty success">{successMessage}</span>
      )}
      <CustomButton
        label="Update Post"
        className="create-post-btn absolute-btn"
        onClick={OnEditPost}
        onMouseEnter={OnMouse}
        onMouseLeave={OnMouse}
        style={{ cursor: !ready ? "not-allowed" : "pointer" }}
      />
      <div className="create-post">
        <div className="properties">
          <CustomInput
            label="Title"
            value={title}
            type={"text"}
            onChange={({ target }) => setTitle(target.value)}
            required
          />
          <Spacing height="1em" />
          <span className={`hook-label`}>Hook</span>
          <Spacing height="0.5em" />
          <SunEditor
            setContents={data.hook}
            hideToolbar={true}
            onChange={onSetHook}
            show={true}
            enable={true}
            height={`${GetWindowDimensions().height - 600}px`}
          />
          <Spacing height="1em" />
          <CustomInput
            label="Thumbnail"
            value={thumbnail}
            type={"text"}
            onChange={({ target }) => setThumbnail(target.value)}
            required
          />
        </div>
        <div className="editor">
          <SunEditor
            setContents={data.body}
            onChange={handleChange}
            enableToolbar={true}
            showToolbar={true}
            image={image}
            placeholder="Enter content"
            show={true}
            enable={true}
            height={`${GetWindowDimensions().height - 280}px`}
            setOptions={{
              plugins: plugins,
              buttonList: [
                ["undo", "redo", "fontSize"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                [
                  "fontColor",
                  "hiliteColor",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "table",
                ],
                [
                  "link",
                  "image",
                  "video",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "print",
                  "save",
                ],
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EditPost;
