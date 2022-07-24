import Photos from 'pages/Photos';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Albums from './pages/Albums';

import 'assets/objects/layout.scss';
import 'assets/settings/_normalize.scss';
import {useAppDispatch} from 'hooks';
import {useEffect} from 'react';
import {fetchUsersFailure, fetchUsersSuccess} from 'redux-store';
import {getUsers} from 'utils';
import PageNotFound from 'pages/PageNotFound';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await getUsers();
        dispatch(fetchUsersSuccess(users));
      } catch (error) {
        if (error instanceof Error) dispatch(fetchUsersFailure(error));
      }
    };
    getAllUsers();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Albums />} />
        <Route path='/albums/:albumId/photos/:userId/' element={<Photos />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
