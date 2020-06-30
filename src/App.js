import React, { useState } from "react";
import "./styles.css";
import { FormattedMessage } from "react-intl";
import { LOCALES, I18nProvider } from "./i18n";
import t from './i18n/translate';
import Input from './components/input'

export default function App() {
  const [locale, setLocale] = useState(LOCALES['EN'])

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <h1>{t('hello')} React</h1>
        <h2>{t('edit', { file: 'App.js' })}</h2>
        <Input />
        <FormattedMessage id="hello" defaultMessage="search">
          {placeholder =>
            <input placeholder={placeholder} />
          }
        </FormattedMessage>
        <br />
        <button onClick={() => setLocale(LOCALES['EN'])}>English</button>
        <button onClick={() => setLocale(LOCALES['FR'])}>French</button>
        <button onClick={() => setLocale(LOCALES['DE'])}>German</button>
      </div>
    </I18nProvider>
  );
}
