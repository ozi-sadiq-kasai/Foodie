import styles from './Home.module.scss';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import macaroni from '../../assets/macaroni.png';
import Explore from '../../components/exploreRecipe/Explore'

const Home = () => {
  const navigate = useNavigate();

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
                Search
              </button>
            </div>
          </li>
          <li className={styles['wrapper__login']}>
            <button
              className={`${styles['wrapper__login-btn']} btn`}
              onClick={() => navigate('/Login')}>
              login
            </button>
          </li>
        </ul>
      </nav>
      <img
        src={macaroni}
        alt='macaroni'
        className={styles['wrapper__image-macaroni']}
      />
      <div className={styles['wrapper__content-div']}>
        <div className={styles['wrapper__content']}>
          <h2>
            Health Requires <br />
            Healthy Food
          </h2>
          <p className={styles['wrapper__content-manageRecipes']}>Manage your recipes the easy way</p>
          <p className={styles['wrapper__content-shareRecipes']}>
            Share recipes with your friends and discover new ones. More than 
            <span> 15,000 recipes</span> from around the world!
          </p>
          <button className={`${styles['wrapper__content-btn']} btn`}>ADD RECIPES</button>
        </div>
      </div>
      <div className={styles['wrapper__explore-div']}>
      <Explore />
      </div>
    </main>
  );
};

export default Home;
