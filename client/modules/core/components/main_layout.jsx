import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <AppBar
          title="Mantra Voice"
          showMenuIconButton={false}
          children={<Navigation />}
      />

    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
    </footer>
  </div>
);

export default Layout;
