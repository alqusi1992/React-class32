import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

function Friends() {
  const [friend, setFriend] = useState({});

  const getFriend = async () => {
    try {
      const response = await axios.get(
        "https://www.randomuser.me/api?results=1"
      );
      setFriend(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div>
      <Button getFriend={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
}

export default Friends;
