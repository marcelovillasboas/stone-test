import cors from 'cors';
import express from 'express';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import './mongo/database/mongo.database';

const app: express.Application = express();
const port = process.env.PORT || 3000;
const routes: Array<CommonRoutesConfig> = [];

app.use(cors());
routes.push(new UsersRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

app.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    // eslint-disable-next-line no-console
    console.log(`Routes configured for ${route.getName}`);
    // eslint-disable-next-line no-console
    console.log(runningMessage);
  });
});
