import { UserType } from './types';

export default function createUser(user: UserType): Readonly<UserType> {
  // eslint-disable-next-line no-underscore-dangle
  if (!user._id) {
    throw new Error('USER_ID_REQUIRED');
  }

  if (!user.name) {
    throw new Error('USER_NAME_REQUIRED');
  }

  if (!user.email) {
    throw new Error('USER_EMAIL_REQUIRED');
  }

  return Object.freeze({
    // eslint-disable-next-line no-underscore-dangle
    _id: user._id,
    name: user.name,
    email: user.email,
  });
}
