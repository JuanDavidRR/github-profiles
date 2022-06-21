import React, { useEffect, useState } from "react";
import SearchCard from "../components/SearchCard";
import { motion } from "framer-motion";

const Search = () => {
  const [query, setQuery] = useState("example");
  const [users, setUsers] = useState([]);

  const getUsers = async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };
  useEffect(() => {
    getUsers(query);
  }, [query]);

  return (
    <motion.div
    animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}} 
    className="app">
      <form onChange={handleSubmit}>
        <input type="text" className="search" placeholder="Search an user..." />
      </form>
      <div className="search-card-container">
        {users.message === 'Not Found' ? <h2>No users to show</h2> : <SearchCard user={users} />}
      </div>
    </motion.div>
  );
};

export default Search;
