<template>
  <div>
      Cart
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <OrderFooter></OrderFooter>
  </div>
</template>
    
<script>
import OrderHeader from "../components/OrderHeader";
import OrderFooter from "../components/OrderFooter.vue";
export default {
  name: "cart",
  components: { OrderHeader, OrderFooter },
};
</script>