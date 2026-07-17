import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {

  const [user] = useState("Sulochana");

  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        user,
        students,
        setStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}