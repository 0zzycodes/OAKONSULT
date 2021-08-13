import React, { useState } from "react";
import { AntDesign, Ionicons } from "react-web-vector-icons";
import CustomInput from "../CustomInput/CustomInput";
import CustomPopUp from "../CustomPopUp/CustomPopUp";
import Spacing from "../Spacing/Spacing";
import Spinner from "../Spinner/Spinner";
import CustomButton from "../CustomButton/CustomButton";
import { colors } from "../../constants/Colors";
import { onInviteToSpeak } from "../../firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

const InviteToSpeakMOdal = ({ setDialogVisible, title }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    const id = uuidv4().split("-").join("");
    setLoading(true);
    e.preventDefault();
    const userData = {
      id,
      name,
      email,
      phone,
      type: "Invite",
      // tag: ,
    };
    if (name.trim() === "" || email.trim() === "") {
      setLoading(false);
      setErrorMessage(`All fields are required!`);
      return;
    }
    try {
      await onInviteToSpeak(userData);
      setLoading(false);
      setDialogVisible(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner style={{ height: "20vh" }} />
      ) : (
        <div className="flex-center add-employee">
          <div className="flex-vertical-center add-employee-head">
            <span>{title ? title : 'Invite me to speak'}</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons name="md-close" size={20} color={colors.white} />
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
          <Spacing height="1em" />
          <CustomInput
            label="Name"
            value={name}
            type={"text"}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomInput
            label="Email"
            value={email}
            type={"email"}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomInput
            label="Phone Number"
            value={phone}
            type={"number"}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Invite"
            onClick={onSubmit}
            className="add-employee-btn"
          />
        </div>
      )}
    </>
  );
};

export default InviteToSpeakMOdal;
