import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const POPULAR_SHOWS_API = 'https://api.themoviedb.org/3/trending/tv/week?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5';

(async () => {
  // Get shows collection
  let collectionRef = db.collection('shows');

  // Create a Show
  const createShow = (show) => {
    // Add a document via show object
    const data = {
      title: show.name,
      description: show.overview,
      poster: show.poster_path,
      backdrop: show.backdrop_path,
      ...generateTimestamps()
    };

    collectionRef
    .doc((show.id).toString())
    .set(data)
    .then(documentReference => {
      console.log('Show added.');
    });
  };

  // Create shows via promises
  const createShows = async () => {
    const response = await fetch(POPULAR_SHOWS_API);
    const jsonData = await response.json();

    db.collection('counters')
      .doc('shows')
      .set({numAmount: jsonData.results.length}, {merge: true});

    const promises = [];
    jsonData.results.forEach(show => {
      promises.push(createShow(show));
    });
    return await Promise.all(promises);
  };

  await createShows();
})();