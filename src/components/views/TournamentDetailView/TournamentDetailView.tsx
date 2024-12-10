import { MatchesBanner } from '@/components/views/TournamentsView/TournamentBanner';
import { Layout } from '@/components/layouts/Layout/Layout';
import { Icon } from '@/components/ui/Icon';
import { TournamentTable } from '@/components/views/TournamentDetailView/TournamentTable';
import { TournamentTableTeam } from '@/components/views/TournamentDetailView/TournamentTable/TournamentTableTeam';
import { TournamentRound } from '@/components/views/TournamentsView/TournamentRound';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './TournamentDetailView.module.scss';

export const TournamentDetailView = () => {
  const slideList = [
    {
      title: 'Раунд 1',
      label: 'BEST OF1',
      data: '22АПРЕЛЯ2018',
    },
    {
      title: 'Раунд 2',
      label: 'BEST OF1',
      data: '23АПРЕЛЯ2019',
    },
    {
      title: 'Раунд 3',
      label: 'BEST OF23',
      data: '25МАЯ2015',
    },
    {
      title: 'Раунд 4',
      label: 'BEST OF20',
      data: '25МАЯ2018',
    },
    {
      title: 'Раунд 4',
      label: 'BEST OF20',
      data: '25МАЯ2018',
    },
    {
      title: 'Раунд 4',
      label: 'BEST OF20',
      data: '25МАЯ2018',
    },
    {
      title: 'Раунд 4',
      label: 'BEST OF20',
      data: '25МАЯ2018',
    },
  ];

  const roundSliderRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideContainerWidth, setSlideContainerWidth] = useState(0);

  useEffect(() => {
    const sliderPosition = roundSliderRef.current.getBoundingClientRect();
    setSlideContainerWidth(sliderPosition.width);
  }, []);

  const sliderTrackStyles = {
    transform: `translateX(-${currentSlideIndex * slideContainerWidth}px)`,
  };

  const handleArrowLeftClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prevState) => prevState - 1);
    }
  };

  const handleArrowRightClick = () => {
    if (currentSlideIndex + 1 < Math.ceil(slideList.length / 3)) {
      setCurrentSlideIndex((prevState) => prevState + 1);
    }
  };

  return (
    <Layout title="AOD Zone | Турнир">
      <MatchesBanner />
      <div className={styles.item}>
        <div onClick={handleArrowLeftClick}>
          <Icon
            name="arrow_left"
            className={cn(styles.icon, styles.icon__left)}
          />
        </div>
        <div ref={roundSliderRef} className={styles.slider}>
          <div style={sliderTrackStyles} className={styles.slider__track}>
            {slideList.map(({ title, label, data }, index) => (
              <div className={styles.slider__item} key={index}>
                <TournamentRound title={title} label={label} data={data} />
              </div>
            ))}
          </div>
        </div>

        <div onClick={handleArrowRightClick}>
          <Icon
            name="arrow_right"
            className={cn(styles.icon, styles.icon__right)}
          />
        </div>
      </div>

      <div className={styles.tournaments}>
        <TournamentTable>
          <TournamentTableTeam nameTeam="Лупа" gameScore={2} />
          <TournamentTableTeam nameTeam="Пупа" gameScore={3} />
        </TournamentTable>
        <TournamentTable>
          <TournamentTableTeam nameTeam="КОСМОНАВТ" gameScore={10} />
          <TournamentTableTeam nameTeam="Пупа" gameScore={15} />
        </TournamentTable>
        <TournamentTable>
          <TournamentTableTeam nameTeam="Лупа" gameScore={2} />
          <TournamentTableTeam nameTeam="Пупа" gameScore={3} />
        </TournamentTable>
      </div>
    </Layout>
  );
};
