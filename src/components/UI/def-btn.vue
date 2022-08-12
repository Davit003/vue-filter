<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "def-btn",
};
</script>

<style>
.btn {
  display: inline-flex;
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  background: #0c4a34;
  transition: all 0.2s ease;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  padding: 8px 16px;
}
.btn.light {
  background: rgba(255, 255, 255, 0.2);
}
.btn::after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  transition: all 0.2s ease;
  left: -100%;
  background: #fff;
}

.btn > * {
  position: relative;
  z-index: 3;
  color: #fff;
  transition: all 0.2s ease;
}

.btn:hover:after {
  left: 0;
}
.btn:hover .btn__txt {
  color: #2e2e2e;
}
</style>
