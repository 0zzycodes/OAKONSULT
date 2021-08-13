import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins";
import image from "suneditor/src/plugins/dialog/link";
import "suneditor/dist/css/suneditor.min.css";
import loader from "../../../assetz/loader.gif";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "../../../componentz/CustomInput/CustomInput";
import Spacing from "../../../componentz/Spacing/Spacing";
import { OnPost, OnSaveToDraft } from "../../../firebase/firestore";
import CustomButton from "../../../componentz/CustomButton/CustomButton";
import { GetWindowDimensions } from "../../../utils/functions";

import "./styles.scss";

const CreatePost = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [title, setTitle] = useState("");
  const [mainTag, setMainTag] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [hook, setHook] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["all"]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSetHook = (content) => {
    setHook(content);
  };
  const handleChange = (content, core) => {
    console.log(core);
    setBody(content);
  };
  const CleanUp = () => {
    setErrorMessage("");
    setSuccessMessage("Post successfully created");
    setTitle("");
    setMainTag("");
    setThumbnail("");
    setHook("");
    setBody("");
    setTags(["all"]);
    setReady(false);
    setLoading(false);
  };
  const getPostInfo = () => {
    const id = uuidv4().split("-").join("");
    const data = {
      id,
      body,
      title,
      hook,
      thumbnail,
      user: "Admin",
      tags,
      main_tag: mainTag.toLocaleLowerCase().split(" ").join("-"),
      posted_at: Date.now(),
      updated_at: Date.now(),
      articleOfTheWeek: false,
      views: 0,
      viewers: {},
      likes: 0,
      likers: {},
      comments: 0,
    };
    return data;
  };
  const OnSaveDraft = async () => {
    // if (
    //   body.trim() === "" ||
    //   title.trim() === "" ||
    //   thumbnail.trim() === "" ||
    //   hook.trim() === ""
    // ) {
    setLoading(true);
    const data = getPostInfo();
    console.log(data);
    try {
      // await OnSaveToDraft(getPostInfo());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed, try again");
    }
    // }
  };
  const OnCreatePost = async () => {
    if (
      body.trim() === "" ||
      title.trim() === "" ||
      thumbnail.trim() === "" ||
      hook.trim() === ""
    ) {
      setErrorMessage("All fields is required");
      return;
    }
    setLoading(true);
    try {
      OnPost(getPostInfo(), CleanUp);
    } catch (error) {
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
      <div className="absolute-btns">
        <CustomButton
          label="Save to Draft"
          className="create-post-btn"
          onClick={!loading && OnSaveDraft}
          style={{ cursor: "pointer" }}
        />
        <Spacing width="2em" />
        <CustomButton
          label="Post"
          className="create-post-btn"
          onClick={!loading && OnCreatePost}
          onMouseEnter={OnMouse}
          onMouseLeave={OnMouse}
          style={{ cursor: !ready ? "not-allowed" : "pointer" }}
        />
      </div>
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
          <Spacing height="1em" />
          <span className={`tag-label`}>Select Tag</span>
          <Spacing height="2em" />
          <MainTag
            tagName="For Parents"
            mainTag={mainTag}
            setMainTag={setMainTag}
          />
          <Spacing height="1em" />
          <MainTag
            tagName="For Siblings"
            mainTag={mainTag}
            setMainTag={setMainTag}
          />
          <Spacing height="1em" />
          <MainTag
            tagName="For Carers"
            mainTag={mainTag}
            setMainTag={setMainTag}
          />
        </div>
        <div className="editor">
          <SunEditor
            onChange={handleChange}
            enableToolbar={true}
            showToolbar={true}
            image={image}
            placeholder="Enter content"
            show={true}
            enable={true}
            height={`${GetWindowDimensions().height - 380}px`}
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

export default CreatePost;

const MainTag = ({ mainTag, tagName, setMainTag }) => {
  return (
    <div className="post-tag">
      <div
        className="post-tag-check"
        onClick={() => setMainTag(tagName)}
        style={mainTag === tagName ? { backgroundColor: "#6ab5b9" } : {}}
      ></div>
      <span className="post-tag-text">{tagName}</span>
    </div>
  );
};
