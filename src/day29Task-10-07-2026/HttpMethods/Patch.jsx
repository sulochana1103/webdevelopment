const updateEmail = async () => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        email: "updated@gmail.com",
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};