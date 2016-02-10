export default {
  go({FlowRouter}, destination) {
    console.log('destination: ', destination)
    if (!destination) {
      destination = '/';
    }
      FlowRouter.go(destination);
  }
};
