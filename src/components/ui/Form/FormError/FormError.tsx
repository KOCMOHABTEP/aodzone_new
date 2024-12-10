import { Icon } from '@/components/ui/Icon';
import styles from './FormError.module.scss';

interface FormErrorProps {
  message?: string;
  containerStyles?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className={styles.error}>
      <Icon name="error" size={16} className={styles.errorIcon} />
      <div className={styles.errorMessage}>{message}</div>
    </div>
  );
};
