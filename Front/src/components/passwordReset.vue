/* eslint-disable */
<template>
<body>
<b-row class="justify-content-center">
		<b-col cols="12" md="8" lg="6">
			<b-jumbotron>
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">
      <p class="mt-2">Reset Password</p>
      </div>
      <div class="card-body">
        <div class="text-center mb-4">
        <p class="mt-3">Forgot your password?</p>
          <h5>Enter your email address and we will send you instructions on how to reset your password.</h5>
        </div>
        <form>
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" class="login-input" placeholder="Enter email address" required="required" autofocus="autofocus">
              <p><label for="inputEmail"></label></p>
            </div>
          </div>
          <p class="mt-2"><a class="btn btn-success btn-block" @click="addRegister">Reset Password</a></p>
        </form>
        <div class="text-center">
          <p class="mt-3">First time here? <a href="/register">Create an account</a></p>
						<p class="mt-2"><a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  </div>
  </b-jumbotron>
		</b-col>
	</b-row>
</body>
</template>

<style>
.login-input {
	padding: 20px;
	border-radius: 3px;
	border: 2px solid #e9ecef;
}
</style>
