<template>
<body>
  <div class="wrapper">
    <Hello />
    <div class="body__overlay"></div>
    <!-- Start Bradcaump area -->
    <div class="ht__bradcaump__area">
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
                  <span class="breadcrumb-item active">Projects</span>
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
      <div v-if="admins && admins.length">
        <div>
          <b-dropdown id="dropdown-form" variant="warning" text="Edit profile" ref="dropdown">
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <div class="form-group col-md-9">
                <label for="exampleInputEmail">Personal Details</label>
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="personalDetails"
                ></textarea>
              </div>

              <div class="form-group col-md-9">
                <label for="exampleInputEmail">Qualifications</label>
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="qualification"
                ></textarea>
              </div>

              <div class="form-group col-md-9">
                <label for="exampleInputEmail">Reviews</label>
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="review"
                ></textarea>
              </div>

              <div class="form-group col-md-9">
                <label for="file" class>Edit Picture</label>
                <input type="file" ref="file" @change="selectFile" />
                <div class="form-group col-md-9">
                  <button class="btn btn-primary">send</button>
                </div>
              </div>
            </form>
          </b-dropdown>
        </div>
      </div>
      <!-- Start Product Details Top -->
      <div class="htc__product__details__top">
        <div class="container" v-for="profile in profile" :key="profile._id">
          <div class="row">
            <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
              <div class="htc__product__details__tab__content">
                <!-- Start Product Big Images -->
                <div class="product__big__images">
                  <div class="portfolio-full-image tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="img-tab-1">
                      <img
                        class="card-img-top"
                        :src="imageLink + profile.file"
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                </div>
                <!-- End Product Big Images -->
              </div>
            </div>
            <div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
              <div class="ht__product__dtl">
                <h2>Personal details</h2>
                <p>Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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
                <button class="btn btn-warning">CONTACT DESIGNER</button>
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
                <a href="#description" role="tab" data-toggle="tab">Qualifications</a>
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
                </div>
              </div>
              <!-- End Single Content -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Start Product Description -->
    <section class="htc__produc__decription bg__white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- Start List And Grid View -->
            <ul class="pro__details__tab" role="tablist">
              <li role="presentation" class="description active">
                <a href="#description" role="tab" data-toggle="tab">Reviews</a>
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
                <a href="#description" role="tab" data-toggle="tab">Models</a>
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
                  <div class="justify">
                    <div v-if="visitor && visitor.length">
                      <div v-for="(error, i) of visitor" :key="i">
                        <b-alert show variant="success">{{error}}</b-alert>
                      </div>
                    </div>
                    <div v-if="admin && admin.length">
                      <div v-for="(error, i) of admin" :key="i">
                        <b-alert show variant="success">{{error}}</b-alert>
                        <div>
                          <button class="btn btn-success" @click="create">CREATE PROJECT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="ht__blog__wrap blog--page clearfix">
                        <!-- Start Single Blog -->
                        <div
                          class="col-md-6 col-lg-4 col-sm-4 col-xs-4"
                          v-for="project in projects"
                          :key="project._id"
                        >
                          <div class="blog">
                            <div class="blog__thumb">
                              <a href="blog-details.html">
                                <img
                                  class="images"
                                  :src="imageLink + project.file"
                                  alt="Card image cap"
                                />
                              </a>
                            </div>
                            <div class="blog__details">
                              <div class="bl__date">
                                <span>{{project.title}}</span>
                              </div>
                              <h2>${{project.price}}</h2>
                              <p>{{project.intro}}</p>
                              <div v-if="admini && admini.length">
                              <div class="blog__btn">
                                <button class="btn btn-danger" @click="Delete(project)">Delete</button>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- End Single Blog -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Content -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Start Blog Area -->
    <!-- Start PAgenation -->
    <div class="row">
      <div class="col-xs-12">
        <ul class="htc__pagenation">
          <li>
            <a href="#">
              <i class="zmdi zmdi-chevron-left"></i>
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">
              <i class="zmdi zmdi-more"></i>
            </a>
          </li>
          <li>
            <a href="#">19</a>
          </li>
          <li class="active">
            <a href="#">
              <i class="zmdi zmdi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- End PAgenation -->
  </div>
  <!-- End Blog Area -->
  <footers />
  <!-- End Footer Style -->
  <!-- Body main wrapper end -->

  <!-- Placed js at the end of the document so the pages load faster -->
</body>
</template>

<script>
import axios from "axios";
import Hello from "../components/Hello";
import footers from "../components/footers";
export default {
  components: {
    Hello,
    footers
  },
  data() {
    return {
      imageLink: "http://localhost:3000/",
      admin: [],
      admini:[],
      visitor: [],
      file: "",
      personalDetails: "",
      review: "",
      qualification: "",
      imageLink: "http://localhost:3000/",
      admins: []
    };
  },
  props: ["id"],
  computed: {
    projects() {
      if (
        this.$store.state.projects == 0 &&
        this.id === this.$store.state.user
      ) {
        this.admin.push("Oops, no project yet, you can create one now!");
      } else if (
        this.$store.state.projects == 0 &&
        this.id !== this.$store.state.user
      ) {
        this.visitor.push("Hi dear! This user has no project yet");
      }
      else if (
        this.id == this.$store.state.user
      ) {
        this.admini.push("Hi dear! This user has no project yet");
      }
      return this.$store.state.projects;
    },
    profile() {
      if (this.id === this.$store.state.user) {
        this.admins.push("this is an admin");
      }
      return this.$store.state.profile;
    }
  },
  mounted() {
    this.$store.dispatch("getProjects", this.id);
    this.$store.dispatch("getProfile", this.id);
  },
  methods: {
    async Delete(project) {
      await axios.delete(`http://localhost:3000/datas/2/${project._id}`);
    },
    create() {
      this.$router.push({
        name: "fileupload"
      });
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("personalDetails", this.personalDetails);
      formData.append("review", this.review);
      formData.append("qualification", this.qualification);
      await axios.post("http://localhost:3000/details", formData, {
        params: {
          user: this.$store.state.user
        }
      });
    }
  }
};
</script>

<style>
.justify {
  text-align: center;
}

.images {
  width: 200px;
  height: 200px;
}

.ht__bradcaump__area {
  background: rgba(0, 0, 0, 0) url("../assets/images/bg/4.jpg") repeat scroll 0
    0 / cover;
}
</style>