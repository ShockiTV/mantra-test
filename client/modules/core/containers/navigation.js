import Navigation from '../components/navigation.jsx';
import {useDeps, composeWithTracker, composeAll, compose} from 'mantra-core';


//export const composer = ({context}, onData) => {
//  const {FlowRouter, LocalState} = context();
//  const currentRoute = FlowRouter.current().route.name;
//  console.log("route local state:", LocalState.get("ROUTE_LIST"));
//  const routeList = _.chain(LocalState.get("ROUTE_LIST"))
//    .filter( route => (!! route.options.navigation))
//    .sortBy( route => route.options.navigation.position)
//    .value();
//  console.log("route list: ", routeList);
//  onData(null, {currentRoute, routeList});
//};
//
export const depsMapper = (context, actions) => ({
  go: actions.navigation.go,
  context: () => context
});
//
//export default composeAll(
//    composeWithTracker(composer),
//    useDeps(depsMapper)
//)(Navigation);


export const composer = ({context}, onData) => {
  const {NavigationStore} = context();
  const filterRoutes = (routeList) => {
    return _.chain(routeList)
        .filter( route => (!! route.options.navigation))
        .sortBy( route => route.options.navigation.position)
        .value();
  }

  onData(null, {routeList: filterRoutes(NavigationStore.getState().routeList)});
  return NavigationStore.subscribe(() => {
    onData(null, {routeList: filterRoutes(NavigationStore.getState().routeList)})
  });
};

export default composeAll(
    compose(composer),
    useDeps(depsMapper)
)(Navigation);


