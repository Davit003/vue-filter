<template>
  <div class="home">
    <div class="home-main">
      <video class="main__bg" preload="auto" autoplay muted loop>
        <source type="video/webm" src="../assets/Road.mp4" />
        <source type="video/mp4" src="../assets/road.webm" />
      </video>
      <div class="main__bg-color"></div>
      <div class="main__body">
        <container class="container">
          <div class="main__content">
            <div class="main__txt">
              Alma makes it easy to find high quality, affordable mental health
              care.
            </div>
            <def-btn>
              <span class="btn__txt"> Browse our directory </span>
            </def-btn>
            <!-- <div class="main-block">
              <div class="block__title">Subscribe to The Digest</div>
              <div class="block__txt">
                Get the latest mental health news in your inbox every other
                Thursday.
              </div>
              <def-btn>
                <span class="btn__txt">Sign Up</span>
              </def-btn>
            </div> -->
          </div>
        </container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
};
</script>

<style scoped>
.home-main {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.main__bg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.main__bg-color {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.container {
  position: relative;
}
.main__body {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 64px;
}
.main__content {
  position: relative;
  display: flex;
  top: 50%;
  transform: translate(0, -50%);
  flex-direction: column;
  align-items: center;
  padding: 175px 0px 0px 0px;
  grid-gap: 49px 0;
}
.main__txt {
  width: 768px;
  max-width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 54px;
  line-height: 68px;
  text-align: center;
  letter-spacing: 0.54px;
  color: #ffffff;
}

.main-block {
  bottom: -50%;
  right: -50px;
  z-index: 3;
  position: absolute;
  width: 312px;
  height: 200px; 
  background: #497557;
  padding: 33px 0px 33px 24px;
  border-radius: 2px;
}
.block__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff; 
}
.block__txt {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding: 15px 0;
}
</style>
 