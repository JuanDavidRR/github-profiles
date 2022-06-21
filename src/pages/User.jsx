import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "../components/RepoCard";
import { GoMarkGithub } from "react-icons/go";
import UserCard from "../components/UserCard";
import {TiLocation} from 'react-icons/ti'
import {MdDateRange} from 'react-icons/md'
import {BsBuilding} from 'react-icons/bs'
import {RiUserFollowFill} from 'react-icons/ri';
import {RiUserFollowLine} from 'react-icons/ri';
import { motion } from "framer-motion";


const User = () => {
  let params = useParams();
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [activeTab, setActiveTab] = useState("repos");

  const getUserInfo = async () => {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    const data = await res.json();
    setUsers(data);
  };

  const getUserRepos = async () => {
    const res = await fetch(
      `https://api.github.com/users/${params.name}/repos`
    );
    const data = await res.json();
    setRepos(data);
  };

  const getFollowers = async () => {
    const res = await fetch(
      `https://api.github.com/users/${params.name}/followers`
    );
    const data = await res.json();
    setFollowers(data);
  };

  const getFollowing = async () => {
    const res = await fetch(
      `https://api.github.com/users/${params.name}/following`
    );
    const data = await res.json();
    setFollowing(data);
  };

  useEffect(() => {
    getUserInfo();
    getUserRepos();
    getFollowers();
    getFollowing();
  });

  const date = new Date(users.created_at).toDateString();
  return (
    <motion.div
    animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    className="app-user">
      <div className="user-wrap">
        <div className="user-container" id="profile">
          <div>
            <img src={users.avatar_url} alt="" />
            <a href={users.blog}>View Website</a>
          </div>
          <div className="user-details">
            <h1>{users.login}</h1>
            <h3>{users.name} | Rank #{users.id}</h3>
            {users.description && <h4>Description{users.description}</h4>}
            <div className="user-details-info">
              <div>
                <h4><TiLocation/> Location</h4>
                <p>{users.location}</p>
                <h4><MdDateRange/>Since from</h4>
                <p>{date}</p>
                <h4><BsBuilding/>Company</h4>
                <p>{users.company}</p>
              </div>
              <div>
                <h4><RiUserFollowFill/>Followers</h4>
                <p>{users.followers} Users</p>
                <h4><RiUserFollowLine/>Following</h4>
                <p>{users.following} Users</p>
                <p>Gists: {users.public_gists}</p>
              </div>
              <div>
                <h3>Popular Repos</h3>
                {repos.slice(0, 6).map((repo) => {
                return<a key={repo.id} className="repo-link" href={repo.html_url}>{repo.name}</a>;
              })}</div>
            </div>
            <a className="btn" href={users.html_url}>
              View Project <GoMarkGithub />
            </a>
          </div>
        </div>
        <button
          className={activeTab === "repos" ? "btn-tab active" : "btn-tab"}
          onClick={() => setActiveTab("repos")}
        >
          Repositories
        </button>
        <button
          className={activeTab === "followers" ? "btn-tab active" : "btn-tab"}
          onClick={() => setActiveTab("followers")}
        >
          Followers
        </button>

        <button
          className={activeTab === "following" ? "btn-tab active" : "btn-tab"}
          onClick={() => setActiveTab("following")}
        >
          Following
        </button>

        {activeTab === "repos" && (
          <div id="repositories">
            <hr />
            <h2>Repos</h2>
            <div className="repo-container">
              {repos.map((repo) => {
                return <RepoCard key={repo.id} repo={repo} />;
              })}
            </div>
          </div>
        )}
        {activeTab === "followers" && (
          <div id="Followers">
            <hr />
            <h2>Followers</h2>
            <div className="card-container">
              {followers.map((follow) => {
                return (followers.length === 0 ? <h4>No data</h4> : <UserCard key={follow.id} user={follow} />);
              })}
            </div>
          </div>
        )}

        {activeTab === "following" && (
          <div id="subscriptions">
            <hr />
            <h2>Following</h2>
            <div className="card-container">
              {following.map((foll) => {
                return(
                (foll.length === 0 ?  <h3>No data</h3> :  <UserCard key={foll.id} user={foll} />)
                )
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default User;
