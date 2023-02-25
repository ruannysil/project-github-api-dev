import axios from 'axios';
import { langColor } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);
export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsForm = (repositories) => {
  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );
  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColor[language.toLocaleLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);
  return stats;
};
