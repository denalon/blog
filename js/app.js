// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".qrcode").hover(function() {
    $("#qrcode").show()
},
function() {
    $("#qrcode").hide()
});


$(function(){
    $('.zoomify').zoomify();
});




const root = document.documentElement;
const canvas = document.createElement('canvas');

function draw() {
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const ctx = canvas.getContext('2d');

  // https://twitter.com/aemkei/status/1378106731386040322
  // https://twitter.com/CodigoFalado/status/1379450845599784962
  for (let x = 0; x < 256; x++) {
    for (let y = 0; y < 256; y++) {
      if (((x - 128) * 64) % (y - 128)) {
        ctx.fillStyle =
          y < 128
            ? `hsla(${y}, 100%, 50%, ${y / 256 / 2})`
            : `hsla(${y}, 100%, 50%, ${(256 - y) / 256 / 2})`;
        ctx.fillRect(
          x * 4 * (width / 1024),
          y * 4 * (height / 1024),
          4 * (width / 1024),
          4 * (height / 1024)
        );
      }
    }
  }

  root.style.setProperty('--bg-url', `url(${canvas.toDataURL()})`);
}

window.addEventListener('DOMContentLoaded', () => {
  draw();
});

window.addEventListener('resize', () => {
  draw();
});
