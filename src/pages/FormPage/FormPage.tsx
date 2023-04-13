import { useState } from 'react';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import { FormCards } from '../../components/FormCards/FormCards';
import { GLOBAL_STYLES } from '../../constants/Constants';
import { IFormCard } from '../../types/interfaces';

const alertMessage = 'Card created successfully';

const FormPage = (): JSX.Element => {
  const [cards, setCards] = useState<IFormCard[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const addCard = (card: IFormCard): void => {
    setCards([...cards, card]);
  };

  const handleAlert = (show: boolean): void => setShowAlert(show);

  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Form addCard={addCard} handleAlert={handleAlert} />
      {showAlert && <Alert message={alertMessage} isShow={showAlert} setIsShow={handleAlert} />}
      <FormCards cards={cards} />
    </div>
  );
};

export { FormPage };
