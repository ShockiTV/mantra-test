import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Navigation extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <b> Navigation: </b>
        <Tabs>
          <Tab label="Home" onClick={this.changeRoute.bind(this, "/")}/>
          <Tab label="New Post" onClick={this.changeRoute.bind(this, "/new-post")}/>
        </Tabs>
      </div>
    )
  }

  changeRoute(newRoute) {
    const {go} = this.props;
    go(newRoute);
  }

}

export default Navigation;
