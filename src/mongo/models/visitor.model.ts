import { VisitorType } from './types';

export default function createVisitor(visitor: VisitorType): Readonly<VisitorType> {
  // eslint-disable-next-line no-underscore-dangle
  if (!visitor._id) {
    throw new Error('VISITOR_ID_REQUIRED');
  }

  if (!visitor.count) {
    throw new Error('VISITOR_COUNT_REQUIRED');
  }

  return Object.freeze({
    // eslint-disable-next-line no-underscore-dangle
    _id: visitor._id,
    count: visitor.count,
  });
}
