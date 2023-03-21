import React from 'react';
import { Form } from '../../components/Form/Form';
import { GLOBAL_STYLES } from '../../constants/Constants';

class FormPage extends React.Component {
  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <Form />
      </div>
    );
  }
}

export { FormPage };
