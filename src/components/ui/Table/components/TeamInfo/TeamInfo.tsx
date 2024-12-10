import { Avatar } from '@/components/ui/Avatar';

import FlagAE from '~/icons/countries/AE.svg';
import FlagAM from '~/icons/countries/AM.svg';
import FlagRU from '~/icons/countries/RU.svg';
import FlagBY from '~/icons/countries/BY.svg';
import FlagGE from '~/icons/countries/GE.svg';
import FlagKZ from '~/icons/countries/KZ.svg';
import styles from './TeamInfo.module.scss';

const COUNTRIES_LIST = {
  AE: FlagAE,
  AM: FlagAM,
  BY: FlagBY,
  GE: FlagGE,
  KZ: FlagKZ,
  RU: FlagRU,
};

interface TagProps {
  tag: string;
  title: string;
  image?: string;
  country: keyof typeof COUNTRIES_LIST;
}

export const TeamInfo = ({ tag, title, image, country }: TagProps) => {
  const CountryIcon = () => {
    const iconSize = { width: 12, height: 12 };

    return COUNTRIES_LIST[country](iconSize);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Avatar image={image} size={32} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <div className={styles.infoCountry}>
            <CountryIcon />
          </div>
          <div className={styles.tag}>{tag}</div>
        </div>
      </div>
    </div>
  );
};
