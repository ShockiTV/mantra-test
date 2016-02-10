import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter, LocalState}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  LocalState.set("ROUTE_LIST",[]);

  FlowRouter.onRouteRegister( (route) => {
       LocalState.set("ROUTE_LIST", [ ...LocalState.get("ROUTE_LIST"), route]);
    }
  )

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    },
    navigation: {
      label: "Home",
      position: 0
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    },
    navigation: {
      label: "New Post",
      position: 1
    }
  });
}
