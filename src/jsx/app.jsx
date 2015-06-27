var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello React, world! I am a CommentBox.
      </div>
      <p className"hoge">
        hoge
      </p>
    );
  }
});

window.onload = function() {
  React.render(
      <CommentBox />,
      document.getElementById('app-container')
  );
}
