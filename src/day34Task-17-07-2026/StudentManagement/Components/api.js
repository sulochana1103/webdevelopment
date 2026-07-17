import axios from "axios";

export async function getStudents() {

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;

}