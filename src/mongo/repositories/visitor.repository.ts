import { VisitorModel } from '../models/schema';
import { IVisitor, VisitorType } from '../models/types';

export interface IVisitorsRepository {
    // eslint-disable-next-line no-unused-vars
    saveToVisitorsRepository(user: VisitorType): Promise<void>;
    // eslint-disable-next-line no-unused-vars
    getFromVisitorsRepository(userId?: string): Promise<IVisitor[]>
}

export class VisitorsRepository implements IVisitorsRepository {
  // eslint-disable-next-line class-methods-use-this
  async saveToVisitorsRepository(visitor: VisitorType): Promise<void> {
    await VisitorModel.findOneAndUpdate(
      {
      // eslint-disable-next-line no-underscore-dangle
        _id: visitor._id,
      },
      visitor,
      { upsert: true },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  async getFromVisitorsRepository(id?: string) {
    const user = await VisitorModel.find({ _id: id });
    return user;
  }
}
