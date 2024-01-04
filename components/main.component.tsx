import React from 'react';

interface User {
  userName: string;
}

interface UserListProps {
  alluser: User[];
  check: string;
  goToChat: (username: string) => void;
}

const UserList: React.FC<UserListProps> = ({ alluser, check, goToChat }) => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h3>All Registered Users</h3>
      </div>
      <div className="row mt-5">
        {alluser.map((presentation) => {
          return (
            <div key={presentation.userName} className="user col-2" onClick={() => goToChat(presentation.userName)}>
              {presentation.userName !== check && <div>{presentation.userName}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;