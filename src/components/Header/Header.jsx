import React, { useEffect } from "react";
import { ImageUrl } from "../../utils/constant/ImageUrl";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice.js";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center">
      <img className="w-44 " src={ImageUrl.NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 rounded-full" src={user.photoURL} />
          <button
            onClick={handleSignOut}
            className="bg-red-500 p-1 cursor-pointer text-white rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
