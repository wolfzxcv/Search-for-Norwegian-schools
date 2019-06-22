import React from 'react';
import SharedProvider from './contexts/SharedContext';
import GlobalStyle from './theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import Header from './components/Header';
import Search from './components/Search';
import FakeButton from './components/FakeButton';
import MainContent from './components/MainContent';
import Jobbe from './components/Jobbe';
import Footer from './components/Footer';
import ToTop from './components/ToTop';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SharedProvider>
        <GlobalStyle />
        <a name="top" />
        <Header />
        <Search />
        <FakeButton />
        <MainContent />
        <Jobbe />
        <Footer />
        <ToTop />
      </SharedProvider>
    </ThemeProvider>
  );
};

export default App;
