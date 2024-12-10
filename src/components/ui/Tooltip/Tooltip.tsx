import ReactDOM from 'react-dom';
import { CSSProperties, useEffect, useState } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  customRef: any;
  visible: boolean;
  label: string;
  attributes: any;
  customStyles: CSSProperties;
}

export const Tooltip = ({
  customRef,
  label,
  visible,
  customStyles,
  attributes,
}: TooltipProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!visible) {
    return null;
  }

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        ref={customRef}
        className={styles.component}
        style={customStyles}
        {...attributes}
      >
        <div className={styles.label}>{label}</div>
      </div>,
      document.getElementById('tooltip-root') as HTMLElement
    );
  }
  return null;
};
