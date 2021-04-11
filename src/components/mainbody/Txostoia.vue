<template>
  <div id="txostoia">
      <div class="azalpen-textua">
          <h2 v-html="$t('txostoia.title1')" >Etxebizitza kooperatibo proiektu bat Donostian</h2>
          <p v-html="$t('txostoia.p1')" ></p>
          <p v-html="$t('txostoia.p2')" ></p>
      </div>
      <div class="pdf-kontenedora">
            <object class="pdf" data="../../static/AbaraskaWEB.pdf" type="application/pdf">
                alt : <a href="../../static/AbaraskaWEB.pdf">AbaraskaWEB.pdf</a>
           </object>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Txostoia'
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #txostoia{
    min-width: 500px;
    background-image: url("~@/assets/images/backgrounds/donostialdea.png");
    /* Set a specific height */

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  .azalpen-textua{
      color: white;
      margin-bottom: 30px;
  }
  .pdf-kontenedora {
      width:100%;
      padding-bottom: 50px;
 }
 .pdf{
     width: 90%;
    display: block;
    margin: 0 auto;
    min-height: 750px;
 }
 h2{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
    margin-top: 0;
    padding-top: 20px;
 }
 p{
   font-family: 'Open Sans', sans-serif;
   text-align: center;
   margin-bottom: 0;
   width: 90%;
   margin: 0 auto;
 }
}
@media screen and (min-width:768px ){
  #txostoia{
    background-image: url("~@/assets/images/backgrounds/donostialdea.png");
    /* Set a specific height */

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  .azalpen-textua{
      color: white;
      margin-bottom: 30px;
  }
   .pdf-kontenedora {
      width:100%;
      padding-bottom: 50px;
 }
 .pdf{
     width: 90%;
    display: block;
    margin: 0 auto;
    min-height: 750px;
 }
 h2{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
    margin-top: 0;
    padding-top: 20px;
 }
 p{
   font-family: 'Open Sans', sans-serif;
   text-align: center;
   margin-bottom: 0;
   width: 90%;
   margin: 0 auto;
 }
}
@media screen and (min-width:992px){
  #txostoia{
    background-image: url("~@/assets/images/backgrounds/donostialdea.png");
    /* Set a specific height */

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  .azalpen-textua{
      color: white;
      margin-bottom: 30px;
  }
  .pdf-kontenedora {
      width:100%;
      padding-bottom: 50px;
 }
 .pdf{
     width: 90%;
    display: block;
    margin: 0 auto;
    min-height: 750px;
 }
 h2{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
 }
 p{
   font-family: 'Open Sans', sans-serif;
   text-align: center;
 }
}
</style>
