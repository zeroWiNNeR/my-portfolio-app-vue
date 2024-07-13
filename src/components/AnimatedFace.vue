<template>
  <div class="animated-face">
    <div class="face-block">
      <div class="eyes-wrapper">
        <div class="eye">
          <div class="pupil"></div>
        </div>
        <div class="eye">
          <div class="pupil"></div>
        </div>
      </div>
      <div class="mouth-wrapper">
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedFace"
}

document.addEventListener('mousemove', debounce((e) => {
  let mouth = document.querySelector('.mouth'),
      pupils = document.querySelectorAll('.pupil');
  let x = e.clientX,
      y = e.clientY,
      height = window.innerHeight,
      width = window.innerWidth;

  if (y > height / 2) {
    mouth.classList.remove('-closed');
  } else {
    mouth.classList.add('-closed');
  }

  let deltaX = (x - width / 2) / width,
      deltaY = (y - height / 2) / height;

  [].forEach.call(pupils, (pupil) => {
    pupil.style.transform =
        `translateX(${deltaX * 25}px)
                translateY(${deltaY * 25}px)`;
  });
}), 10000);

function debounce(func, ms) {
  let callAllowed = true;
  return function () {
    if (!callAllowed) {
      return;
    }

    func.apply(this, arguments);

    callAllowed = false;

    setTimeout(() => {
      callAllowed = true;
    }, ms);
  };
}
</script>

<style lang="scss" scoped>
.animated-face {
  margin-bottom: 20px;

  @media (max-width: 767px) {
    display: none;
  }
}

.face-block {
  height: 100px;
  width: 100px;
  display: block;
  margin: 0 auto;
  border: none;
}

.face-block > .eyes-wrapper::after {
  content: '';
  display: table;
  clear: both;
}

.face-block > .eyes-wrapper > .eye {
  float: left;
  position: relative;
  height: 40px;
  width: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
}

.face-block > .eyes-wrapper > .eye + .eye {
  margin-left: 20px;
}

.face-block > .eyes-wrapper > .eye > .pupil {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: -5px;
  background: #fff;
  animation: blink 3s linear infinite;
}

@keyframes blink {
  0% {
    height: 10px;
  }
  96% {
    height: 10px;
  }
  98% {
    height: 1px;
  }
  100% {
    height: 10px;
  }
}

.face-block > .mouth-wrapper {
  height: 30px;
  width: 60px;
  margin: 10px auto;
  overflow: hidden;
}

.face-block > .mouth-wrapper > .mouth {
  margin: 0 auto;
  height: 60px;
  width: 60px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, #A53860 0%, #A53860 50%, transparent 50%, transparent 100%), radial-gradient(circle, #A53860 0%, #A53860 50%, transparent 50%, transparent 100%), linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, transparent 40%, transparent 60%, #FFFFFF 60%, #FFFFFF 100%), linear-gradient(to right, #450920 0%, #450920 100%);
  background-size: 30px 30px, 30px 30px, 20px 20px, 100%;
  background-repeat: no-repeat;
  background-position: 20% 160%, 70% 160%, 50% 50%, 0 0;
  transition: all .3s ease;
}

.face-block > .mouth-wrapper > .mouth.-closed {
  height: 30px;
  width: 30px;
  transform: translateY(0);
  background-size: 10px 10px, 10px 10px, 20px 20px, 100%;
  background-position: 20% 150%, 70% 150%, 50% -200%, 0 0;
}

.call-to-action {
  display: block;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  padding: 0 3.3em;
  line-height: 2em;
  border-radius: .2em;
  background: #F9DBBD;
  color: #450920;
  transition: all .3s ease;
}

.call-to-action:hover, .call-to-action:focus {
  background: #450920;
  color: #F9DBBD;
}
</style>