import React, { useState } from "react";
import { Jutsu } from "react-jutsu";
import { userData } from "../../../../api/api";

const Live = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState(userData.name);
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (event) => { 
    event.preventDefault();
    if (room && name) setCall(true);
  };

  const handleStartJoin = () => {
    window.open(`https://meet.jit.si/${room}`, "_blank");
  };

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log("Meeting has ended")}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>}
    />
  ) : (
    <div className="create-course-container">
      <div className="container">
        <div className="create-course-form">
          <form>
            <div className="row">
              <div className="col-form">
                <div className="form-group">
                  <label className="form-label">Room Title</label>
                  <input
                    id="room"
                    type="text"
                    className="form-control"
                    placeholder="Room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Password (optional)</label>
                  <input
                    id="password"
                    type="text"
                    className="form-control"
                    placeholder="Password (optional)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="create-course-btn"
                  onClick={handleStartJoin}
                  type="submit"
                >
                  Start / Join
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Live;
