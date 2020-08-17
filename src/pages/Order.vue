<template>
  <div>
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <OrderFooter></OrderFooter>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import OrderFooter from "../components/OrderFooter.vue";
export default {
  name: "Order",
  data() {
    return {};
  },
  components: { OrderHeader, OrderFooter },
};
</script>