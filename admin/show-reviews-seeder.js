import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

(async () => {
  // Get all users
  let users = await auth.listUsers(1000, undefined);

  // Get all shows
  let showsRef = db.collection('shows');
  const query = showsRef.orderBy('createdAt', 'desc');
  const querySnapshot = await query.get();
  const shows = querySnapshot.docs.map((doc) => {
    return {
      uid: doc.id,
      ...doc.data()
    }
  });

  shows.forEach(show => {
    let reviewsRef = db.collection('shows')
    .doc(show.uid)
    .collection('reviews');
    // Make reviews
    let numReviews = generateValueBetweenMinAndMax(0, 100), usersCopy = JSON.parse(JSON.stringify(users.users)), sumRatings = 0, userStart = null, rating = 0, userId = 0;
    for (let i = 0; i < numReviews;i++) {
      userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
      userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      rating = generateValueBetweenMinAndMax(1, 5);
      reviewsRef.doc(userId).set({
        title: faker.lorem.words(),
        review: faker.lorem.sentences(),
        rating: rating,
        ...generateTimestamps()
      });
      sumRatings += rating;
    }

    showsRef
      .doc(show.uid)
      .update({
        numReviews: numReviews,
        avgRating: sumRatings/numReviews,
        modifiedAt: Date.now(),
    });  
  });

})();