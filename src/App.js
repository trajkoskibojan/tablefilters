import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from 'theme/theme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ProjectManager from 'containers/Home/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ProjectManager />
      <Footer />
    </ThemeProvider>
  );
};
export default App;
