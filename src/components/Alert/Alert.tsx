import React from 'react';
import css from 'classnames';
import styles from './Alert.module.scss';

interface IAlertProps {
  message: string;
  isShow: boolean;
  setIsShow: (show: boolean) => void;
}

class Alert extends React.Component<IAlertProps, {}> {
  private handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    this.props.setIsShow(false);
  };

  public render() {
    if (this.props.isShow) {
      setTimeout(() => this.props.setIsShow(false), 1000);
    }

    return (
      <div className={css(styles.alert, !this.props.isShow && styles.hide)}>
        <span className={styles.close_btn} onClick={this.handleClose}>
          &times;
        </span>
        {this.props.message}
      </div>
    );
  }
}

export { Alert };
