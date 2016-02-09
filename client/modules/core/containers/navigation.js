import Navigation from '../components/navigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const currentRoute = LocalState.get('CURRENT_ROUTE');
  const testNav = "asdf";
  onData(null, {currentRoute, testNav});
};

export const depsMapper = (context, actions) => ({
  go: actions.navigation.go,
  context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Navigation);
