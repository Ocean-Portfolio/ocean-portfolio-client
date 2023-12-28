import { TypedDocumentNode, OperationVariables } from '@apollo/client';
import { DocumentNode } from 'graphql';

declare global {
  interface QueryResourceOptions<
    TData = unknown,
    TVariables = OperationVariables,
  > {
    query: DocumentNode | TypedDocumentNode<TData, TVariables>;
    variables?: TVariables;
  }
  type QueryVariables = OperationVariables;
  interface QueryResource<TData = unknown, TVariables = OperationVariables> {
    options: QueryResourceOptions<TData, TVariables>;
    queryType: TData;
    variableType: TVariables;
  }
}
