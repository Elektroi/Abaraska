<template>
  <header v-on:scroll="scrollFunction" v-bind:class="{ 'small': scrolled, 'big': !scrolled }">
    <span class="logo">
      <img id="logo-image" src="~@/assets/images/logo_textu_gabe.svg" title="Abaraska">
      <img id="logo-fonts" src="~@/assets/images/abaraska_beltz.svg"  />
    </span>
    <span class="menu">
      <div></div>
      <div></div>
    </span>
    <languages></languages>
  </header>
</template>

<script>
import Languages from '@/components/header/Languages'

export default {
  name: 'HeaderSlim',
  components: { Languages },
  data: function () {
    return {scrolled: false}
  },
  methods: {
    scrollFunction (e) {
      this.scrolled = true
      window.removeEventListener('scroll', this.scrollFunction)
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  destroyed () {
    if (this.scrolled === false) {
      window.removeEventListener('scroll', this.scrollFunction)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  header {
    min-width: 500px;
    background-color: #FFF;
    color: #000;
    text-align: left;
    display:flex;
  }
.logo{
    display: inline-block;
    margin-left:10px;
    width:400px;
    text-align:left;
  }
#logo-image {
    transition: all .3s ease;
    height: 100px;
  }
#logo-fonts {
    transition: all .3s ease;
    display: inline-block;
    height: 90px;
  }
  .menu{
    width:40px;
  }
}
@media screen and (min-width:768px ){
  header {
    background-color: #FFF;
    color: #000;
    text-align: left;
    display:flex;
  }
  .small{
    transition: all 1.3s ease;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
  }
  .small .logo{
    transition: all .3s ease;
    display: inline-block;
    margin-left:10px;
    width:50%;
    text-align:left;
  }
  .small #logo-image {
    transition: all .3s ease;
    height: 100px;
  }
  .small #logo-fonts {
    transition: all .3s ease;
    display: inline-block;
    height: 90px;
  }

  .big .logo{
    display: block;
    height: 630px;
    width:50%;
  }
  .big #logo-image {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:30px;
    height: 330px;
  }
  .big #logo-fonts {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:335px;
    height:300px;
  }

  .menu{
    width:40%;
  }
}
@media screen and (min-width:992px){
  header {
    background-color: #FFF;
    color: #000;
    text-align: left;
    display:flex;
  }
  .small{
    transition: all 1.3s ease;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.38);
  }
  .small .logo{
    transition: all .3s ease;
    display: inline-block;
    margin-left:10px;
    width:50%;
    text-align:left;
  }
  .small #logo-image {
    transition: all .3s ease;
    height: 100px;
  }
  .small #logo-fonts {
    transition: all .3s ease;
    display: inline-block;
    height: 90px;
  }

  .big .logo{
    display: block;
    height: 630px;
    width:50%;
  }
  .big #logo-image {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:30px;
    height: 330px;
  }
  .big #logo-fonts {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:335px;
    height:300px;
  }

  .menu{
    width:40%;
  }
}


</style>
