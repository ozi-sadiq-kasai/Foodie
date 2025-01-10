import styles from './SmallNav.module.scss'
import { Link } from 'react-router-dom'

const SmallNav = () => {
  return (
<ul className={styles.wrapper}>
    <li>
     <Link className={styles['wrapper__Link']} to='/appetisers'>APPETISERS</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/starters'>STARTERS</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/main'>MAIN COURSES</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/side'>SIDE DISHES</Link>
    </li>
    <li>
     <Link className={styles['wrapper__Link']} to='/dessert'>DESSERTS</Link>
    </li>
  </ul>
  )
}

export default SmallNav