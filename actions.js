import uuid from "uuid";
// ----- imports --------------------

// ------ action types -------------

const ADD_COMMENT = "ADD_COMMENT",
  REMOVE_COMMENT = "REMOVE_COMMENT",
  EDIT_COMMENT = "EDIT_COMMENT",
  THUMB_UP_COMMENT = "THUMB_UP_COMMENT",
  THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

// ------ action objects examples ------------
// {
//   type: ADD_COMMENT,
//   text: "First comment !"
// }

// {
//   type: REMOVE_COMMENT,
//   id: 20
// }

// {
//   type: EDIT_COMMENT,
//   id: 20,
//   text: "Comment has been changed"
// }

// {
//   type: THUMB_UP_COMMENT,
//   rating: +1,
//   id: 20
// }

// {
//   type: THUMB_DOWN_COMMENT,
//   rating: -1,
//   id: 20
// }

// ------ action creators --------------------
function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    rating,
    id
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    rating,
    id
  };
}
