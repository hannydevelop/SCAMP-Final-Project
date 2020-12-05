/* eslint-disable */
<template>
<html class="no-js" lang="en">
  <div class="wrapper">
    <Hello />
    <!-- Start Single Slide -->
    <div class="single__slide animation__style01 slider__fixed--height">
      <div class="container">
        <div class="row align-items__center">
          <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <div class="slide">
              <div class="slider__inner">
                <h2>build creativity</h2>
                <h1>PEPPU BUILD</h1>
                <div class="cr__btn">
                  <li v-if="!loggedIn">
                    <router-link class="nav-link" to="/login">Try for free</router-link>
                  </li>
                  <li v-if="loggedIn">
                    <router-link class="nav-link" to="/upload">Try for free</router-link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
            <div class="slide__thumb">
              <img src="../assets/images/coffe.jpg" alt="slider images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Single Slide -->
  </div>
  <!-- Start options Area -->
  <div class="checkout-wrap ptb--100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <div class="checkout__inner">
            <div class="accordion-list">
              <div class="accordion">
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category1}}"
                  >Marine engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category2}}"
                  >Mehanical engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category3}}"
                  >Electrical engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category4}}"
                  >Petroleum engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category5}}"
                  >Chemical engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category6}}"
                  >Civil engineering design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category7}}"
                  >Plan and costing design</router-link>
                </div>
                <div class="accordion__title">
                  <router-link :to="{name: 'catalogcat', params: {id: category8}}">Survey design</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--explanation-->
  <!-- Start Category Area -->
  <section class="htc__good__sale bg__cat--3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <div class="section__title--2 text-center">
            <h2 class="title__line">New Arrivals</h2>
            <p>Every idea can be built with our workbench and shared with our SEM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="htc__category__area ptb--100">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="htc__product__container">
            <product-card
              v-for="product in products.slice(0,8)"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Start Prize Good Area -->
  <section class="htc__good__sale bg__cat--3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
          <div class="fr__prize__inner">
            <h2>Create a shop outlet and begin to sell your engineering designs.</h2>
            <h3>use our tools to manage your store and sales, its easy to use</h3>
            <div class="cr__btn">
              <router-link :to="{name: 'blog'}">Read More</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
          <div class="prize__inner">
            <div class="prize__thumb">
              <img src="../assets/images/banner/big-img/1.png" alt="banner images" />
            </div>
            <div class="banner__info">
              <div class="pointer__tooltip pointer--3 align-left">
                <div class="tooltip__box">
                  <h4>Create a store or become a buyer</h4>
                  <p>After sign up, create a store or become a buyer and get notified on new designs.</p>
                </div>
              </div>
              <div class="pointer__tooltip pointer--4 align-top">
                <div class="tooltip__box">
                  <h4>Sign up</h4>
                  <p>Sign up by inputing unique email address and username.</p>
                </div>
              </div>
              <div class="pointer__tooltip pointer--5 align-bottom">
                <div class="tooltip__box">
                  <h4>Use referal link</h4>
                  <p>Use referal link to gain more sales and royalties up to 90%.</p>
                </div>
              </div>
              <div class="pointer__tooltip pointer--1 align-top">
                <div class="tooltip__box">
                  <h4>Communicate</h4>
                  <p>Communicate with buyers, send quotation and review designs.</p>
                </div>
              </div>
              <div class="pointer__tooltip pointer--3 align-bottom">
                <div class="tooltip__box">
                  <h4>Monitor</h4>
                  <p>Monitor sales with the use of our tools, items sold are notified in the dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Prize Good Area -->
  <!-- Start Product Area -->
  <section class="ftr__product__area ptb--100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <div class="section__title--2 text-center">
            <h2 class="title__line">Best Seller</h2>
            <p>Use and optimize our SEO to gain new customers</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="product__wrap clearfix">
          <!-- Start Single Category -->
          <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6">
            <div class="category">
              <div class="ht__cat__thumb">
                <a href="product-details.html">
                  <img src="../assets/images/product/9.jpg" alt="product images" />
                </a>
              </div>
              <div class="fr__hover__info">
                <ul class="product__action">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons">
                        <span class="badge badge-danger">7</span>
                      </i>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i><span class="badge badge-danger">7</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fr__product__inner">
                <h4>
                  <a href="product-details.html"></a>
                </h4>
                <ul class="fr__pro__prize">
                  <li class="old__prize">$30.3</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Single Category -->
          <!-- Start Single Category -->
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
            <div class="category">
              <div class="ht__cat__thumb">
                <a href="product-details.html">
                  <img src="../assets/images/product/10.jpg" alt="product images" />
                </a>
              </div>
              <div class="fr__hover__info">
                <ul class="product__action">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fr__product__inner">
                <h4>
                  <a href="product-details.html">voluptatem accusantium</a>
                </h4>
                <ul class="fr__pro__prize">
                  <li class="old__prize">$30.3</li>
                  <li>$25.9</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Single Category -->
          <!-- Start Single Category -->
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
            <div class="category">
              <div class="ht__cat__thumb">
                <a href="product-details.html">
                  <img src="../assets/images/product/11.jpg" alt="product images" />
                </a>
              </div>
              <div class="fr__hover__info">
                <ul class="product__action">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fr__product__inner">
                <h4>
                  <a href="product-details.html">Product Dummy Name</a>
                </h4>
                <ul class="fr__pro__prize">
                  <li class="old__prize">$30.3</li>
                  <li>$25.9</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Single Category -->
          <!-- Start Single Category -->
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
            <div class="category">
              <div class="ht__cat__thumb">
                <a href="product-details.html">
                  <img src="../assets/images/product/12.jpg" alt="product images" />
                </a>
              </div>
              <div class="fr__hover__info">
                <ul class="product__action">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="fr__product__inner">
                <h4>
                  <a href="product-details.html">Product Title Here</a>
                </h4>
                <ul class="fr__pro__prize">
                  <li class="old__prize">$30.3</li>
                  <li>$25.9</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Single Category -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Product Area -->
  <!-- Start Testimonial Area -->
  <section class="htc__testimonial__area bg__cat--4">
    <div class="container">
      <div class="row">
        <div class="ht__testimonial__activation clearfix">
          <!-- Start Single Testimonial -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 single__tes">
            <div class="testimonial">
              <div class="testimonial__thumb">
                <img src="../assets/images/test/client/1.png" alt="testimonial images" />
              </div>
              <div class="testimonial__details">
                <h4>
                  <a href="#">Mr.Mike Band</a>
                </h4>
                <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success.</p>
              </div>
            </div>
          </div>
          <!-- End Single Testimonial -->
          <!-- Start Single Testimonial -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 single__tes">
            <div class="testimonial">
              <div class="testimonial__thumb">
                <img src="../assets/images/test/client/2.png" alt="testimonial images" />
              </div>
              <div class="testimonial__details">
                <h4>
                  <a href="#">Ms.Lucy Barton</a>
                </h4>
                <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success.</p>
              </div>
            </div>
          </div>
          <!-- End Single Testimonial -->
          <!-- Start Single Testimonial -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 single__tes">
            <div class="testimonial">
              <div class="testimonial__thumb">
                <img src="../assets/images/test/client/1.png" alt="testimonial images" />
              </div>
              <div class="testimonial__details">
                <h4>
                  <a href="#">Ms.Lucy Barton</a>
                </h4>
                <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success.</p>
              </div>
            </div>
          </div>
          <!-- End Single Testimonial -->
          <!-- Start Single Testimonial -->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 single__tes">
            <div class="testimonial">
              <div class="testimonial__thumb">
                <img src="../assets/images/test/client/2.png" alt="testimonial images" />
              </div>
              <div class="testimonial__details">
                <h4>
                  <a href="#">Ms.Lucy Barton</a>
                </h4>
                <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success.</p>
              </div>
            </div>
          </div>
          <!-- End Single Testimonial -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
  <!-- Start Top Rated Area -->
  <section class="top__rated__area bg__white pt--100 pb--110">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="section__title--2 text-center">
            <h2 class="title__line">Top Rated</h2>
            <p>But I must explain to you</p>
          </div>
        </div>
      </div>
      <div class="row mt--20">
        <!-- Start Single Product -->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <div class="htc__best__product">
            <div class="htc__best__pro__thumb">
              <a href="product-details.html">
                <img src="../assets/images/product-2/sm-img-2/1.jpg" alt="small product" />
              </a>
            </div>
            <div class="htc__best__product__details">
              <h2>
                <a href="product-details.html">dummy Product title</a>
              </h2>
              <ul class="rating">
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
              </ul>
              <ul class="top__pro__prize">
                <li class="old__prize">$82.5</li>
                <li>$75.2</li>
              </ul>
              <div class="best__product__action">
                <ul class="product__action--dft">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
        <!-- Start Single Product -->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <div class="htc__best__product">
            <div class="htc__best__pro__thumb">
              <a href="product-details.html">
                <img src="../assets/images/product-2/sm-img-2/2.jpg" alt="small product" />
              </a>
            </div>
            <div class="htc__best__product__details">
              <h2>
                <a href="product-details.html">dummy Product title</a>
              </h2>
              <ul class="rating">
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
              </ul>
              <ul class="top__pro__prize">
                <li class="old__prize">$82.5</li>
                <li>$75.2</li>
              </ul>
              <div class="best__product__action">
                <ul class="product__action--dft">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
        <!-- Start Single Product -->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <div class="htc__best__product">
            <div class="htc__best__pro__thumb">
              <a href="product-details.html">
                <img src="../assets/images/product-2/sm-img-2/3.jpg" alt="small product" />
              </a>
            </div>
            <div class="htc__best__product__details">
              <h2>
                <a href="product-details.html">dummy Product title</a>
              </h2>
              <ul class="rating">
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li>
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
                <li class="old">
                  <i class="icon-star icons"></i>
                </li>
              </ul>
              <ul class="top__pro__prize">
                <li class="old__prize">$82.5</li>
                <li>$75.2</li>
              </ul>
              <div class="best__product__action">
                <ul class="product__action--dft">
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i class="icon-cart icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-comment icons"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
      </div>
    </div>
  </section>
  <!-- End Top Rated Area -->
  <!-- Start Blog Area -->
  <!-- End Blog Area -->
  <!-- End Banner Area -->
  <footers />
</html>
</template>

<script>
import ProductCard from "../components/ProductCard";
import Hello from "../components/Hello";
import footers from "../components/footers";
export default {
  components: {
    ProductCard,
    Hello,
    footers,
  },
  data() {
    return {
      category1: "marine Designs",
      category2: "mechanical Designs",
      category3: "Electrical Designs",
      category4: "Petroleum Designs",
      category5: "Chemical Designs",
      category6: "Civil Designs",
      category7: "Survey Designs",
      category8: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>