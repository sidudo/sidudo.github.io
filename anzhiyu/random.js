var posts=["2023/04/19/UseHexo/","2023/04/19/hello-world/","2023/04/19/LOL/LOL BP/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};