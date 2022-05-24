import { UserModel } from '../models/schema';
import { IUser, UserType } from '../models/types/users.types';

export interface IUsersRepository {
    // eslint-disable-next-line no-unused-vars
    saveToUsersRepository(user: UserType): Promise<void>;
    // eslint-disable-next-line no-unused-vars
    getFromUsersRepository(userId?: string): Promise<IUser[]>
}

export class UsersRepository implements IUsersRepository {
  // eslint-disable-next-line class-methods-use-this
  async saveToUsersRepository(user: UserType): Promise<void> {
    await UserModel.findOneAndUpdate(
      {
      // eslint-disable-next-line no-underscore-dangle
        _id: user._id,
      },
      user,
      { upsert: true },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  async getFromUsersRepository(id?: string) {
    const user = await UserModel.find({ _id: id });
    return user;
  }
}
