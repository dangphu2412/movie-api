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
  DUPLICATED_TITLE: generateClientException({
    errorCode: 'MOVIE__DUPLICATED_TITLE',
    message: 'This title has been existed',
  }),
};

export const SystemExceptionClient = {
  MAINTENANCE: generateSystemException('MAINTENANCE'),
  GOT_ISSUE: generateSystemException('GOT_ISSUE'),
};
