<template>
<footer>
  <div class="social_media big">
    <div id="facebook">
      <a href="https://www.facebook.com/AbaraskaEtxea/">
        <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        facebook.com/AbaraskaEtxea
      </a>
    </div>
    <div id="twitter">
      <a href="https://twitter.com/AbaraskaEtxea">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" size="2x" />
        @AbaraskaEtxea
      </a>
    </div>
    <div id="instagram">
      <a href="https://www.instagram.com/abaraskaetxea/">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        @abaraskaetxea
      </a>
    </div>
    <div id="mail">
      <a href="mailto:info@abaraskaetxea.eus">
        <font-awesome-icon :icon="['fas', 'at']" size="2x" />
        info@abaraskaetxea.eus
      </a>
    </div>
  </div>
  <div class="contact">
    <h2 v-html="$t('partehartu.title')">Parte hartu!</h2>
    <p v-html="$t('partehartu.p1')">
      Proiektuan interesa baldin badaukazu, idatzi lasai.
    </p>
  </div>
  <div class="social_media small">
    <div class="social-media-container">
    <div id="facebook">
      <a href="https://www.facebook.com/AbaraskaEtxea/">
        <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
      </a>
    </div>
    <div id="twitter">
      <a href="https://twitter.com/AbaraskaEtxea">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" size="2x" />
      </a>
    </div>
    <div id="instagram">
      <a href="https://www.instagram.com/abaraskaetxea/">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
      </a>
    </div>
    </div>
  </div>
  <div id="mail" class="small">
    <a href="mailto:info@abaraskaetxea.eus">
      <font-awesome-icon :icon="['fas', 'at']" size="2x" />
      info@abaraskaetxea.eus
    </a>
  </div>
</footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
import faBrands from '@fortawesome/fontawesome-free-brands'

export default {
  name: 'FooterSlim',
  components: {
    FontAwesomeIcon, faSolid, faBrands
  }
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  footer {
    background-color: #000;
    min-width: 500px;
  }
  a{
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover{
    font-weight: bold;
  }
  h2{
     font-family: 'Roboto', sans-serif;
     margin-top: 0;
  }
  p{
    font-family: 'Open Sans', sans-serif;
  }
  .social_media{
    font-family: 'Roboto', sans-serif;
    background-color: #fbc800;
  }
  .contact{
    vertical-align: top;
    display: block;
    color: #FFF;
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .social-media-container{
    width: 250px;
    margin: 0 auto;
  }
  #twitter{
    display: inline-block;
    margin: 10px 20px;
  }
  #facebook{
    display: inline-block;
    margin: 10px 20px;
  }
  #instagram{
    display: inline-block;
    margin: 10px 20px;
  }
  #mail{
    background-color: #000;
    padding: 20px;
  }
  #mail a{
    color: #FFF;
    vertical-align: middle;
    margin: 0 auto;
    display: table;
  }
  .big{
    display: none;
  }
}
@media screen and (min-width:768px ){
  footer {
    background-color: #000;
  }
  a{
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover{
    font-weight: bold;
  }
  h2{
     font-family: 'Roboto', sans-serif;
  }
  p{
    font-family: 'Open Sans', sans-serif;
  }
  .social_media{
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    width: 400px;
    height: 250px;
    background-image: url("~@/assets/images/hexagons/hexagon_yellow.svg");
    background-repeat: no-repeat;
    background-size: 500px 500px;
    background-position: -100px -100px;
  }
  .contact{
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 450px);
    color: #FFF;
  }
  #twitter{
    padding-top: 20px;
    padding-left: 60px;
  }

  #twitter .icon{
    vertical-align: bottom;
  }
  #facebook{
    padding-top: 20px;
    padding-left: 20px;
  }
  #facebook .icon{
    vertical-align: bottom;
  }
  #instagram{
    padding-top: 20px;
    padding-left: 90px;
  }
  #instagram .icon{
    vertical-align: bottom;
  }
  #mail{
    padding-top: 20px;
    padding-left: 50px;
  }
  #mail .icon{
    vertical-align: -8px;
  }
  .small{
    display: none;
  }
}
@media screen and (min-width:992px){
  footer {
    background-color: #000;
    /* Set a specific height */
    height: 250px;

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   color: #FFF;
  }
  a{
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover{
    font-weight: bold;
  }
  h2{
     font-family: 'Roboto', sans-serif;
  }
  p{
    font-family: 'Open Sans', sans-serif;
  }
  .social_media{
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    width: 400px;
    height: 250px;
    background-image: url("~@/assets/images/hexagons/hexagon_yellow.svg");
    background-repeat: no-repeat;
    background-size: 500px 500px;
    background-position: -100px -100px;
  }
  .contact{
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 450px);
  }
  #twitter{
    padding-top: 20px;
    padding-left: 60px;
  }

  #twitter .icon{
    vertical-align: bottom;
  }
  #facebook{
    padding-top: 20px;
    padding-left: 20px;
  }
  #facebook .icon{
    vertical-align: bottom;
  }
  #instagram{
    padding-top: 20px;
    padding-left: 90px;
  }
  #instagram .icon{
    vertical-align: bottom;
  }
  #mail{
    padding-top: 20px;
    padding-left: 50px;
  }
  #mail .icon{
    vertical-align: -8px;
  }
  .small{
    display: none;
  }
}

</style>
