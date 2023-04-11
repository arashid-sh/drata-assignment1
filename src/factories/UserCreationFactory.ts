import { faker } from '@faker-js/faker';

import { User } from '../types/user';

/**
 * This object creates a user with a random email and password when called. We can easily add more fields if we want.
 */
export const UserService = {
  async createUser(): Promise<User> {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  },
};
