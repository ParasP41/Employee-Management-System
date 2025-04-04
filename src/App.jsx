import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashbaord/EmployeeDashboard'
import AdminDashboard from './Components/Dashbaord/AdminDashboard'
import { setLocalStorage } from '../src/utils/LocalStorage.jsx'
import { AuthContext } from '../src/Context/AuthProvider.jsx'
export default function App() {


  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    setLocalStorage();
  }, [])

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])



  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
    }
    else if (authData) {

      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser({ role: "employee" })
        setLoggedInUserData(employee)
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee" }))
    }
    else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}
