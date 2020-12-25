let jsonServer = "http://localhost:3000/message";
function getPost(callback) {
  fetch(jsonServer)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function start() {
  getPost(function (course) {
    render(course);
  });
}
function render(course) {
  let postList = course;
}
