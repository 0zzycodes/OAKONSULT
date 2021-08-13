import React, { useState } from "react";
import { AntDesign, Ionicons } from "react-web-vector-icons";
import CustomInput from "../../CustomInput/CustomInput";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Spacing from "../../Spacing/Spacing";
import Spinner from "../../Spinner/Spinner";
import { useSelector } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import { colors } from "../../../constants/Colors";
import { OnAddPhoto } from "../../../firebase/firestore";

import "./styles.scss";
const AddGallery = ({ setDialogVisible }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const CleanUp = () => {
    setLoading(false);
    setDialogVisible(false);
  };
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const galleryData = {
      photoUrl,
      created_at: Date.now(),
    };
    if (photoUrl.trim() === "") {
      setLoading(false);
      setErrorMessage(`Photo url is required!`);
      return;
    }
    try {
      OnAddPhoto(galleryData, CleanUp);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner style={{ height: "20vh" }} />
      ) : (
        <div className="flex-center add-category">
          <div className="flex-vertical-center add-category-head">
            <span>New Photo</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons photoUrl="md-close" size={20} color={colors.white} />
            </div>
          </div>
          <Spacing height="2em" />
          {errorMessage !== "" ? (
            <CustomPopUp
              message={`${errorMessage}`}
              type={"error"}
              customStyles={{ backgroundColor: "red" }}
              customTextStyles={{ color: "#ffffff", textAlign: "center" }}
            />
          ) : null}
          <Spacing height="2em" />
          <CustomInput
            label="Photo Url"
            value={photoUrl}
            type={"text"}
            onChange={({ target }) => setPhotoUrl(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Add"
            onClick={onSubmit}
            className="add-category-btn"
          />
        </div>
      )}
    </>
  );
};

export default AddGallery;
