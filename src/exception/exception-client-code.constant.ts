import {
  generateClientException,
  generateSystemException,
} from './exception-generator';

export const AuthExceptionClient = {
  DUPLICATED_USERNAME: generateClientException('AUTH__DUPLICATED_USERNAME'),
  INCORRECT_USERNAME_OR_PASSWORD: generateClientException({
    errorCode: 'AUTH__INCORRECT_USERNAME_OR_PASSWORD',
    message: 'Incorrect username or password',
  }),
  LOGOUT_REQUIRED: generateClientException('LOGOUT_REQUIRED'),
  FORBIDDEN: generateClientException('FORBIDDEN'),
};

export const ActorExceptionClient = {
  NO_ACTOR_FOUND: generateClientException({
    errorCode: 'ACTOR__NO_ACTOR_FOUND',
    message: 'No actor(s) found',
  }),
};

export const MovieExceptionClient = {
  NO_MOVIE_FOUND: generateClientException({
    errorCode: 'MOVIE__NO_MOVIE_FOUND',
    message: 'No movie(s) found',
  }),
};

export const SystemExceptionClient = {
  MAINTENANCE: generateSystemException('MAINTENANCE'),
  GOT_ISSUE: generateSystemException('GOT_ISSUE'),
};
