var posts=["2025/04/09/hello-world/","1919/03/01/孔乙己/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };