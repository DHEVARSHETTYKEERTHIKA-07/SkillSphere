import "../styles/Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=15"
          alt="Profile"
        />

        <h2>{user?.name}</h2>

        <p><strong>Email:</strong> {user?.email}</p>

        <p><strong>Role:</strong> Freelancer</p>

        <p>
          <strong>Bio:</strong> Welcome to SkillSphere! This is your profile page.
        </p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;