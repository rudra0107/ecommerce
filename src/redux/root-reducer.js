import userReducer from "./user/user-reducer";

import { combineReducers } from "redux";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// const rootReducer = {
//   user: userReducer,
// };

// const rootReducer = () => ({
//   user: userReducer,
// });

export default combineReducers({
  user: userReducer,
});

// export default rootReducer;
