import { RESET_ERRORS } from '../constants';
import { getActionCreator } from './helpers';

// Sync
export const resetErrors = getActionCreator(RESET_ERRORS);
