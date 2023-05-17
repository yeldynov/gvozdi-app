import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const sessionReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_sessions':
      return action.payload;
    case 'delete_session':
      return state.filter((session) => session.id !== action.payload);
    default:
      return state;
  }
};

const fetchSessions = (dispatch) => async () => {
  const response = await trackerApi.get('sessions');
  dispatch({ type: 'fetch_sessions', payload: response.data.reverse() });
};

const createSession = (dispatch) => async (duration, feedback) => {
  await trackerApi.post('/sessions', { duration, feedback });
};

const deleteSession = (dispatch) => async (id) => {
  await trackerApi.delete(`/sessions/${id}`);
  dispatch({ type: 'delete_session', payload: id });
};

export const { Provider, Context } = createDataContext(
  sessionReducer,
  { fetchSessions, createSession, deleteSession },
  []
);
