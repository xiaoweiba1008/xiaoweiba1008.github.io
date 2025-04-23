let header = document.querySelector("#page-header")
let video = document.createElement("video")
video.width="100%"
video.loop = "loop"
video.autoplay="autoplay"
video.src="/bg.mp4"
header.appendChild(video)