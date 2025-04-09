import SocialMenu from '../SocialMenu/SocialMenu'
import { socialList } from '../../const/listData'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialMenu socialList={socialList}/>
      <p className={styles.copyright}>© 2024 All rights reserved.</p>
    </footer>
  )
}

export default Footer
