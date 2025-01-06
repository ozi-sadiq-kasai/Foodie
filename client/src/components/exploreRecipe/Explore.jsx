import frenchBread from '../../assets/frenchBread.jpg'
import rice from '../../assets/rice.jpg'
import spaghetti from '../../assets/spaghetti.jpg'
import soup from '../../assets/soup.jpg'
import chicken from '../../assets/chicken.jpg'
import styles from './Explore.module.scss'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li >
          <img src={frenchBread} alt="" className={`${styles['wrapper__img']} img`}/>
        </li>
        <li>
          <img src={rice} alt="" className={`${styles['wrapper__img']} img`}/>
        </li>
        <li>
          <img src={spaghetti} alt="" className={`${styles['wrapper__img']} img`}/>
        </li>
        <li>
          <img src={soup} alt="" className={`${styles['wrapper__img']} img`}/>
        </li>
        <li>
          <img src={chicken} alt="" className={`${styles['wrapper__img']} img`}/>
        </li>
        <li className={styles['wrapper__link-li']}>
        <Link to="/register"className={styles['wrapper__link']}>explore recipes</Link>
        </li>
      </ul>
    </div>
  )
}

export default Explore