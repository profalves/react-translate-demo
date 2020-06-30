import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locales";
import messages from "./translations";

export const Provider = ({ children, locale = LOCALES.EN }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);


