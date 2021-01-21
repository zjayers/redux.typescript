import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
      {error && <h2>{error}</h2>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((repository) => (
            <li key={repository}>{repository}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
