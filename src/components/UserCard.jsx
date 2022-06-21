import { GoMarkGithub } from "react-icons/go";
import { GiStarsStack } from "react-icons/gi";
import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
  return (
   (user.length === 0 ?(
    <h4>No data to show</h4>
   ) : (
    <div className="card-item">
    <Link to={`/user/${user.login}`}>
      <div className="card-img">
        <img src={user.avatar_url} alt="" />
      </div>
      <h3>
        {user.login} <GiStarsStack />
      </h3>
    </Link>
    <section className="card-body">
      <section className="card-details">
        <div>
          <p>Rank # {user.id}</p>
        </div>

        <div>
          <a href={user.html_url}>
            <GoMarkGithub />
          </a>
        </div>
      </section>
      <section>
        <Link to={`/user/${user.login}/#profile`}>
          <button className="popular">View Profile</button>
        </Link>
      </section>
    </section>
  </div>
   ))
  );
};

export default UserCard;
