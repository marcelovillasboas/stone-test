import { VisitorService } from '../service/visitor.service';
import { UserType } from '../models/types';
import { UserService } from '../service/user.service';

// eslint-disable-next-line import/prefer-default-export
export async function saveUser(user: UserType) {
  const { _id, name, email } = user;
  const mongoDbObject = {
    _id,
    name,
    email,
  };

  const userService = new UserService();
  await userService.save(mongoDbObject);
}

export async function getUser(id?: string) {
  const userService = new UserService();
  const mongoObj = await userService.get(id);

  const result = JSON.parse(JSON.stringify(mongoObj));
  return result;
}

export async function saveVisitors(count: number) {
  const mongoDbObject = {
    _id: '1',
    count,
  };

  const visitorService = new VisitorService();
  await visitorService.save(mongoDbObject);
}

export async function getVisitors() {
  const id = '1';
  const visitorService = new VisitorService();
  const mongoObj = await visitorService.get(id);

  const result = JSON.parse(JSON.stringify(mongoObj));
  return result;
}
