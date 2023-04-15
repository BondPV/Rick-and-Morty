import { Form } from '../../components/Form/Form';
import { FormCards } from '../../components/FormCards/FormCards';
import { GLOBAL_STYLES } from '../../constants/Constants';

const FormPage = (): JSX.Element => {
  return (
    <div className={GLOBAL_STYLES.CONTAINER}>
      <Form />
      <FormCards />
    </div>
  );
};

export { FormPage };
