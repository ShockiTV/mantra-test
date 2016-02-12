import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Navigation extends React.Component {
  render() {
    //console.log("current route", this.props.currentRoute);
    const {currentRoute, routeList} = this.props;
    return (
      <div>
        <b> Navigation: </b>
        <Tabs
          value={currentRoute}
        >
          {routeList.map(route => (
              <Tab
                key={route.name}
                value={route.name}
                label={route.options.navigation.label}
                onClick={this.changeRoute.bind(this, route.path)}
              />
          ))}
        </Tabs>
      </div>
    )
  }

  changeRoute(newRoute, event, secretArg) {
    const {go} = this.props;
    console.log("event: ", event);
    console.log("secret arg: ", secretArg);
    go(newRoute);
  }

}

export default Navigation;
