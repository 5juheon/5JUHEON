const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

//포커스가 들어가면 class .focused추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//포커스가 나가면 class .focused제거
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//main visual 이미지 순차적으로 등장
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});


// 뱃지와 탑버튼------------------------------------------
const badgeEl = document.querySelector('.bagtges');
const toTopEl = document.getElementById('to-top');

/* 
document = html
window = 브라우저 창
 */
// window.addEventListener('scroll',function(){
//   console.log('scroll!');
// });

//lodash 설치 후
//lodash 문법 : _.throttle(함수, 시간밀리초)

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // console.log('scroll!');
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// -------------------------------------------------------

// 플로팅 이미지
//gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y : size,
    repeat : -1 , //몇 번 반복할지 설정, -1 무한반복
    yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 반복
    ease : Power1.easeInOut , //gsap easing
    delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);
// 유튜브

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'H5zSHFBjohE', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'H5zSHFBjohE' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
