<template>
  <div class="cart">
    <div class="cart-product">
      <div class="product__top">
        <img :src="product.img" alt="" class="product__img" />
      </div>
      <div class="product__body">
        <div class="product__line">
          <span class="product__bTxt">Mark - </span>
          <span class="product__txt">{{product.mark}}</span>
        </div>
        <div class="product__line">
          <span class="product__bTxt">Model - </span>
          <span class="product__txt">{{product.name}}</span>
        </div>
        <div class="product__line">
          <span class="product__bTxt">Price - </span>
          <span class="product__txt">$</span>
          <span class="product__txt">{{product.price}}</span>
        </div>
        <div class="product__line">
          <span class="product__bTxt">Type - </span>
          <span class="product__txt">{{product.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'product-cart',
    props: {
        product:{ 
            type: Object,
        }
    }
};
</script>

<style scoped>
.cart {
  display: flex;
  min-height: 480px;
}
.cart-product {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.product__top {
  position: relative;
  height: 380px;
}
.product__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.product__body {
  display: flex;
  flex-direction: column;
  grid-gap: 15px 0;
  padding: 15px 10px;
}
.product__line {
  display: flex;
  align-items: center;
  grid-gap: 10px;
}
.product__bTxt {
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}
.product__txt {
  font-size: 18px;
}
</style>
