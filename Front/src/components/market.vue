<template>
<body>
  <Hello />
  <div id="wrapper">
    <!-- Page Container -->
    <div class="page-container">
      <!-- Page Sidebar -->
      <div class="page-sidebar">
        <a class="logo-box" href="index.html">
          <span>ecaps</span>
          <i class="icon-radio_button_unchecked" id="fixed-sidebar-toggle-button"></i>
          <i class="icon-close" id="sidebar-toggle-button-close"></i>
        </a>
        <div class="page-sidebar-inner">
          <div class="page-sidebar-menu">
            <ul class="accordion-menu">
              <li>
                <a href="/dashboard">
                  <i class="menu-icon icon-home4"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="active-page">
                <a>
                  <i class="menu-icon icon-inbox"></i>
                  <span>Market place</span>
                </a>
              </li>
              <li>
                <a>
                  <i class="menu-icon icon-show_chart"></i>
                  <span>Charts</span>
                </a>
              </li>
              <li class="menu-divider"></li>
              <li>
                <a href="/blog">
                  <i class="menu-icon icon-help_outline"></i>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="/blog">
                  <i class="menu-icon icon-public"></i>
                  <span>Support</span>
                  <span class="label label-danger">1.0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /Page Sidebar -->

      <!-- Page Content -->
      <div class="page-content">
        <!-- Page Header -->
        <div class="page-header"></div>
        <!-- /Page Header -->
        <!-- Page Inner -->
        <div class="page-inner">
          <div class="page-title">
            <h3 class="breadcrumb-header">Dashboard</h3>
          </div>
          <div id="main-wrapper">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="panel panel-white stats-widget">
                  <div class="panel-body">
                    <div class="pull-left">
                      <span class="stats-number">781,876</span>
                      <p class="stats-info">Internal Downloads</p>
                    </div>
                    <div class="pull-right">
                      <i class="icon-arrow_downward stats-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="panel panel-white stats-widget">
                  <div class="panel-body">
                    <div class="pull-left">
                      <span class="stats-number">$781,876</span>
                      <p class="stats-info">Revenue</p>
                    </div>
                    <div class="pull-right">
                      <i class="icon-flash_on stats-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="panel panel-white stats-widget">
                  <div class="panel-body">
                    <div class="pull-left">
                      <span class="stats-number">578,100</span>
                      <p class="stats-info">External Downloads</p>
                    </div>
                    <div class="pull-right">
                      <i class="icon-arrow_upward stats-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="main-wrapper">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-lg-12 col-xs-9">
                  <form action="#">
                    <div class="table-content table-responsive">
                      <h3 class="titlemark">INTERNAL DOWNLOADS</h3>
                      <table>
                        <thead>
                          <tr>
                            <th class="product-thumbnail">Designer</th>
                            <th class="product-name">name of products</th>
                            <th class="product-price">Price</th>
                            <th class="product-price">Date of sale</th>
                            <th class="product-price">Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="product in market" :key="product._id">
                            <td>{{product.internal.username}}</td>
                            <td>{{product.internal.title}}</td>
                            <td>${{product.internal.price}}</td>
                            <td>{{product.date}}</td>
                            <td>
                              <b-dropdown
                                id="dropdown-form"
                                variant="warning"
                                text="Review"
                                ref="dropdown"
                              >
                                <div class="form-group col-md-9">
                                  <div>
                                    <heart-rating v-model="rating"></heart-rating>
                                    <div>Rate Product: {{rating}} Star</div>
                                  </div>
                                </div>

                                <div class="form-group col-md-9">
                                  <label for="exampleInputEmail">Comment</label>
                                  <textarea
                                    class="form-control rounded-0"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    v-model="comment"
                                  ></textarea>
                                  <button class="btn btn-primary" @click="review(product)">review</button>
                                </div>
                              </b-dropdown>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="main-wrapper">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-lg-12 col-xs-9">
                  <form action="#">
                    <div class="table-content table-responsive">
                      <h3 class="titlemark">EXTERNAL DOWNLOADS</h3>
                      <table>
                        <thead>
                          <tr>
                            <th class="product-thumbnail">Designer</th>
                            <th class="product-name">name of products</th>
                            <th class="product-price">Price</th>
                            <th class="product-price">Date of sale</th>
                            <th class="product-price">Reviews</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="product in extmarket" :key="product._id">
                            <td>{{product.internal.username}}</td>
                            <td>{{product.internal.title}}</td>
                            <td>${{product.internal.price}}</td>
                            <td>{{product.date}}</td>
                            <td>
                              <router-link :to="{name: 'product', params: {id: product.product}}">
                                <button class="btn btn-warning">Reviews</button>
                              </router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
           <div id="main-wrapper">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-lg-12 col-xs-9">
                  <form action="#">
                    <div class="table-content table-responsive">
                      <h3 class="titlemark">DESIGNS</h3>
                      <table>
                        <thead>
                          <tr>
                            <th class="product-thumbnail">Design Name</th>
                            <th class="product-name">Date of publish</th>
                            <th class="product-price">Date of Removal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="project in projects" :key="project._id">
                            <td>{{project.title}}</td>
                            <td>{{project.date}}</td>
                            <td>$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <!-- Main Wrapper -->
      </div>
      <!-- /Page Inner -->
    </div>
    <!-- /Page Content -->
    <!-- /Page Container -->
    <footers />
  </div>
</body>
</template>

<script>
import footers from "../components/footers";
import Hello from "../components/Hello";
import { HeartRating } from "vue-rate-it";
import axios from "axios";
export default {
  components: {
    footers,
    Hello,
    HeartRating
  },
  data() {
    return {
      rating: "",
      comment: "",
      title: "",
      report: "",
      market: "",
      extmarket: ""
    };
  },
  props: ["id", "user"],
  computed: {
     projects() {
       return this.$store.state.projects;
     },
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
    this.$store.dispatch("getProjects", this.$store.state.user);
    let user = this.user;
    axios.get(`http://localhost:3000/market/1/${user}`).then(response => {
      this.market = response.data;
    });
    let userd = this.user;
    axios.get(`http://localhost:3000/market/2/${userd}`).then(response => {
      this.extmarket = response.data;
    });
  },
  methods: {
    review(product) {
      axios.post(
        "http://localhost:3000/review",
        {
          rating: this.rating,
          comment: this.comment,
          title: this.title,
          report: this.report
        },
        {
          params: {
            user: this.$store.state.user,
            username: this.$store.state.name,
            product: product.product
          }
        }
      );
    }
  }
};
</script>

