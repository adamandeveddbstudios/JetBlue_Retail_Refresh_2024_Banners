// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power4.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;


// myFT.on('theFeedLoaded', function(e) {
// console.log('RL1: Richload recieved feed from Base file)');
// feedLoaded(e.a);
// });
// myFT.on('RL1_play', function () {
// init();
// });

////////////////////////////////////////////////////////////////////////
// @FT1 - code block start
//VARIABLE DECLARATIONS
var default_exit = myFT.$("#default_exit");

var default_exit = myFT.$("#default_exit");
var clickTag1_url="";

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;
  myFT.dispatch('RL1_available');

})
myFT.on('theFeedLoaded', function(e) {
  myFT.dispatch('RL1_ready_to_play');
});
myFT.on('RL1_play', function () {
  init();
});
// @FT1 - code block end
///////////////////////////////////////////////////////////////////////////////////////



// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({onComplete:endTime});

  animate();
  setRollover();

}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.addLabel('frame1', 0)
  .to('#h1', 0.5, { autoAlpha: 1, ease: Power1.easeOut}, 'frame1')

  .addLabel('frame2', 'frame1+=3')
  .to(['#h2', '#terms1'], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "frame2+=0.5")

  // .addLabel('frame_END', "frame2+=4")
  // .to('#endframeBg', 0.6 ,{ top: 0, ease: Back.easeOut.config(.3)}, 'frame_END')
  // .to(['#terms1','#terms2'], 0.5, { autoAlpha: 0, ease: Power1.easeOut}, 'frame_END')

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.05, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}

// End timer
function endTime(){
  // show total banner animation time in browser console.
  var endTime = new Date()
  console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");
}

const d = new Date();
let year = d.getFullYear();
const yearElements = document.querySelectorAll("#year");

yearElements.forEach(element => {
  element.innerHTML = year;
});