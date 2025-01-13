import styles from './SmallNav.module.scss'
import { Link } from 'react-router-dom'

const SmallNav = () => {
  return (
<ul className={styles.wrapper}>
    <li>
     <Link className={styles['wrapper__Link']} to='/breakfast'>BREAKFAST</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/chicken'>CHICKEN</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/vegetarian'>VEGETARIAN</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/beef'>BEEF</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/dessert'>DESSERTS</Link>
    </li>
  </ul>
  )
}

export default SmallNav