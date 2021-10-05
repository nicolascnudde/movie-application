import {
  AuthProvider,
  FirebaseProvider,
  FirestoreProvider
} from './contexts/firebase';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";


import * as Routes from './routes';

import {
  HomePage,
  MoviesPage,
  MovieDetailPage,
  ShowsPage,
  ShowDetailPage,
  PersonDetailPage,
  SearchPage,
  SignInPage,
} from './pages'

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={''}>
              <Switch>
                <Redirect from={Routes.HOME} to={Routes.LANDING} />
                <Route exact path={Routes.LANDING}>
                    <HomePage />
                </Route>
                <Route exact path={Routes.MOVIES}>
                    <MoviesPage />
                </Route>
                <Route exact path={Routes.MOVIE}>
                    <MovieDetailPage />
                </Route>
                <Route exact path={Routes.SHOWS}>
                    <ShowsPage />
                </Route>
                <Route exact path={Routes.SHOW}>
                    <ShowDetailPage />
                </Route>
                <Route exact path={Routes.PERSON}>
                    <PersonDetailPage />
                </Route>
                <Route exact path={Routes.SEARCH}>
                    <SearchPage />
                </Route>
                <Route exact path={Routes.AUTH_SIGN_IN}>
                    <SignInPage />
                </Route>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
