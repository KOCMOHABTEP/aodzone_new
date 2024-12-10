import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  secondary?: boolean;
  buttonClassName?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  buttonClassName,
  disabled,
  secondary,
  onClick,
}: ButtonProps) => {
  const buttonClassNameStyles = cn(styles.button, buttonClassName, {
    [styles.buttonSecondary]: secondary,
    [styles.buttonDisabled]: disabled,
  });

  return (
    <button
      type="button"
      className={buttonClassNameStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
