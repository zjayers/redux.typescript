import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRepositories } from '../store';

export const useActions = () => bindActionCreators({ searchRepositories }, useDispatch());
