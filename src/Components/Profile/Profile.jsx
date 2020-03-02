import React from "react";
import formatDate from "../../utils/formatDate";
import "./Profile.css";

const Profile = ({ onRouteChange, profile }) => {
  return (
    <div className="wrapper">
      <div className="profile">
        <h1>Profile</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{profile.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a
                  className="link dim black underline pointer"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </td>
            </tr>
            <tr>
              <th>Entries</th>
              <td>{profile.entries}</td>
            </tr>
            <tr>
              <th>Joined</th>
              <td>{formatDate(profile.joined)}</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => onRouteChange("home")}
          className="br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Profile;
