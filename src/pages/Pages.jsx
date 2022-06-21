import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import User from "./User";
import Popular from "./Popular";
import Search from "./Search";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation()

    return (
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Popular />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/user/:name" element={<User/>}/>
        </Routes>
        </AnimatePresence>
    );
  };

export default Pages