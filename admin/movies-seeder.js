import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5';

(async () => {
  // Get movies collection
  let collectionRef = db.collection('movies');

  // Create a Movie
  const createMovie = (movie) => {
    // Add a document via movie object
    const data = {
      title: movie.title,
      description: movie.overview,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      ...generateTimestamps()
    };

    collectionRef
    .doc((movie.id).toString())
    .set(data)
    .then(documentReference => {
      console.log('Movie added.');
    });
  };

  // Create movies via promises
  const createMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_API);
    const jsonData = await response.json();

    db.collection('counters')
      .doc('movies')
      .set({numAmount: jsonData.results.length}, {merge: true});

    const promises = [];
    jsonData.results.forEach(movie => {
      promises.push(createMovie(movie));
    });
    return await Promise.all(promises);
  };

  await createMovies();
})();