import salad1 from '../../assets/remove1.png';
import salad2 from '../../assets/lemons.png';
import styles from './Register.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { PiBowlFoodThin } from 'react-icons/pi';
import Footer from '../footer/Footer';
import axios from 'axios';
//import showToast from '../../../../utils/toastify';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/register',
        data
      );
      console.log('Response', response);
    } catch (error) {
      console.log('Error', error);
    }
    setName('');
    setEmail('');
    setPassword('');
  };
  const googleSubmit = (e) => {
    e.preventDefault();
    // window.location.href = 'http://localhost:4000/api/auth/google'; // This redirects the user to Google OAuth
  };

  const Items = [
    'Manage your recipes the easy way',
    'More than 15,000 recipes from around the world',
    'Share recipes with your friends and discover new ones',
    'Organize recipes by tag,share it with your friends',
    'Invite your friends to join and start sharing your recipes',
  ];

  return (
    <main className={styles.register}>
      <img
        src={salad1}
        alt='salad bowls'
        className={styles['register__backgroundImageTop']}
      />
      <h1 className={styles['register__Logo']}>
        F<span>OO</span>DIE
      </h1>
      <div className={styles['register__create']}>
        <div className={styles['register__content']}>
          <div className={styles['register__signup']}>

            <form onSubmit={handleSubmitForm}>
              <div className={styles['register__input-box']}>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Name</label>
              </div>
              <div className={styles['register__input-box']}>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className={styles['register__input-box']}>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>
              <button className='btn' type='submit'>
                Create Account
              </button>
            </form>
            <p className={styles['register__terms']}>
              By clicking on &apos;Create Account&apos; you are agreeing to the{' '}
              <span> Terms of Service </span>and the{' '}
              <span> Privacy Policy </span>
            </p>
            <div className={styles['register__google']}>
              <span>Join with</span>
            </div>
            <a onClick={googleSubmit}>
              <FcGoogle className={styles['register__icon']} size={24} />
            </a>
          </div>
          <div className={styles['register__info']}>
            {}
            <h2>Create Account</h2>
            <p>What you will get?</p>
            {Items.map((item) => (
              <ul key={item}>
                <li>
                  <PiBowlFoodThin /> {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <img
        src={salad2}
        alt='salad ingredients'
        className={styles['register__backgroundImageBottom']}
      />
    </main>
  );
};

export default Register;
