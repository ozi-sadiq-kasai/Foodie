import styles from './Home.module.scss';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom'
import breakfast from '../../assets/breakfast.png'
import macaroni from '../../assets/macaroni.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className={styles.wrapper}>
      <nav className={styles['wrapper__nav']}>
        <ul>
          <li className={styles['wrapper__logo']}>
            <h1>
              F<span>OO</span>DIE
            </h1>
          </li>
          <li className={styles['wrapper__search-wrapper']}>
            <div className={styles['wrapper__search-wrapper-div']}>
              <div className={styles['wrapper__search-wrapper-input']}>
                <CiSearch />
                <input type='text' placeholder='search recipes' />
              </div>
              <button className={`${styles['wrapper__search-btn']} btn`}>
                Submit
              </button>
            </div>
          </li>
          <li className={styles['wrapper__login']}>
            <button className={`${styles['wrapper__login-btn']} btn`}
            onClick={()=>navigate('/Login')}>login</button>
          </li>
        </ul>
      </nav>
      <img src={breakfast} alt="breakfast bowl" className={styles['wrapper__image-breakfast']} />
      <img src={macaroni} alt="macaroni" className={styles['wrapper__image']}/>
      <h2>Health Requires Healthy Food</h2>
      <p>Manage your recipes the easy way</p>
      <p>Share recipes with your friends and discover new ones. More than <span>15,000 recipes</span> from around the world!</p>
    </main>
  );
};

export default Home;
