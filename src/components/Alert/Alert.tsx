import css from 'classnames';
import styles from './Alert.module.scss';

interface IAlertProps {
  message: string;
  isShow: boolean;
  setIsShow: (show: boolean) => void;
}

const Alert = ({ message, isShow, setIsShow }: IAlertProps): JSX.Element => {
  const handleClose = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsShow(false);
  };

  if (isShow) {
    setTimeout(() => setIsShow(false), 1000);
  }

  return (
    <div className={css(styles.alert, !isShow && styles.hide)}>
      <span className={styles.close_btn} onClick={handleClose}>
        &times;
      </span>
      {message}
    </div>
  );
};

export { Alert };
