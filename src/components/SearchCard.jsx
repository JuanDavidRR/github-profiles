import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const SearchCard = ({ user }) => {
  const date = new Date(user.created_at).toDateString();
  return (
    <div className="search-card-item">
      <div className="search-card-details">
        <div>
          <Link to={`/user/${user.login}`}>
            <img src={user.avatar_url} alt="" />
          </Link>
        </div>
        <div>
          <h2>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
            <span> | Rank #{user.id}</span>
          </h2>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Repositories: {user.public_repos}</p>
          <p>Gists: {user.public_gists}</p>
          <p>Since from: {date}</p>
          <Link to={`/user/${user.login}`}>
            <button>View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
