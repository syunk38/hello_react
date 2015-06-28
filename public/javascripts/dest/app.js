var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello hoge React, world! I am a CommentBox."
      )
    );
  }
});

window.onload = function() {
  React.render(
      React.createElement(CommentBox, null),
      document.getElementById('app-container')
  );
}

//# sourceMappingURL=app.js.map