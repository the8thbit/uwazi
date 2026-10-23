/* eslint-disable max-classes-per-file */
import { ConflictError } from '../error/ConflictError.js';

class RelationshipTypeError extends Error {}

class MissingRelationshipTypeError extends RelationshipTypeError {}

class DuplicatedRelationshipTypeError extends ConflictError {
  constructor() {
    super('duplicated_entry', 'relationship_type.duplicated_entry');
  }
}

export { RelationshipTypeError, MissingRelationshipTypeError, DuplicatedRelationshipTypeError };
