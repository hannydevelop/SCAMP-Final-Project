/* eslint-disable 
<template>
<body>
  <!-- Body main wrapper start -->
  <div class="wrapper">
    <Hello />
  </div>
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
                <span class="breadcrumb-item active">Products</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Bradcaump area -->
  <!-- Start Product Grid -->
  <section class="htc__product__grid bg__white ptb--100">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
          <div class="htc__product__rightidebar">
            <div class="htc__grid__top">
              <div class="ht__pro__qun">
                <div class="url search">
                  <input class="prompt" type="text" placeholder="search Github....." />
                  <div class></div>
                </div>
                <span>Showing 1-12 of 1033 products</span>
              </div>
            </div>
            <div class="htc__product__container">
              <cat-card v-for="product in products" :key="product.id" :product="product" />
              <div role="tabpanel" id="list-view" class="single-grid-view tab-pane fade clearfix">
                <div class="col-xs-12">
                  <div class="ht__list__wrap"></div>
                </div>
              </div>
            </div>
            <!-- End Product View -->
          </div>
        </div>
        <div
          class="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40"
        >
          <div class="htc__product__leftsidebar">
            <!-- Start Prize Range -->
            <div class="htc-grid-range">
              <h4 class="title__line--4">Price</h4>
              <div class="content-shopby">
                <div class="price_filter s-filter clear">
                  <form action="#" method="GET">
                    <div id="slider-range"></div>
                    <div class="slider__range--output">
                      <div class="price__output--wrap">
                        <div class="price--output">
                          <span>Price :</span>
                          <input type="text" id="amount" readonly />
                        </div>
                        <div class="price--filter">
                          <a href="#">Filter</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- End Prize Range -->
            <!-- Start Category Area -->
            <div class="htc__category">
              <h4 class="title__line--4">categories</h4>
              <ul class="ht__cat__list">
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category1}}"
                  >Marine engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category2}}"
                  >Mechanical engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category3}}"
                  >Electrical engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category4}}"
                  >Petroleum engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category5}}"
                  >Chemical engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category6}}"
                  >Civil engineering design</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'catalogcat', params: {id: category7}}"
                  >Plan and costing design</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'catalogcat', params: {id: category8}}">Survey design</router-link>
                </li>
                <li>
                  <a href="#">Free lancers</a>
                </li>
              </ul>
            </div>
            <!-- End Category Area -->
            <!-- Start Pro Color -->
            <div class="ht__pro__color">
              <h4 class="title__line--4">color</h4>
              <ul class="ht__color__list">
                <li class="grey">
                  <a href="#">grey</a>
                </li>
                <li class="lamon">
                  <a href="#">lamon</a>
                </li>
                <li class="white">
                  <a href="#">white</a>
                </li>
                <li class="red">
                  <a href="#">red</a>
                </li>
                <li class="black">
                  <a href="#">black</a>
                </li>
                <li class="pink">
                  <a href="#">pink</a>
                </li>
              </ul>
            </div>
            <!-- End Pro Color -->
            <!-- Start Pro Size -->
            <div class="ht__pro__size">
              <h4 class="title__line--4">Code</h4>
              <ul class="ht__size__list">
                <li>
                  <a href="#">mic</a>
                </li>
                <li>
                  <a href="#">min</a>
                </li>
                <li>
                  <a href="#">small</a>
                </li>
                <li>
                  <a href="#">big</a>
                </li>
                <li>
                  <a href="#">max</a>
                </li>
              </ul>
            </div>
            <!-- End Pro Size -->
            <!-- Start Tag Area -->
            <div class="htc__tag">
              <h4 class="title__line--4">Native Software</h4>
              <ul class="ht__tag__list">
                <li>
                  solidworks
                </li>
                <li>
                  autodesk
                </li>
                <li>
                  schlumberger eclipse
                </li>
                <li>
                  smart plant
                </li>
                <li>
                  rhino3d
                </li>
                <li>
                  fastship
                </li>
                <li>
                  archicad
                </li>
                <li>
                  mathlab
                </li>
                <li>
                  quickbook
                </li>
              </ul>
            </div>
            <!-- End Tag Area -->
            <!-- Start Best Sell Area -->
            <div class="htc__recent__product">
              <h2 class="title__line--4">best seller</h2>
              <div class="htc__recent__product__inner">
                <!-- Start Single Product -->
                <div class="htc__best__product">
                  <div class="htc__best__pro__thumb">
                    <a href="product-details.html">
                      <img src="../assets/images/product-2/sm-smg/1.jpg" alt="small product" />
                    </a>
                  </div>
                  <div class="htc__best__product__details">
                    <h2>
                      <a href="product-details.html">Product Title Here</a>
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
                    <ul class="pro__prize">
                      <li class="old__prize">$82.5</li>
                      <li>$75.2</li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Product -->
                <!-- Start Single Product -->
                <div class="htc__best__product">
                  <div class="htc__best__pro__thumb">
                    <a href="product-details.html">
                      <img src="../assets/images/product-2/sm-smg/2.jpg" alt="small product" />
                    </a>
                  </div>
                  <div class="htc__best__product__details">
                    <h2>
                      <a href="product-details.html">Product Title Here</a>
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
                    <ul class="pro__prize">
                      <li class="old__prize">$82.5</li>
                      <li>$75.2</li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Product -->
                <!-- Start Single Product -->
                <div class="htc__best__product">
                  <div class="htc__best__pro__thumb">
                    <a href="product-details.html">
                      <img src="../assets/images/product-2/sm-smg/1.jpg" alt="small product" />
                    </a>
                  </div>
                  <div class="htc__best__product__details">
                    <h2>
                      <a href="product-details.html">Product Title Here</a>
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
                    <ul class="pro__prize">
                      <li class="old__prize">$82.5</li>
                      <li>$75.2</li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Product -->
              </div>
            </div>
            <!-- End Best Sell Area -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Product Grid -->
  <!-- Start Pagenation -->
  <div class="row">
    <div class="col-xs-12">
      <ul class="htc__pagenation">
        <li>
          <a href="#">
            <i class="zmdi zmdi-chevron-left"></i>
          </a>
        </li>
        <li class="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">19</a>
        </li>
        <li>
          <a href="#">
            <i class="zmdi zmdi-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- End Pagenation -->
  <footers />
  <!-- End Brand Area -->
  <!-- Start Banner Area -->
  <!-- End Banner Area -->
  <!-- End Banner Area -->
  <!-- Start Footer Area -->
  <!-- End Footer Style -->
</body>
</template>

<script>
import catCard from "../components/catCard";
import Hello from "../components/Hello";
import footers from "../components/footers";
export default {
  components: {
    catCard,
    Hello,
    footers
  },
  data() {
    return {
      category1: "marine Designs",
      category2: "marineDesigns",
      category3: "marine Designs",
      category4: "marine Designs",
      category5: "marine Designs",
      category6: "marine Designs",
      category7: "marine Designs",
      category8: "marine Designs"
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>
<style>
.ht__bradcaump__area{
  background: rgba(0, 0, 0, 0) url("../assets/images/bg/4.jpg") repeat scroll 0 0 / cover ;
}
</style>