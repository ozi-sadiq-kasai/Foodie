import styles from './Home.module.scss';
import macaroni from '../../assets/macaroni.png';
import Explore from '../../components/exploreRecipe/Explore';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {

  return (
    <main className={styles.wrapper}>
      <Navbar />
      <img
        src={macaroni}
        alt="macaroni"
        loading="lazy" 
        className={styles['wrapper__image-macaroni']}
      />
      <div className={styles['wrapper__content-div']}>
        <div className={styles['wrapper__content']}>
          <h2>
            Health Requires <br />
            Healthy Food
          </h2>
          <p className={styles['wrapper__content-manageRecipes']}>
            Manage your recipes the easy way
          </p>
          <p className={styles['wrapper__content-shareRecipes']}>
            Share recipes with your friends and discover new ones. More than
            <span> 15,000 recipes</span> from around the world!
          </p>
          <button className={`${styles['wrapper__content-btn']} btn`}>
            ADD RECIPES
          </button>
        </div>
      </div>
      <div className={styles['wrapper__explore-div']}>
        <Explore />
      </div>
    </main>
  );
};

export default Home;
