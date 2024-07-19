// src/components/RepositoryList.tsx
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import RepositoryDetails from './RepositoryDetails';

const LIST_REPOSITORIES = gql`
  query ListRepositories {
    listRepositories {
      name
    }
  }
`;

const RepositoryList: React.FC = () => {
  const { loading, error, data } = useQuery(LIST_REPOSITORIES);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Repository List</h1>
      <ul>
        {data.listRepositories.map((repo: any) => (
          <li key={repo.name}>
            <a href="#" onClick={() => setSelectedRepo(repo.name)}>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      {selectedRepo && <RepositoryDetails repoName={selectedRepo} />}
    </div>
  );
};

export default RepositoryList;
