import { firestore } from "./config";
const eventRef = firestore.collection("events");
const galleryRef = firestore.collection("gallery");
const quotesRef = firestore.collection("quotes");
const courseRef = firestore.collection("courses");
const blogRef = firestore.collection("blogs");
const inboxRef = firestore.collection("inbox");

export const OnAddPhoto = (data, CleanUp) => {
  galleryRef.doc().set(data);
  CleanUp();
};

export const OnAddQuote = (data, CleanUp) => {
  quotesRef.doc(data.id).set(data);
  CleanUp();
};
export const OnEditQuote = (data, CleanUp) => {
  quotesRef.doc(data.id).update(data);
  CleanUp();
};

export const OnAddEvent = (data, CleanUp) => {
  eventRef.doc(data.date).set(data);
  CleanUp();
};

export const sendNotification = (data) => {
  const timestamp = Date.now();
  inboxRef.doc(`${timestamp}`).set({ ...data, timestamp, seen: false });
};

export const onGetCourse = (courseId, data) => {
  courseRef.doc(courseId).collection("attendees").doc(data.email).set(data);
  sendNotification({ ...data, title: `${data.name} enrolled!!!` });
};
export const onInviteToSpeak = (data) => {
  sendNotification({ ...data, title: `${data.name} Invited you to speak!!!` });
};

export const OnToggleArticleOfTheWeek = async (postId, state) => {
  const batch = firestore.batch();
  batch.update(blogRef.doc(postId), { articleOfTheWeek: state });
  try {
    await batch.commit();
  } catch (error) {
    console.log("error", error.message);
  }
};

export const OnPost = (data, CleanUp) => {
  blogRef.doc(data.id).set(data);
  CleanUp();
};

export const OnSaveToDraft = (data) => {
  blogRef.doc(data.id).set(data);
};

export const OnPostEdit = (data, CleanUp) => {
  blogRef.doc(data.id).update(data);
  CleanUp();
};
