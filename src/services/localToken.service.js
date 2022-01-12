class localTokenService {
  getLocalTokens() {
    let keys = [];
    if (localStorage.getItem('refresh_token')) {
      keys.push(...localStorage.getItem('refresh_token'));
    } else if (localStorage.getItem('access_token')) {
      keys.push(...localStorage.getItem('access_token'));
    }
    return keys;
  }

  delLocalTokens() {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    return 'Local Tokens deleted';
  }

  getLocalRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  getLocalAccessToken() {
    return localStorage.getItem('access_token');
  }

  setLocalAccessToken(access_token) {
    return localStorage.setItem('access_token', access_token);
  }

  setLocalRefreshToken(refresh_token) {
    return localStorage.setItem('refresh_token', refresh_token);
  }

  delLocalAccessToken() {
    return localStorage.removeItem('access_token');
  }

  delLocalRefreshToken() {
    return localStorage.removeItem('refresh_token');
  }
}

export default new localTokenService();
