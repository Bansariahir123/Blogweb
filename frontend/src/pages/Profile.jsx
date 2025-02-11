import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("user");  //  Remove user data
    dispatch(logout());
    navigate("/login");
  };
  if (!user) return <p className="text-center mt-5">Please log in.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {user.profileImage && (
        <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
      )}
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 mt-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default Profile;
