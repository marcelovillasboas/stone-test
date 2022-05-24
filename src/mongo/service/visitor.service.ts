import { IVisitor, VisitorType } from '../models/types';
import { IVisitorsRepository, VisitorsRepository } from '../repositories';
import createVisitor from '../models/visitor.model';

// eslint-disable-next-line import/prefer-default-export
export class VisitorService {
  private repository: IVisitorsRepository;

  constructor() {
    this.repository = new VisitorsRepository();
  }

  async save(data: VisitorType): Promise<void> {
    const visitor = createVisitor(data);
    await this.repository.saveToVisitorsRepository(visitor);
  }

  async get(id?: string): Promise<IVisitor[]> {
    const visitor = await this.repository.getFromVisitorsRepository(id);
    return visitor;
  }
}
