import styles from './SmallNav.module.scss'
import { Link } from 'react-router-dom'

const SmallNav = () => {
  return (
<ul className={styles.wrapper}>
    <li>
     <Link to='#'>APPETISERS</Link>
    </li>
    <li>
     <Link to='/starters'>STARTERS</Link>
    </li>
    <li>
     <Link to='#'>MAIN COURSES</Link>
    </li>
    <li>
     <Link to='#'>SIDE DISHES</Link>
    </li>
    <li>
     <Link to='#'>DESSERTS</Link>
    </li>
  </ul>
  )
}

export default SmallNav