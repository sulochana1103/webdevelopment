function List1() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h2>Fruit List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default List1;