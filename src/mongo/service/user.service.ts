import { IUser, UserType } from '../models/types';
import { IUsersRepository, UsersRepository } from '../repositories/user.repository';
import createUser from '../models/user.model';

// eslint-disable-next-line import/prefer-default-export
export class UserService {
  private repository: IUsersRepository;

  constructor() {
    this.repository = new UsersRepository();
  }

  async save(data: UserType): Promise<void> {
    const user = createUser(data);
    await this.repository.saveToUsersRepository(user);
  }

  async get(id?: string): Promise<IUser[]> {
    const user = await this.repository.getFromUsersRepository(id);
    return user;
  }
}
