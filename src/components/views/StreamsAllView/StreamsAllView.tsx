import { StreamItem } from '@/components/views/StreamView/StreamItem';
import { StreamsFilter } from '@/components/views/StreamView/StreamsFilter';
import { Pagination } from '@/components/ui/Pagination';
import styles from './StreamsAllView.module.scss';

export const StreamsAllView = () => {
  const streamList = [
    {
      nameGame: 'World plane 3',
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      numbersViews: 32,
      src: 'https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg',
    },
    {
      nameGame: 'World plane 3',
      title: 'Играем в игру на выживание',
      nickName: 'ЛУПА',
      numbersViews: 356,
      src: 'https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg',
    },
    {
      nameGame: 'World plane 3',
      title: 'Играем в игру на выживание',
      nickName: 'Пупа',
      numbersViews: 156,
      src: 'https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg',
    },
    {
      title: 'Играем в игру на выживание',
      nameGame: 'World plane 3',
      nickName: 'ПУПА',
      numbersViews: 156,
      src: 'https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 156,
      src: 'https://cdn.igromania.ru/mnt/news/1/0/5/1/2/6/95631/748015063a88962f_1920xH.jpg',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 785,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 785,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 785,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 785,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU',
    },
    {
      title: 'Играем в игру на выживание',
      nickName: 'КОСМОНАВТ',
      nameGame: 'World plane 3',
      numbersViews: 785,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU',
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>Список всех стримов</h1>
      <StreamsFilter />
      <div className={styles.list}>
        {streamList.map(
          ({ title, nickName, nameGame, numbersViews, src }, index) => (
            <StreamItem
              key={index}
              nameGame={nameGame}
              title={title}
              nickName={nickName}
              numbersViews={numbersViews}
              src={src}
            />
          )
        )}
      </div>
      {/* <div className={styles.pagination}> */}
      {/*    <Pagination pageCount={} onChangePage={} */}
      {/* </div> */}
    </div>
  );
};
