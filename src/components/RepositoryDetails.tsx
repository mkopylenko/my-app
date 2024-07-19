
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORY_DETAILS = gql`
  query GetRepositoryDetails($repoNames: [String!]!) {
    getReposDetails(repoNames: $repoNames) {
      name
      size
      owner
      isPrivate
      numberOfFiles
      ymlContent
      webhooks
    }
  }
`;

interface RepositoryDetailsProps {
  repoName: string;
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({ repoName }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAILS, {
    variables: { repoNames: [repoName] },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const repo = data.getReposDetails[0];

  return (
    <div>
      <h2>Repository Details</h2>
      <p>Name: {repo.name}</p>
      <p>Size: {repo.size}</p>
      <p>Owner: {repo.owner}</p>
      <p>Private: {repo.isPrivate ? 'Yes' : 'No'}</p>
      <p>Number of Files: {repo.numberOfFiles}</p>
      <p>YAML Content: {repo.ymlContent}</p>
      <p>Webhooks: {repo.webhooks.join(', ')}</p>
    </div>
  );
};

export default RepositoryDetails;
