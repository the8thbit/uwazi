import {
  DuplicatedRelationshipTypeError,
  MissingRelationshipTypeError,
  RelationshipTypeError,
} from '../errors.js';

describe('relationship type errors', () => {
  it('should create RelationshipTypeError', () => {
    const error = new RelationshipTypeError('base error');

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(RelationshipTypeError);
    expect(error.message).toBe('base error');
  });

  it('should create MissingRelationshipTypeError', () => {
    const error = new MissingRelationshipTypeError('missing');

    expect(error).toBeInstanceOf(RelationshipTypeError);
    expect(error).toBeInstanceOf(MissingRelationshipTypeError);
    expect(error.message).toBe('missing');
  });

  it('should classify a duplicated relationship type as a conflict', () => {
    const error = new DuplicatedRelationshipTypeError();

    expect(error.message).toBe('duplicated_entry');
    expect(error.code).toBe('relationship_type.duplicated_entry');
    expect(error.category).toBe('conflict');
  });
});
