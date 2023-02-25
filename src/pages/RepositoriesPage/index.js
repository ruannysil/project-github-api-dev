import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import Filter from './Filter';
import { Loading, Container, Main, Sidebar } from './style';
import Repositories from './Repositories';
import { getUser, getRepos, getLangsForm } from '../../services/api';

function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLangauge] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesReponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesReponse.data);
      setLanguages(getLangsForm(repositoriesReponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  // calculo dos filter

  const onFilterClick = (language) => {
    setCurrentLangauge(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
