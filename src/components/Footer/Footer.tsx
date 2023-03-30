import { GLOBAL_STYLES } from '../../constants/Constants';
import styles from './Footer.module.scss';
import logoRS from './../../assets/rs-school-js.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={GLOBAL_STYLES.CONTAINER}>
      <div className={styles.footer__wrapper}>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <img src={logoRS} alt="Rolling Scopes School" className={styles.footer__logo} />
        </a>
        <div>
          <span>2023</span>
          <a
            href="https://github.com/BondPV"
            target="_blank"
            className={styles.footer__github}
            rel="noreferrer"
          >
            BondPV
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
