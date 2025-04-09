
import styles from './SocialMenu.module.scss'

const SocialMenu = ({socialList}) => {
  return (
    <ul className={styles.menu}>
        {socialList.map((item, i) => {
            return <li key={i} className={styles.item}>
                <a href='#'>
                    <img src={item.src} alt={item.alt} />
                </a>
            </li>
        })}  
    </ul>
  )
}

export default SocialMenu
