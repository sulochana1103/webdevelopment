const createUser = async () => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: "Sulochana",
        email: "sulochana@gmail.com",
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
