export interface QueryType {
  page: number;
  limit: number;
  search?: string;
  filters: string;
  sort: string;
}

export const defaultQuery: QueryType = {
  page: 1,
  limit: 10,
  search: '',
  filters: '',
  sort: '',
};
