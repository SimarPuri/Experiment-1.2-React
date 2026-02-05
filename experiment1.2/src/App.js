import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./redux/productSlice";
import { fetchUsers } from "./redux/usersSlice";
import { AuthContext } from "./context/AuthContext";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { isLoggedIn, setIsLoggedIn, theme, toggleTheme } = useContext(AuthContext);

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h1>Advanced State Management Experiment</h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <br /><br />

      <button onClick={() => dispatch(addProduct({ name: "Laptop" }))}>
        Add Product
      </button>

      <br /><br />

      <button onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </button>

      {users.loading && <p>Loading...</p>}
      {users.error && <p>Error fetching users</p>}
      {users.data.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default App;
