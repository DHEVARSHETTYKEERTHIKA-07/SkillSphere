import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/auth/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load users");
    }
  };

  return (
    <div className="admin-users">
      <h1>👥 Manage Users</h1>

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            <h2>{user.name}</h2>

            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUsers;