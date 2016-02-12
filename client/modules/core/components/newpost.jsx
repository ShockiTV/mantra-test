import React from 'react';
import CSSModules from 'react-css-modules';
import styles from "./newpost.mss";
import RaisedButton from 'material-ui/lib/raised-button';

class NewPost extends React.Component {
  render() {
    console.log("error2: ", this.props.error2);
    console.log("styles", this.props.styles);
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p styleName='create-error'>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <RaisedButton label="Add New" onClick={this.createPost.bind(this)}/>
      </div>
    );
  }

  createPost() {
    console.log("newpost", this);
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default CSSModules(NewPost, styles);
