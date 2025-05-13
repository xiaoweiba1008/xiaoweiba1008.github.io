




// 保存 文件
let file = null;

let videoUrl = null;

let video = null

let flag = true



let time = new Date().getHours()

let bgName = "bg.mp4"

if (time < 8 && time >= 1) {
    bgName = "窗边的伊蕾娜（清晨）.mp4"
} else if (time < 18 && time >= 8) {
    bgName = "窗边的伊蕾娜（白天）.mp4"
} else if (time < 19 && time >= 18) {
    bgName = "窗边的伊蕾娜（黄昏）.mp4"
} else if (time >= 19 || time == 0) {
    bgName = "窗边的伊蕾娜（夜晚）.mp4"
}

console.log(bgName);




function getVideoBlob(flag, url) {
    if (flag) {

        fetch(url)
            .then(response => response.blob()) // 获取Blob对象
            .then(blob => {
                console.log('视频Blob对象已获取:', blob);
                file = blob
                // // 你可以在这里处理Blob对象，例如创建URL或使用URL.createObjectURL()进行预览等
                // 创建可用于<video>标签的URL
                //setVideoSource(video,videoUrl); // 使用上面提到的方法设置视频源


                videoUrl = URL.createObjectURL(file);
                console.log("创建videoURL完成");
                setVideoSource(video, videoUrl)



            })
            .catch(error => console.error('获取视频失败:', error));
    } else {

        console.log(file);

        videoUrl = URL.createObjectURL(file);
        console.log(videoUrl);
        setVideoSource(video, videoUrl)
    }



}






function bgrender() {
    //初始化样式
    let scroll = document.querySelector("#scroll-down")
    let header = document.querySelector("#page-header")
    if (!(scroll)) { return }
    scroll.style.zIndex = "1"
    header.style.overflow = "hidden"
    header.style.display = "flex"
    header.style.justifyContent = "center"
    header.style.alignItems = "center"
    header.style.backgroundPosition = "center"
    // let video = document.createElement("video")
    // video.width="99%"
    // video.loop = "loop"
    // video.autoplay="autoplay"
    // video.src="/images/bg.mp4"
    // video.muted="muted"
    // header.appendChild(video)
    // video.play()
    console.log("样式初始化完成");




    const template = `
    <video id="bgvideo" width="1920px" loop autoplay muted  style="transition:opacity 0.5s; opacity:0"></video>
    `;
    header.insertAdjacentHTML('beforeend', template); // 'beforeend' 表示在body的末尾插入

    video = document.querySelector("#bgvideo")

    console.log("创建video标签完成");
    //原子
    getVideoBlob(flag, "/blog/images/" + bgName)

    //github
    //getVideoBlob(flag,"/images/bg.mp4")
    flag = false









    // // 使用模板字符串和insertAdjacentHTML构建并插入HTML
    // const template = `
    // <video id="bgvideo" width="" loop autoplay muted src="/images/bg.mp4"></video>
    // `;
    // header.insertAdjacentHTML('beforeend', template); // 'beforeend' 表示在body的末尾插入


}



bgrender()





function setVideoSource(video, videoUrl) {
    // const video = document.getElementById('videoPlayer');
    // const source = document.getElementById('videoSource');


    video.src = videoUrl; // 设置视频源的URL
    video.load(); // 加载视频
    video.style.opacity = "1"
    console.log("加载视频源完成");
}



// let tab = true
// window.addEventListener('popstate', function (event) {
//     console.log("Location: " + document.location); // 输出当前URL


//     if(tab){
//         tab = false
//         this.setTimeout(()=>{
//             bgrender()
//             tab = true
//             console.log("我执行了么");

//         },100)


//     }






// });














document.addEventListener('pjax:complete', (e) => {


    const flag = (e.target.location.pathname.split("/"))[2]
    console.log(flag);

    if (flag == "page" || flag == '') {
        console.log('bg');

        bgrender()
    } 

     flag = null



})



