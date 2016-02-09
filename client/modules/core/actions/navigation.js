export default {
  go({FlowRouter, LocalState}, destination) {
    console.log('destination: ', destination)
    if (!destination) {
      destination = '/';
    }
      LocalState.set('CURRENT_ROUTE', destination);
      console.log('setting current route');
      FlowRouter.go(destination);
  }
};
