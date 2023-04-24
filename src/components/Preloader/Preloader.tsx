import styles from './Preloader.module.scss';

const Preloader = (): JSX.Element => (
  <div className={styles.progress} data-testid="preloader">
    <div className={styles.indeterminate}></div>
  </div>
);

export { Preloader };
