const move_cont = (cont)=>{
    document.querySelector('.'+cont).scrollIntoView(true);
}

const VideoSample = document.querySelector('.video01');
const VideoSampleHeight = VideoSample.offsetTop-500;
console.log(VideoSampleHeight);

window.addEventListener('scroll', ()=>{
console.log(window.scrollY);
if(window.scrollY>=VideoSampleHeight){
VideoSample.play();
}
})