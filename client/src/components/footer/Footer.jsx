import styles from './Footer.module.scss'    

const Footer = () => {
    const contacts = ['Explore','Contact','Help&Feedback']
    const icons = ['thread','facebook','instagram']

    
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.footer__links}`}>
            <div className={styles['footer__contact']} >
            {contacts.map((contact)=>(
                    <ul key={contact}>
                        <li>{contact}</li>
                    </ul>
                ))}  
            </div>
            <div className={styles['footer__icon']}>
                {icons.map((icon)=>(
                    <ul key={icon}>
                        <li>{icon}</li>
                    </ul>
                ))}   

            </div>
        
        </div>
    <p className={styles['footer__trademark']}>tradkealefk</p>
    </footer>
  )
}

export default Footer