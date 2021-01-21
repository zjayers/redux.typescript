import axios from 'axios';
import { Dispatch } from 'redux';
import ActionType from '../actionTypes';
import { Action } from '../actions';

export const searchRepositories = (searchTerm: string) => async (
  dispatch: Dispatch<Action>,
) => {
  dispatch({ type: ActionType.SEARCH_REPOSITORIES });

  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: searchTerm,
      },
    });

    const packages = data.objects.map((object: any) => object.package.name);

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: packages,
    });
  } catch (e) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: e.message,
    });
  }
};
