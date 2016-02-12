import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import GoogleMap from '../components/googleMap.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  console.log("composing ");
  if (Meteor.subscribe('markers.list').ready()) {
    console.log("subscribe finished");
    const markers = Collections.Markers.find().fetch();
    console.log("markers: ", markers);
    onData(null, {markers});
  }
};

//export const depsMapper = (context, actions) => ({
//  create: actions.comments.create,
//  clearErrors: actions.comments.clearErrors,
//  context: () => context
//});

export default composeAll(
  composeWithTracker(composer),
  //useDeps(depsMapper)
  useDeps()
)(GoogleMap);
