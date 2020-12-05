<template>
<body>
  <div class="wrapper">
    <Hello />

    <!-- Page Header -->
    <div class="page-header"></div>
    <!-- /Page Header -->
    <!-- Page Inner -->
    <div class="page-inner">
      <div class="page-title">
        <h3 class="breadcrumb-header">Form Wizard</h3>
      </div>
      <div id="main-wrapper">
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-white">
              <div class="panel-body">
                <div id="rootwizard">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                      <a href="#tab1" data-toggle="tab">
                        <i class="fa fa-user m-r-xs"></i>Design Info
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#tab2" data-toggle="tab">
                        <i class="fa fa-truck m-r-xs"></i>Product Info
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#tab4" data-toggle="tab">
                        <i class="fa fa-check m-r-xs"></i>Finish
                      </a>
                    </li>
                  </ul>
                  <div class="progress progress-sm m-t-sm">
                    <div
                      class="progress-bar progress-bar-info progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 0%"
                    ></div>
                  </div>
                  <form id="wizardForm">
                    <div class="tab-content">
                      <b-tabs content-class="tab-pane active fade in" id="tab1">
                        <div class="row m-b-lg">
                          <div class="col-md-6">
                            <div class="row">
                              <form @submit.prevent="sendFile" enctype="multipart/form-data">
                                <div class="form-group col-md-12">
                                  <label for="exampleInputEmail">Design Feature</label>
                                  <input
                                    type="Text"
                                    class="form-control"
                                    name="exampleInputEmail"
                                    id="exampleInputEmail"
                                    placeholder="Describe Feature of design"
                                    v-model="feature"
                                  />
                                </div>
                                <div class="form-group col-md-12">
                                  <label for="exampleInputPassword1">Tags</label>
                                  <input
                                    type="Text"
                                    class="form-control"
                                    name="exampleInputPassword1"
                                    id="exampleInputPassword1"
                                    placeholder="Enter key words Design"
                                    v-model="tags"
                                  />
                                </div>
                                <div class="form-group col-md-12">
                                  <label for="inputTitle">Choose Native Design Software</label>
                                  <select class="form-group col-md-12" v-model="software">
                                    <option value="Solidworks">Solidworks</option>
                                    <option value="Autodesk">AutoCAD</option>
                                    <option value="Schlumberger Eclipse">Schlumberger Eclipse</option>
                                    <option value="Rhino3D">Rhino3D</option>
                                    <option value="Fastship">Fastship</option>
                                    <option value="Archicad">Archicad</option>
                                    <option value="Mathlab">Mathlab</option>
                                    <option value="Quickbook">Quickbook</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-12">
                                  <label for="exampleInputPassword2">Software Version</label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="exampleInputPassword2"
                                    id="exampleInputPassword2"
                                    placeholder="Enter brief description of design in 8 words"
                                    v-model="version"
                                  />
                                </div>
                                <div class="form-group col-md-12">
                                  <label for="exampleInputPassword2">Downloadable Materials</label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="exampleInputPassword2"
                                    id="exampleInputPassword2"
                                    placeholder="List materials available for download"
                                    v-model="materials"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <h3>Please Note</h3>
                            <p>Downloadable materials should carry a list of every material available to the buyer on purchase, it is neccessary that these materials are stated clearly to avoid negative reviews from unsatisfied customers.</p>
                            <p>Tags are keywords which users will use to search for products in any category of their choice, it is essential that you fill out tag area properly to optimize SEO. Tags should be seperated with a comma.</p>
                            <p>Introduce your product to prospective buyers in no more than 8 words, the use of keywords should be optimized.</p>Design Feature should contain r ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                            <p>Choose the native design version which your work was designed on and the software used for design. Files should be zipped to avoid error due to missing file path.</p>
                          </div>
                        </div>
                      </b-tabs>
                      <div class="tab-pane active fade in" id="tab2">
                        <div class="row">
                          <div class="col-md-3">
                            <img src="http://via.placeholder.com/250x40" width="250" alt />
                            <div class="m-t-md">
                              <address>
                                <strong>Drop Zone</strong>
                                <br />if you are using the drop zone for upload,
                                <br />Drag or paste files into the drop zone.
                                <br />Product name should be keywords
                                <br />Product price is in dollar, enter numbers only
                                <br />Product Description should contain as many words as possible.
                              </address>
                              <address>
                                <strong>Choose File</strong>
                                <br />if you are using the drop zone for upload,
                                <br />It is pretty much same step as the dropzone method except you will have to choose file instead of dragging or copying.
                                <br />
                              </address>
                            </div>
                          </div>
                          <div class="col-md-9">
                            <form @submit.prevent="sendFile" enctype="multipart/form-data">
                              <div class="form-group col-md-12">
                                <label for="exampleInputProductName">Product Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="exampleInputProductName"
                                  id="exampleInputProductName"
                                  placeholder="Product Name"
                                  v-model="title"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label for="exampleInputProductId">Product Price</label>
                                <input
                                  type="number"
                                  class="form-control"
                                  name="exampleInputProductId"
                                  id="exampleInputProductId"
                                  placeholder="Product Price"
                                  v-model="price"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label for="exampleInputQuantity">Description</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="exampleInputQuantity"
                                  id="exampleInputQuantity"
                                  placeholder="A brief description about product maximum of 8 words"
                                  v-model="description"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label for="inputTitle">Choose an option</label>
                                <select class="form-group col-md-12" v-model="categories">
                                  <option value="marine Designs">Marine engineering design</option>
                                  <option value="mechanical Designs">mechanical engineering design</option>
                                  <option value="Electrical Designs">Electrical engineering design</option>
                                  <option value="Petroleum Designs">Petroleum engineering design</option>
                                  <option value="Chemical Designs">Chemical engineering design</option>
                                  <option value="Civil Designs">Civil engineering design</option>
                                  <option
                                    value="plan and costing Designs"
                                  >plan and costing design design</option>
                                  <option value="Survey Designs">survey design</option>
                                </select>
                              </div>
                              <br />
                              <div class="page-title">
                                <h3 class="breadcrumb-header">File Upload</h3>
                              </div>
                              <div id="main-wrapper">
                                <div class="row">
                                  <div class="col-md-9">
                                    <div class="panel panel-white">
                                      <div class="panel-heading clearfix">
                                        <h4 class="panel-title">Dropzone</h4>
                                      </div>
                                      <div class="panel-body">
                                        <form action="/upload-target" class="dropzone"></form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <label for="file" class>upload file</label>
                              <input type="file" ref="file" @change="selectFile" />
                              <button class="btn btn-primary">send</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane active fade in" id="tab4">
                        <h3 style="margin-top:25px;">Thank You!</h3>
                        <div
                          class="alert alert-success m-t-sm m-b-lg"
                          role="alert"
                        >Congratulations! You got the last step.</div>
                      </div>
                      <div class="page-inner"></div>
                      <!-- Row -->
                      <ul class="pager wizard">
                        <li class="previous">
                          <a href="#" class="btn btn-default">Previous</a>
                        </li>
                        <li class="next">
                          <a href="#" class="btn btn-default">Next</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Row -->
      </div>
      <!-- Main Wrapper -->
    </div>
    <!-- /Page Inner -->
  </div>
  <!-- /Page Content -->
  <footers />
</body>
</template>

<script>
import axios from "axios";
import footers from "../components/footers";
import Hello from "../components/Hello";
export default {
  components: {
    footers,
    Hello
  },
  data() {
    return {
      file: "",
      title: "",
      price: "",
      description: "",
      tags: "",
      feature: "",
      categories: "",
      software: "",
      version: "",
      materials: "",
      errors: [],
      products: []
    };
  },
  async created() {
    let res = await axios.get("http://localhost:3000/datas");
    this.products = res.data;
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("title", this.title);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("tags", this.tags);
      formData.append("feature", this.feature);
      formData.append("categories", this.categories);
      formData.append("software", this.software);
      formData.append("version", this.version);
      formData.append("materials", this.materials);
      await axios.post("http://localhost:3000/datas", formData, {
        params: {
          user: this.$store.state.user,
          username: this.$store.state.name
        }
      });

      this.$router.push({ name: "Home" });
    }
  }
};
</script>