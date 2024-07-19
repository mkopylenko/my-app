
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import RepositoryList from './components/RepositoryList';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>My Repositories</h1>
        </header>
        <main>
          <RepositoryList />
        </main>
      </div>
    </ApolloProvider>
  );
};

export default App;
