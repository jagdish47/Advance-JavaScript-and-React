import React, { useContext } from "react";
import { channelContext } from "../App";
import { UserContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(channelContext);

  return (
    <div>
      User - {user}
      channel - {channel}
    </div>
  );
};

export default ComponentE;
