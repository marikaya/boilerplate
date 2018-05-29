<template>
    <section class="card border-0 rounded-0">
        <div class="card-body">
            <div class="row">
                <div class="container">
                    <div class="col-md-8">
                        <form v-bind:class="{'was-validated': errors.items.length > 0}">
                            <div class="form-group row">
                                <div class="col-6">
                                    <input id="firstName" name="firstName" type="text" class="form-control"
                                           placeholder="First Name" v-model="firstName" v-validate="'required|min:2'">
                                    <span v-bind:class="{'is-invalid':errors.has('firstName')}"
                                          class="invalid-feedback">{{errors.first('firstName')}}</span>
                                </div>
                                <div class="col-6">
                                    <input id="lastName" name="lastName" type="text" class="form-control"
                                           placeholder="Last Name" v-model="lastName" v-validate="'required|min:2'">
                                    <span v-bind:class="{'is-invalid':errors.has('lastName')}" class="invalid-feedback">{{errors.first('lastName')}}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <input id="email" name="email" type="email" class="form-control"
                                       placeholder="Your email address" v-model="email" v-validate="'required|email'">
                                <span v-bind:class="{'is-invalid':errors.has('email')}" class="invalid-feedback">{{errors.first('email')}}</span>
                            </div>
                            <div class="form-group">
                                <input id="password" name="password" type="password" class="form-control"
                                       placeholder="Choose a password" v-model="password"
                                       v-validate="'required|min:8|max:32'">
                                <span v-bind:class="{'is-invalid':errors.has('password')}" class="invalid-feedback">{{errors.first('password')}}</span>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary" type="button" v-on:click="signUp">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

  export default {
    methods: {
      signUp (e) {
        this.$validator.validate()
      }
    },
    data: () => {
      return {
        firstName: null,
        lastName: '',
        username: '',
        email: '',
        password: ''
      }
    }
  }
</script>

<style scoped>

</style>
