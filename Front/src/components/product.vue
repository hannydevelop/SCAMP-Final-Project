/* eslint-disable */
<template>
<body>
  <!-- Body main wrapper start -->
  <div class="wrapper" v-if="product">
    <Hello />
    <!-- Start Bradcaump area -->
    <div
      class="ht__bradcaump__area"
      style="background: rgba(0, 0, 0, 0) url(images/bg/4.jpg) no-repeat scroll center center / cover ;"
    >
      <div class="ht__bradcaump__wrap">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="bradcaump__inner">
                <nav class="bradcaump-inner">
                  <a class="breadcrumb-item" href="index.html">Home</a>
                  <span class="brd-separetor">
                    <i class="zmdi zmdi-chevron-right"></i>
                  </span>
                  <a class="breadcrumb-item" href="product-grid.html">Products</a>
                  <span class="brd-separetor">
                    <i class="zmdi zmdi-chevron-right"></i>
                  </span>
                  <span class="breadcrumb-item active">ean shirt</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Bradcaump area -->
    <!-- Start Product Details Area -->
    <section class="htc__product__details bg__white ptb--100">
      <!-- Start Product Details Top -->
      <div class="htc__product__details__top">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
              <div class="htc__product__details__tab__content">
                <!-- Start Product Big Images -->
                <div class="product__big__images">
                  <div class="portfolio-full-image tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="img-tab-1">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="img-tab-2">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="img-tab-3">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </div>
                  </div>
                </div>
                <!-- End Product Big Images -->
                <!-- Start Small images -->
                <ul class="product__small__images" role="tablist">
                  <li role="presentation" class="pot-small-img active">
                    <a href="#img-tab-1" role="tab" data-toggle="tab">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </a>
                  </li>
                  <li role="presentation" class="pot-small-img">
                    <a href="#img-tab-2" role="tab" data-toggle="tab">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </a>
                  </li>
                  <li role="presentation" class="pot-small-img">
                    <a href="#img-tab-3" role="tab" data-toggle="tab">
                      <img :src="imageLink + product.file" alt="Card image cap" />
                    </a>
                  </li>
                </ul>
                <!-- End Small images -->
              </div>
            </div>
            <div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
              <div class="ht__product__dtl">
                <h2>{{product.title}}</h2>
                <h6>
                  Model:
                  <span>MNG001</span>
                </h6>
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
                  <li>${{product.price}}</li>
                </ul>
                <p class="pro__info">{{product.description}}</p>
                <div class="ht__pro__desc">
                  <div class="sin__desc">
                    <p>
                      <span>Availability:</span> In Stock
                    </p>
                  </div>
                  <div class="sin__desc align--left">
                    <p>
                      <span>Native Software:</span>
                    </p>
                    <ul class="pro__color">{{product.software}}</ul>
                  </div>
                  <div class="sin__desc align--left">
                    <p>
                      <span>Version:</span>
                    </p>
                    <ul class="pro__color">{{product.version}}</ul>
                  </div>
                  <div class="sin__desc align--left">
                    <p>
                      <span>Category:</span>
                    </p>
                    <ul class="pro__color">{{product.categories}}</ul>
                  </div>
                  <div class="sin__desc align--left">
                    <p>
                      <span>Product tags:</span>
                    </p>
                    <ul class="pro__cat__list">
                      <li>{{product.tags}}</li>
                    </ul>
                  </div>

                  <div class="sin__desc product__share__link">
                    <p>
                      <span>Share this:</span>
                    </p>
                    <ul class="pro__share">
                      <li>
                        <a href="#" target="_blank">
                          <i class="icon-twitter icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" target="_blank">
                          <i class="icon-instagram icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/Furny/?ref=bookmarks" target="_blank">
                          <i class="icon-facebook icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" target="_blank">
                          <i class="icon-github icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" target="_blank">
                          <i class="icon-linkedin icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" target="_blank">
                          <i class="icon-whatsapp icons"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Product Details Top -->
    </section>
    <!-- End Product Details Area -->
    <!-- Start Product Description -->
    <section class="htc__produc__decription bg__white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- Start List And Grid View -->
            <ul class="pro__details__tab" role="tablist">
              <li role="presentation" class="description active">
                <a href="#description" role="tab" data-toggle="tab">description</a>
              </li>
              <li role="presentation" class="review">
                <a href="#review" role="tab" data-toggle="tab">review</a>
              </li>
            </ul>
            <!-- End List And Grid View -->
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="ht__pro__details__content">
              <!-- Start Single Content -->
              <div
                role="tabpanel"
                id="description"
                class="pro__single__content tab-pane fade in active"
              >
                <div class="pro__tab__content__inner">
                  <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                  <h4 class="ht__pro__title">Description</h4>
                  <p>{{product.description}}</p>
                  <p>{{product.intro}}, designed with {{product.software}} version {{product.version}} materials used for design are...materials available for download on purchase are {{product.materials}}</p>
                  <div>
                    <router-link :to="{name: 'profile', params: {user: product.user}}"><button class="btn btn-warning">Contact Designer</button></router-link>
                  </div>
                  <h4 class="ht__pro__title">Standard Featured</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in</p>
                </div>
              </div>
              <!-- End Single Content -->
              <!-- Start Single Content -->
              <div role="tabpanel" id="review" class="pro__single__content tab-pane fade">
                <div class="pro__tab__content__inner">
                  <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                  <h4 class="ht__pro__title">Description</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                  <h4 class="ht__pro__title">Standard Featured</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                </div>
              </div>
              <!-- End Single Content -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="htc__produc__decription bg__white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- Start List And Grid View -->
            <ul class="pro__details__tab" role="tablist">
              <li role="presentation" class="description active">
                <a href="#description" role="tab" data-toggle="tab">Review</a>
              </li>
            </ul>
            <!-- End List And Grid View -->
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="ht__pro__details__content">
              <!-- Start Single Content -->
              <div
                role="tabpanel"
                id="description"
                class="pro__single__content tab-pane fade in active"
              >
                <div v-for="review in review" :key="review._id">
                  <h4 class="ht__pro__title">{{review.username}}</h4>
                  <p>{{review.comment}}</p>
                  <button class="btn btn-primary">
                  <i class="icon-reply"></i>reply
                </button>
                 <div v-if="fiveStar && fiveStar.length">
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
                      <li>
                        <i class="icon-star icons"></i>
                      </li>
                      <li>
                        <i class="icon-star icons"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="justify">
                  <div v-if="fourStar && fourStar.length">
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
                      <li>
                        <i class="icon-star icons"></i>
                      </li>
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                    </ul>
                  </div>
                  <div v-if="threeStar && threeStar.length">
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
                  </div>
                  <div v-if="twoStar && twoStar.length">
                    <ul class="rating">
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
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                    </ul>
                  </div>
                  <div v-if="oneStar && oneStar.length">
                    <ul class="rating">
                      <li>
                        <i class="icon-star icons"></i>
                      </li>
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                      <li class="old">
                        <i class="icon-star icons"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Content -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Product Description -->
    <!-- End Banner Area -->
    <footers />
    <!-- End Footer Style -->
  </div>
  <!-- Body main wrapper end -->
