import React, { useState } from "react";
import { Ionicons } from "react-web-vector-icons";
import CustomInput from "../../CustomInput/CustomInput";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Spacing from "../../Spacing/Spacing";
import Spinner from "../../Spinner/Spinner";
import CustomButton from "../../CustomButton/CustomButton";
import { colors } from "../../../constants/Colors";
import { OnEditQuote } from "../../../firebase/firestore";

import "./styles.scss";

const EditQuote = ({ data, setDialogVisible }) => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(data.quote);
  const [bibleVerse, setBibleVerse] = useState(data.bible_verse);
  const [errorMessage, setErrorMessage] = useState("");
  const CleanUp = () => {
    setLoading(false);
    setDialogVisible(false);
  };
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const quoteData = {
      id: data.id,
      quote,
      bible_verse: bibleVerse
    };
    if (quote.trim() === "") {
      setLoading(false);
      setErrorMessage(`Photo url is required!`);
      return;
    }
    try {
      OnEditQuote(quoteData, CleanUp);
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
            <span>Edit Quote</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons quote="md-close" size={20} color={colors.white} />
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
            label="Quote"
            value={quote}
            type={"text"}
            onChange={({ target }) => setQuote(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomInput
            label="Bible Verse"
            value={bibleVerse}
            type={"text"}
            onChange={({ target }) => setBibleVerse(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Update"
            onClick={onSubmit}
            className="add-category-btn"
          />
        </div>
      )}
    </>
  );
};

export default EditQuote;
