import { GoPerson } from 'react-icons/go';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { PiBowlFoodThin } from 'react-icons/pi';
import { GoUnlock } from 'react-icons/go';
import styles from './Register.module.scss';
import { useState } from 'react';
import lemons from '../../assets/lemons.png';
import salad from '../../assets/salad.png';
import axios from 'axios';
import '../../index.scss';
import {useNavigate,Link} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      console.log('Registration successfull:', response.data);
      navigate('/');
    } catch (error) {
      console.log('Registration failed:', error);
    }
  };

  const googleSubmit = (e) => {
    console.log('googleSubmit triggered');
    e.preventDefault();
    window.location.href = `${
      import.meta.env.VITE_REACT_APP_SERVER_URL
    }/auth/google`;
  };

  const items = [
    'Manage your recipes the easy way',
    'More than 15,000 recipes from around the world',
    'Share recipes with your friends and discover new ones',
    'Organize recipes by tag, share it with your friends',
    'Invite your friends to join and start sharing your recipes',
  ];



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
      <div className={styles['wrapper__form-div']}>
        <form onClick={handleSubmit} className={styles['wrapper__form']}>
          <h2>Create Account</h2>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <button className='btn' type='submit'>
            Create Account
          </button>
          <div className={styles['wrapper__google']}>
            <span>Join with</span>
          </div>

          <button
            onClick={googleSubmit}
            className={styles['wrapper__google-btn']}>
            <FcGoogle size={24} className='icon' />
          </button>
          <p>Already have an Account? <Link to={'/register'}>Login</Link></p>
        </form>
      </div>
      <div className={styles['wrapper__create']}>
        <h2>Create Account</h2>
        <p>What you will get?</p>
        {items.map((item) => (
          <ul key={item}>
            <li>
              <PiBowlFoodThin /> {item}
            </li>
          </ul>
        ))}
      </div>
      <img
        src={lemons}
        alt='lemons'
        className={styles['wrapper__lemons-img']}
      />
    </div>
  );
};

export default Register;
