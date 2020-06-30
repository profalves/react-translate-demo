import React from 'react';
import { injectIntl } from 'react-intl';

const Input = ({ intl }) => {
  return <input type="text" placeholder={intl.formatMessage({ id: 'hello' })} />
};

export default injectIntl(Input)