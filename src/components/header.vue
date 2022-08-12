<template>
  <div class="header">
    <container>
      <div class="header__body">
        <div class="header__logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <div class="header__menu">
          <div class="header-nav">
            <ul class="nav-list">
              <li class="nav-item" v-for="item in menu" :key="item.value">
                <span class="item__line" @click="showDropMenu">
                  <span class="item__text">{{ item.name }}</span>
                  <font-awesome-icon
                    icon="fa-solid fa-chevron-down"
                    v-if="item.dropMenu.length > 0"
                    class="item__ic"
                  />
                </span>
                <ul class="nav-dropList" v-if="item.dropMenu.length > 0">
                  <li v-for="drop in item.dropMenu" :key="drop">
                    <router-link :to="drop.value">{{ drop.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="header__func">
            <def-btn class="light">
              <span class="btn__txt">Log In</span>
            </def-btn>
            <def-btn>
              <span class="btn__txt">Find a provider</span>
            </def-btn>
          </div>
        </div>
        <div class="header-burg" @click="showMenu">
          <div class="burg__line"></div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      myWindowSize: window.innerWidth,
    };
  },
  computed: {
    ...mapState({
      menu: (state) => state.menu,
    }),
  },
  methods: {
    showMenu() {
      document.querySelector(".header-burg").classList.toggle("_active");
      document.querySelector(".burg__line").classList.toggle("_active");
      document.querySelector(".header__menu").classList.toggle("_active");
      const dropMenus = document.getElementsByClassName("nav-dropList");
      const lastArray = Array.from(dropMenus);

      lastArray.forEach((element) => {
        element.style.height = 0 + 'px';
        element.classList.remove('_active')
        element
          .closest(".nav-item")
          .querySelector(".item__ic")
          .classList.remove("_active");
      });
    },
    onResize() {
      const dropMenus = document.getElementsByClassName("nav-dropList");
      const lastArray = Array.from(dropMenus);

      this.myWindowSize = window.innerWidth;

      if (this.myWindowSize > 768) {
        lastArray.forEach((element) => {
          element.style.height = 0 + 'px';
          element.classList.remove("_active");
        });
      }
    },
    showDropMenu(event) {

      const dropMenus = document.querySelectorAll(".nav-dropList");
      const lastArray = Array.from(dropMenus);
    
      if (this.myWindowSize < 768) {
        for (let i = 0; i < lastArray.length; i++) {
          if (lastArray.indexOf(lastArray[i]) != lastArray.indexOf(event.target.closest(".nav-item").querySelector(".nav-dropList"))) {
            lastArray[i].style.height = 0 + 'px';
            lastArray[i].classList.remove("_active");
            lastArray[i].closest(".nav-item").querySelector(".item__ic").classList.remove("_active");
          }
        }

        event.target.closest(".nav-item").querySelector(".nav-dropList").classList.toggle("_active");
        event.target.closest(".nav-item").querySelector(".item__ic").classList.toggle("_active");

        if (event.target.closest(".nav-item").querySelector(".nav-dropList").classList.contains("_active")) {

          const items = event.target.closest(".nav-item").querySelectorAll(".nav-dropList>li");
          event.target.closest(".nav-item").querySelector(".nav-dropList").style.height = items.length*33 + "px";

        } else {
          event.target.closest(".nav-item").querySelector(".item__ic").classList.remove("_active");
          event.target.closest(".nav-item").querySelector(".nav-dropList").style.height = 0 + "px";
        }
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 88;
}
.header__body {
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.header__logo {
  position: relative;
  width: 64px;
  height: 22px;
}
.header__logo > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.header__menu {
  display: flex;
  grid-gap: 0 36px;
  flex-wrap: wrap;
  align-items: center;
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  grid-gap: 0 29px;
  align-items: center;
}
.nav-item {
  position: relative;
  transition: all 0.2s ease;
}
.item__line {
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 0 15px;
}


.nav-dropList {
  display: none;
  position: absolute;
  z-index: 7;
  cursor: pointer;
  min-width: 100%;
  top: 100%;
  padding: 15px 0px 0px 0px;
  left: 0%;
  list-style: none;
  flex-direction: column;
}
.nav-item:hover .nav-dropList{
  display: flex;
}

.nav-dropList._active {
  display: flex;
}
.nav-dropList > li {
  transition: all 0.2s ease;
  background: #fff;
  padding: 5px 0 5px 5px;
  cursor: pointer;
}
.nav-dropList > li:hover {
  color: #26a4d6;
}
.nav-dropList > li:first-child {
  padding-top: 10px;
}

.nav-dropList > li:last-child {
  padding-bottom: 10px;
}
.item__line:hover .item__text,
.item__line:hover .item__ic {
  color: #26a4d6;
}

.item__text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #ffffff;
  transition: all 0.2s ease;
}
.item__ic {
  color: #ffffff;
  font-size: 10px;
  transition: all 0.4s ease;
}

.header__func {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 0 14px;
}

.header-burg {
  display: none;
  position: relative;
  width: 28px;
  height: 14px;
  cursor: pointer;
}
.header-burg::after,
.header-burg::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: all 0.2s ease;
}
.header-burg._active::after,
.header-burg._active::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(0, 50%);
}
.header-burg._active::after {
  transform: rotate(45deg);
}
.header-burg._active::before {
  transform: rotate(-45deg);
}
.header-burg::after {
  top: 0;
}
.header-burg::before {
  top: 100%;
}
.burg__line {
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  background: #fff;
  transition: all 0.2s ease;
}
.burg__line._active {
  opacity: 0;
}

@media only screen and (max-width: 880px) {
  .header__menu {
    grid-gap: 0 20px;
  }
  .nav-list {
    grid-gap: 0 20px;
  }
  .nav-item {
    grid-gap: 0 10px;
  }
}

@media only screen and (max-width: 768px) {
  .header__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    padding: 25px 5px 0 5px;
    z-index: 4;
    top: 100%;
    background: #2e2e2e;
    grid-gap: 25px 0;
    left: -100vw;
    transition: all 0.4s ease;
  }
  .header__menu._active {
    left: 0;
  }
  .header__func {
    width: 100%;
    flex-direction: column;
    grid-gap: 15px 0;
    align-items: center;
  }
  .nav-list {
    display: flex;
    flex-direction: column;
    grid-gap: 25px 0;
    align-items: flex-start;
  }
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 0 15px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .header-burg {
    display: block;
  }

  .nav__list {
    width: 100%;
  }
  .header-nav {
    width: 100%;
  }
  .nav-list {
    width: 100%;
  }
  .nav-item {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .item__line {
    position: relative;
  }
  .item__ic {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translate(0, -50%);
  }
  .nav-dropList {
    height: 0;
    transition: all 0.5s ease;
    overflow: hidden;
    display: flex;
    position: relative;
    z-index: 7;
    top: -65%;
    transition: all 0.4s ease-out;
    left: 0%;
    padding: 5px 0 0 0;
  }
  .item__ic._active {
    transform: translate(0, -50%) rotate(180deg);
  }
}
</style>
