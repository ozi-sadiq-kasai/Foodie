import styles from './Login.module.scss';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { GoUnlock } from 'react-icons/go';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import lemons from '../../assets/lemons.png';
import salad from '../../assets/salad.png';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

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
        `${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      console.log('Login successfull:', response.data);
      navigate('/');
    } catch (error) {
      console.log('Registration failed:', error);
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
        <form onSubmit={handleSubmit} className={styles['wrapper__form']}>
        <h2>Login</h2>
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
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
        <p>don&apos;t have an Account? <Link to={'/register'}>Register</Link></p>
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
