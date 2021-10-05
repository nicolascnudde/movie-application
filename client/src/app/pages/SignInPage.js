import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { useAuth } from '../contexts/firebase/auth.context';
import BaseLayout from '../layouts/BaseLayout';
import button from '../components/button/Button.module.scss';
import styles from './SignInPage.module.scss';

const SignInPage = ({children}) => {
  const history = useHistory();
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.goBack();
    }    
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <BaseLayout>
      <div className={styles.container}>
        {!!currentUser === false &&
          <>
            <h1>Login</h1>

            <form className={styles.form} onSubmit={(ev) => handleSubmit(ev)}>
              <div className={styles.formGroup}>
                <label className={styles.formGroupLabel} htmlFor="txtEmail">Email</label>
                
                <input type="email" className={styles.formGroupText} id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
                
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formGroupLabel} htmlFor="txtPassword">Password</label>
                
                <input type="password" className={styles.formGroupText} id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
              </div>

              <button className={button.btnPrimary} type="submit">Sign In</button>
            </form>
          </>
        }

        {!!currentUser === true &&
          <div>
            <img src={currentUser.photoURL} alt={currentUser.email} />
            
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        }
      </div>
    </BaseLayout>
  );
};

export default SignInPage;
