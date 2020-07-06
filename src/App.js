import React, { useState } from "react";
import "./styles.css";
import { FormattedMessage } from "react-intl";
import { LOCALES, I18nProvider } from "./i18n";
import t from './i18n/translate';
import Input from './components/input'

export default function App() {
  const language = localStorage.getItem('lng') || LOCALES['EN']
  const [locale, setLocale] = useState(LOCALES[language])

  const changeLng = async (lng) => {
    await localStorage.setItem('lng', lng);
    setLocale(LOCALES[localStorage.getItem('lng')])
  }

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
        <button onClick={() => changeLng('EN')}>English</button>
        <button onClick={() => changeLng('FR')}>French</button>
        <button onClick={() =>changeLng('DE')}>German</button>
      </div>
    </I18nProvider>
  );
}
