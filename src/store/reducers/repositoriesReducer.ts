import { Action } from '../actions';
import ActionType from '../actionTypes';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const INITIAL_STATE: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

export const repositoriesReducer = (
  state: RepositoriesState = INITIAL_STATE,
  action: Action,
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
