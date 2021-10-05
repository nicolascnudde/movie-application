import React, { useContext } from 'react';
import 'firebase/firestore';
// import { v4 as uuidv4 } from 'uuid';

import { useFirebase } from './firebase.context';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getMovies = async () => {
    const query = db.collection('movies')
      .orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const movies = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return movies;
  };

  const getMovieReviews = async (movieId) => {
    const query = db.collection('movies').doc(movieId).collection('reviews').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const projectReviews = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return projectReviews;
  };

  return (
    <FirestoreContext.Provider value={{getMovies, getMovieReviews}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};