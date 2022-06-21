import React from "react";

const RepoCard = ({ repo }) => {
  const date = new Date(repo.created_at).toDateString();
  return (
    <div className="repo-item">
      <div className="repo-header">
        <h4>{repo.name}</h4>
        <span>{repo.visibility}</span>
      </div>
      <p>{repo.description}</p>
      <div className="repo-body">
        <div>
          <p>Size: {repo.size}mb</p>
          <p>Watch count: {repo.watchers_count}</p>
        </div>
        <div>
          <p>Branch: {repo.default_branch}</p>
          <p>Created at: {date}</p>
        </div>
      </div>
      <div className="repo-footer">
        <p>{repo.language}</p>
        <a className="btn" href={repo.html_url}>View Project</a>
      </div>
    </div>
  );
};

export default RepoCard;
