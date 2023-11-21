import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../user/userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(user.users);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>Error: {user.error}</div>}
      {!user.loading && user.users.length > 0 && (
        <ul>
          {user.users.map((userData) => (
            <li key={userData.id}>{userData.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