</body>
</template>

<script>
import footers from "../components/footers";
import Hello from "../components/Hello";
import axios from "axios";
export default {
  components: {
    footers,
    Hello
  },
  data() {
    return {
      imageLink: "http://localhost:3000/",
      fiveStar: [],
      fourStar: [],
      threeStar: [],
      twoStar: [],
      oneStar: [],
      review: [],
    };
  },
  props: ["id", "title", "user"],
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  async created(review) {
    let product = this.id;
    axios.get(`http://localhost:3000/review/1/${product}`).then(response => {
      this.review = response.data;
      this.review.forEach(item => {
        console.log(item)
        if (item.rating === "5") {
        this.fiveStar.push("this is fiveStar rating");
      } else if (item.rating === "4") {
        this.fourStar.push("this is fourStar rating");
      } else if (item.rating === "3") {
        this.threeStar.push("this is threeStar rating");
      } else if (item.rating === "2") {
        this.twoStar.push("this is twoStar rating");
      } else if (item.rating === "1") {
        this.oneStar.push("this is oneStar rating");
      }
      });
    });
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        user: this.$store.state.user,
        quantity: 1
      });
      this.$router.push({ name: "cart" });
    }
  }
};
</script>

<style>
.card {
  margin: 20px;
  padding: 20px;
}
</style>