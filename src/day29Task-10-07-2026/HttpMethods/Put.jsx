const updateUser = async () => {
  try {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        name: "Sulochana",
        email: "newemail@gmail.com",
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};