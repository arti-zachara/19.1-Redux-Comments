import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
} from "./actions";
// ------ imports -------------------------------

// ------ comments reducer ----------------------
export function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          id: action.id,
          text: action.text,
          rating: 0
        },
        ...state.comments
      ];

    case REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      return state.comments.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            text: action.text
          });
        } else {
          return comment;
        }
      });

    case THUMB_UP_COMMENT:
      return state.comments.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            rating: action.rating + 1
          });
        } else {
          return comment;
        }
      });

    case THUMB_DOWN_COMMENT:
      return state.comments.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            rating: action.rating - 1
          });
        } else {
          return comment;
        }
      });

    default:
      return state;
  }
}
