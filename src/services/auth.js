import request from './_request';

export default {
  login: credentials => (
    request.send(
      '/auth/local',
      'post',
      { ...credentials }
    )
  ),
  signup: user => (
    request.send(
      '/users',
      'post',
      { ...user }
    )
  ),
};
