import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.wrapper}>
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
  )
}

export default Navbar