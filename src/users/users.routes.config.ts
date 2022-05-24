import {
  Application, Request, Response, NextFunction,
} from 'express';
import countapi from 'countapi-js';
import { CommonRoutesConfig } from '../common/common.routes.config';
import {
  getUser, getVisitors, saveUser, saveVisitors,
} from '../mongo/helper/mongo.helper';

// eslint-disable-next-line import/prefer-default-export
export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): Application {
    this.app.route('/users')
      .get(async (req: Request, res: Response) => {
        const allUsers = await getUser();
        res.status(200).send(`List of users ${allUsers}`);
      })
      .post(async (req: Request, res: Response) => {
        const { _id, name, email } = req.query;
        const user = {
          _id,
          name,
          email,
        };

        await saveUser(user);

        res.status(200).send(`User ${name} created`);
      });

    this.app.route('/users/:userId')
      .all((req: Request, res: Response, next: NextFunction) => {
        // middleware for later authentication.
        next();
      })
      .get(async (req: Request, res: Response) => {
        const { userId } = req.params;
        const user = await getUser(userId);
        const { _id, email, name } = user[0];
        res.status(200).send(`Username: ${name}, Email: ${email}, ID: ${_id}`);
      });

    this.app.route('/visitors')
      .get(async (req: Request, res: Response) => {
        // eslint-disable-next-line no-console
        await countapi.visits('tonstone.com').then(async (result) => {
          const { value } = result;
          await saveVisitors(Number(value));
        });
        res.status(200).send('This url has been visited');
      });

    this.app.route('/visitorsCount')
      .get(async (req: Request, res: Response) => {
        const visitor = await getVisitors();
        const { count } = visitor[0];

        res.status(200).send(`Tom website has been visited ${count} times`);
      });

    return this.app;
  }
}
