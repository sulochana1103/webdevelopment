export async function getStudents() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
}