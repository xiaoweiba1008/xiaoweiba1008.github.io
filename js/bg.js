document.querySelector("#scroll-down").style.zIndex="1"
let header = document.querySelector("#page-header")
header.style.overflow="hidden"
// let video = document.createElement("video")
// video.width="99%"
// video.loop = "loop"
// video.autoplay="autoplay"
// video.src="/images/bg.mp4"
// video.muted="muted"
// header.appendChild(video)
// video.play()


// 使用模板字符串和insertAdjacentHTML构建并插入HTML
const template = `
<video width="100%" loop autoplay muted src="/images/bg.mp4"></video>
`;
header.insertAdjacentHTML('beforeend', template); // 'beforeend' 表示在body的末尾插入