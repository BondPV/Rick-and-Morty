import styles from './Preloader.module.scss';

const Preloader = (): JSX.Element => (
  <div className={styles.progress}>
    <div className={styles.indeterminate}></div>
  </div>
);

export { Preloader };
