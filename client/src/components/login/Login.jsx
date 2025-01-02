import styles from './Login.module.scss';
import { GoPerson } from 'react-icons/go';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { GoUnlock } from 'react-icons/go';
import { useState } from 'react';
import lemons from '../../assets/lemons.png';
import salad from '../../assets/salad.png';

const Login = () => {
  const [focus, setFocus] = useState({
    username: false,
    email: false,
    password: false,
  });
  const handleFocus = (field) => {
    setFocus((prevFocus) => ({
      ...prevFocus,
      [field]: true,
    }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocus((prevFocus) => ({
        ...prevFocus,
        [field]: false,
      }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        f<span>oo</span>die
      </h1>
      <img
        src={salad}
        alt='salad bowl'
        className={styles['wrapper__salad-img']}
      />
      <p className={styles['wrapper__recipes']}>More than <span>15,000 recipes</span>from around the world!</p>
        <form action='#' className={styles['wrapper__form']}>
          <div className={styles['wrapper__input-box']}>
            <label
              htmlFor='username'
              className={
                focus.username || document.getElementById('username')?.value
                  ? styles['focused']
                  : ''
              }>
              Username
            </label>
            <input
              type='text'
              id='username'
              required
              onFocus={() => handleFocus('username')}
              onBlur={(e) => handleBlur('username', e.target.value)}
            />
            <span
              className={
                focus.username || document.getElementById('username')?.value
                  ? styles['focused']
                  : ''
              }>
              <GoPerson />
            </span>
          </div>
          <div className={styles['wrapper__input-box']}>
            <label
              htmlFor='email'
              className={
                focus.email || document.getElementById('email')?.value
                  ? styles['focused']
                  : ''
              }>
              Email
            </label>
            <input
              type='email'
              id='email'
              required
              onFocus={() => handleFocus('email')}
              onBlur={(e) => handleBlur('email', e.target.value)}
            />
            <span
              className={
                focus.email || document.getElementById('email')?.value
                  ? styles['focused']
                  : ''
              }>
              <MdOutlineAlternateEmail />
            </span>
          </div>
          <div className={styles['wrapper__input-box']}>
            <label
              htmlFor='password'
              className={
                focus.password || document.getElementById('password')?.value
                  ? styles['focused']
                  : ''
              }>
              Password
            </label>
            <input
              type='password'
              id='password'
              required
              onFocus={() => handleFocus('password')}
              onBlur={(e) => handleBlur('password', e.target.value)}
            />
            <span
              className={
                focus.password || document.getElementById('password')?.value
                  ? styles['focused']
                  : ''
              }>
              <GoUnlock />
            </span>
          </div>
          <p className={styles['wrapper__terms']}>
            By clicking on &apos;Create Account&apos; you are agreeing to the{' '}
            <span> Terms of Service </span>and the<span> Privacy Policy </span>
          </p>
          <button className='btn'>Login</button>
          <div className={styles['wrapper__google']}>
            <span>Join with</span>
          </div>
          <a>
            <FcGoogle size={24} className={styles['wrapper__icon']} />
          </a>
        </form>
      <img
        src={lemons}
        alt='lemons'
        className={styles['wrapper__lemons-img']}
      />
    </div>
  );
};

export default Login;
