import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

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

export default NewPost;
