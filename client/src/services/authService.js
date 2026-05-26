const API_URL = "http://localhost:5000/api/auth/";


// Register User
const register = async (userData) => {

  const response = await axios.post(
    API_URL + "register",
    userData
  );

  return response.data;
};


// Login User
const login = async (userData) => {

  const response = await axios.post(
    API_URL + "login",
    userData
  );

  if (response.data) {
    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );
  }

  return response.data;
};


const authService = {
  register,
  login,
};

export default authService;