import layout from '../../layouts/BaseLayout.module.scss';
import styles from './PersonDetail.module.scss';
import useFetch from '../../hooks/useFetch';

const PersonDetail = ({ id }) => {
  const PERSON_DETAIL_API = `https://api.themoviedb.org/3/person/${id}?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;
  const PERSON_CREDITS_API = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=d14c836ebd71bd8f3f1977ad3f80d4e5`;

  const PROFILE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const [person, isLoading, error] = useFetch(PERSON_DETAIL_API);
  const [credits] = useFetch(PERSON_CREDITS_API);

  return (
    <div>
      {
        error ? <div>{error}</div> :
        isLoading || !person || !credits
        ? <div>
            <p>Loading...</p>
          </div>
        : <>
            <section className={styles.person}>
              <div className={layout.wrapper}>
                <div className={styles.heroContainer}>
                  <div className={styles.imageContainer}>
                    <img src={PROFILE_IMG_PATH + person.profile_path} alt={person.name} />
                  </div>
                
                  <div className={styles.textContainer}>
                    <h1>{person.name}</h1>

                    <p className={styles.textOverview}>{person.biography}</p>

                    <ul className={styles.personDetailsList}>
                      <li className={styles.personDetailsListItem}>
                        <div className={styles.leftPane}>
                          <p>Known for</p>
                        </div>
                        
                        <div className={styles.rightPane}>
                          <p>{person.known_for_department}</p>
                        </div>
                      </li>

                      <li className={styles.personDetailsListItem}>
                        <div className={styles.leftPane}>
                          <p>Date of birth</p>
                        </div>
                        
                        <div className={styles.rightPane}>
                          <p>{person.birthday}</p>
                        </div>
                      </li>

                      <li className={styles.personDetailsListItem}>
                        <div className={styles.leftPane}>
                          <p>Place of birth</p>
                        </div>
                        
                        <div className={styles.rightPane}>
                          <p>{person.place_of_birth}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.credits}>
              <div className={layout.wrapper}>
                <h2>Credits</h2>
                
                <ul className={styles.creditsList}>
                  {credits.cast.map(c => {
                    return (
                      <li key={c.credit_id} className={styles.creditsListItem}>
                        <img src={c.poster_path ? PROFILE_IMG_PATH + c.poster_path : "/images/poster_fallback.png"} alt={c.title ? c.title : c.name}/>
                      
                        <p>{c.title ? c.title : c.name}</p>

                        <small>as: {c.character}</small>
                      </li>
                    )}
                  )}
                </ul>
              </div>
            </section>
        </>
      }
    </div>
  )
}

export default PersonDetail;
