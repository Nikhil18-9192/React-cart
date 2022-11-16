let user = false;

const login = (state = user, action) => {
  switch (action.type) {
    case "LOGIN":
      user = action.payload;
      return user;

    default:
      return state;
  }
};

export default login;
