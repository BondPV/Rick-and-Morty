import { useState } from 'react';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import { FormCards } from '../../components/FormCards/FormCards';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { IFormCard } from '../../types/interfaces';

const alertMessage = 'Card created successfully';

const FormPage = () => {
  const [cards, setCards] = useState<IFormCard[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const addCard = (card: IFormCard) => {
    setCards([...cards, card]);
  };

  const handleAlert = (show: boolean) => {
    show ? setShowAlert(true) : setShowAlert(false);
  };

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Form card={addCard} setIsShowAlert={handleAlert} />
      {showAlert ? <Alert message={alertMessage} isShow={showAlert} setIsShow={handleAlert} /> : ''}
      <FormCards cards={cards} />
    </div>
  );
};

export { FormPage };
