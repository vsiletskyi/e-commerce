import logo from '../../assets/img/logo.svg'
import profile from '../../assets/img/profile.svg'
import cart from '../../assets/img/cart.svg'
import Button from '../Button/Button'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.logoWrap}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <div className={styles.headerSearch}>
            <form className={styles.form}>
                <input type="text" placeholder='Search...' className={styles.input}/>
                <Button text='Search' variant='dark'/>
            </form>
        </div>
        <div className={styles.headerActions}>
            <div className={styles.profile}>
                <a href='#'>
                    <img src={profile} alt="profile" />
                </a>
            </div>
            <div className={styles.cart}>
                <a href="#">
                    <img src={cart} alt="cart" />
                </a>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
