import classNames from "classnames"
import styles from './Button.module.css'

const Button = (props) => {
  return (
      <button className={
        classNames(
            styles.button,
            {
            [styles.light]: props.variant === 'light',
            [styles.dark]: props.variant === 'dark',
            [styles.big]: props.type === 'big',
            [styles.disabled]: props.isDisabled,
            },
            props.className 
            )
      }>{props.text}</button>
  )
}

export default Button
