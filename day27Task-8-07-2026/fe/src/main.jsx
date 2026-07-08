import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentList from './componenthierarchyfortheapplication/StudentList.jsx'
import AddStudent from './componenthierarchyfortheapplication/AddStudent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StudentList />
      <AddStudent />
  </StrictMode>,
)
