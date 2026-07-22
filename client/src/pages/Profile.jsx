import { useRef, useState } from "react";
import "../styles/Profile.css";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [editing, setEditing] = useState(false);

  const fileInputRef = useRef(null);

  const [user, setUser] = useState({
    ...storedUser,
    phone: storedUser?.phone || "",
    location: storedUser?.location || "",
    skills: storedUser?.skills || "",
    experience: storedUser?.experience || "",
    education: storedUser?.education || "",
    bio:
      storedUser?.bio ||
      "Passionate developer looking for exciting opportunities.",
    image:
      storedUser?.image ||
      "https://i.pravatar.cc/250?img=15",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setUser((prevUser) => ({
        ...prevUser,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("✅ Profile Updated Successfully");
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-photo-wrapper">

          <img
            src={user.image}
            alt="Profile"
            className="profile-image"
            onClick={() => editing && fileInputRef.current.click()}
          />

          {editing && (
            <div
              className="change-photo"
              onClick={() => fileInputRef.current.click()}
            >
              📷 Change Photo
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

        </div>

        {editing ? (
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        ) : (
          <h2>{user.name}</h2>
        )}

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        {editing ? (
          <>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={user.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={user.location}
              onChange={handleChange}
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={user.skills}
              onChange={handleChange}
            />

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={user.experience}
              onChange={handleChange}
            />

            <input
              type="text"
              name="education"
              placeholder="Education"
              value={user.education}
              onChange={handleChange}
            />

            <textarea
              rows="4"
              name="bio"
              value={user.bio}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p><strong>📞 Phone:</strong> {user.phone || "-"}</p>

            <p><strong>📍 Location:</strong> {user.location || "-"}</p>

            <p><strong>💻 Skills:</strong> {user.skills || "-"}</p>

            <p><strong>💼 Experience:</strong> {user.experience || "-"}</p>

            <p><strong>🎓 Education:</strong> {user.education || "-"}</p>

            <p><strong>📝 Bio:</strong> {user.bio}</p>
          </>
        )}

        {!editing ? (
          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            ✏ Edit Profile
          </button>
        ) : (
          <button
            className="save-btn"
            onClick={handleSave}
          >
            💾 Save Profile
          </button>
        )}

      </div>
    </div>
  );
}

export default Profile;