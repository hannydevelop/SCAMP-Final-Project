/* eslint-disable 
<template>
  <div class="wrapper">
    <hello />
    <!-- End Offset Wrapper -->
    <!-- Start Bradcaump area -->
    <div
      class="ht__bradcaump__area"
    >
      <div class="ht__bradcaump__wrap">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="bradcaump__inner">
                <nav class="bradcaump-inner">
                  <a class="breadcrumb-item" href="/home">Home</a>
                  <span class="brd-separetor">
                    <i class="zmdi zmdi-chevron-right"></i>
                  </span>
                  <span class="breadcrumb-item active">shopping cart</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Bradcaump area -->
    <!-- cart-main-area start -->
    <div class="cart-main-area ptb--100 bg__white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <form action="#">
              <div class="table-content table-responsive">
                <table >
                  <thead>
                    <tr >
                      <th class="product-thumbnail">products</th>
                      <th class="product-name">name of products</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in cart" :key="product.id">
                      <td class="product-thumbnail">
                          <img
                            class="product-thumbnails"
                            :src="imageLink + product.file"
                            alt="Card image cap"
                          />
                      </td>
                      <td class="product-name">
                        {{product.title}}
                        <a href="#"></a>
                        <ul class="pro__prize">
                          <li class="old__prize"></li>
                          <li></li>
                        </ul>
                      </td>
                      <td class="product-price">
                        ${{product.price}}
                        <span class="amount"></span>
                      </td>
                      <td class="product-quantity">
                        {{product.quantity}}
                      </td>
                      <td class="product-subtotal">${{product.price*product.quantity}}</td>
                      <td class="product-remove">
                        <a href @click="deleteCart(product)">
                          <i class="icon-delete icons"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="buttons-cart--inner">
                    <div class="buttons-cart">
                      <a href="/catalog">Continue Shopping</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="ht__coupon__code">
                    <span>enter your discount code</span>
                    <div class="coupon__box">
                      <input type="text" placeholder />
                      <div class="ht__cp__btn">
                        <a href="#">enter</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                  <div class="htc__cart__total">
                    <h6>cart total</h6>
                    <div class="cart__desk__list">
                      <ul class="cart__desc">
                        <li>cart total</li>
                        <li>tax</li>
                        <li>shipping</li>
                      </ul>
                      <ul class="cart__price">
                        <li>${{CartTotalPrice}}</li>
                        <li>$0.00</li>
                        <li>$0</li>
                      </ul>
                    </div>
                    <div class="cart__total">
                      <span>order total</span>
                      <span>${{CartTotalPrice}}</span>
                    </div>
                    <ul class="payment__btn">
                      <li>
                        <paystack
                          :amount="CartTotalPrice*100"
                          :email="email"
                          :lastname="lastname"
                          :paystackkey="paystackkey"
                          :reference="reference"
                          :callback="callback"
                          :close="close"
                          :embed="false"
                        >
                          <a class="win">Make Payment</a>
                        </paystack>
                      </li>
                      <li>
                        <a href="/catalog">continue shopping</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- cart-main-area end -->
    <!-- End Banner Area -->
    <footers />
  </div>
</template>

<script>
import Hello from "../components/Hello";
import footers from "../components/footers";
import paystack from "vue-paystack";
import axios from "axios";
export default {
  components: {
    Hello,
    footers,
    paystack
  },
  data() {
    return {
      paystackkey: "pk_test_e57f1b67e2d00ad7087ac6cfd2403029a8bf5433", //paystack public key
      email: "foobar@example.com", // Customer email
      amount: "", // in kobo,
      lastname: "Bars",
      imageLink: "http://localhost:3000/"
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    CartTotalPrice() {
      return this.$store.getters.CartTotalPrice;
    }
  },
  mounted() {
    let cartsId = this.$store.state.user;
    this.$store.dispatch("getCartItems", cartsId);
  },
  methods: {
    deleteCart(product) {
      axios.delete(`http://localhost:3000/cart/2/${product._id}`);
    },
    callback: function(response) {
      console.log(response);
    },
    close: function() {
      console.log("Payment closed");
    }
  }
};
</script>

<style scoped>
.product-thumbnails {
  width: 120px;
  height: 60px;
}

.win {
  width: 450px;
}

.ht__bradcaump__area{
  background: rgba(0, 0, 0, 0) url("../assets/images/bg/4.jpg") repeat scroll 0 0 / cover ;
}
</style>
