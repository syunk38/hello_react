var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
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
