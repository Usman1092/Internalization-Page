import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import i18n from "../components/I18n";


const App=({ Component, pageProps })=> {
  const router = useRouter();

  
  useEffect(() => {
    const language = localStorage.getItem('language');
    console.log(language);
    if (language) {
      i18n.changeLanguage(language);
    } else {
      const detectedLanguage = navigator.language.split('-')[0];
      const supportedLanguages = ['en', 'ar', 'ur','zh_Hant'];
      if (supportedLanguages.includes(detectedLanguage)) {
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
    });
    return () => {
      router.events.off('routeChangeComplete');
    };
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);