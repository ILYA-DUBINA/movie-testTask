export default class SwapiService {
  constructor() {
    this.keyApi = 'AIzaSyDqLlOQHm8HTw-_LpzXCkFgVmZijPaIzWs';
    this.urlConst = 'https://www.googleapis.com/books/v1/';
  }

  async getResource(url) {
    const res = await fetch(`${this.urlConst}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const body = await res.json();

    return body;
  }

  async getAllMovies(search, page = 0, categor = 'all', value = 'relevance') {
    const res = await this.getResource(
      `volumes?q=${search}+${
        categor === 'all' ? '' : 'subject:' + categor
      }&maxResults=30&startIndex=${page}&orderBy=${value}&key=${this.keyApi}`
    );
    return res;
  }
}
