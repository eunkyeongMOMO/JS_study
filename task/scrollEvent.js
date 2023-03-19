const move_cont = (cont)=>{
    document.querySelector('.'+cont).scrollIntoView(true);
}

const VideoSample = document.querySelector('.video01');
const VideoSampleHeight = VideoSample.offsetTop-300;
console.log(VideoSampleHeight);
window.addEventListener('scroll', ()=>{
    VideoSample.play();
})