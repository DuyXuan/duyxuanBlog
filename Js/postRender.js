let jsonServer = "http://localhost:3000/post";
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

  for (const post of postList) {
    let newPost = document.createElement("div");
    newPost.classList.add("col");
    newPost.classList.add("l-4");
    newPost.innerHTML = `<div class="post-detail"> <a href="">  
   <div class="post-detail__image">
   <img src="" alt="" />
   </div>
   <div class="post-detail__tittle"><p>abc</p></div>
   <div class="post-detail__desc">
   <p>
   </p>
   </div>
   </a> </div>`;
    document.querySelector(".news__top3-post .row").appendChild(newPost);
  }

  var postImage = document.querySelectorAll(".post-detail__image > img");
  var postDescription = document.querySelectorAll(".post-detail__desc >p");
  var postTittle = document.querySelectorAll(".post-detail__tittle>p");
  for (var i = 0; i < postList.length; i++) {
    postImage[i].src = postList[i].imageUrl;
    postDescription[i].innerText = postList[i].description;
    postTittle[i].innerText = postList[i].tittle;
  }
}

export default {
  start,
};
