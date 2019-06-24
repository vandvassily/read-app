import axios from '../axios';
export function getBookList() {
  return axios.get('api/booklists');
}
