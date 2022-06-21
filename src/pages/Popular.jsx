import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { motion } from "framer-motion";


const Popular = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(`https://api.github.com/users`);
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <motion.div 
    animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    className="app">
      <h1 className="page-title">Popular Users</h1>
      <hr />
      <div className="card-container">
        {users.map((user)=>{
            return(
                <UserCard  key={user.id} user={user}/>
            )
        })}
      </div>
    </motion.div>
  );
};

export default Popular;
