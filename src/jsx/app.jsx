var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello hoge React, world! I am a CommentBox.
      </div>
    );
  }
});

window.onload = function() {
  React.render(
      <CommentBox />,
      document.getElementById('app-container')
  );
}
