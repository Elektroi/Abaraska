<template>
  <div id="donostialdea">
    <div class="panala" >
      <div class="bi-zutabe ezker">
        <h2>Zergatik Gipuzkoan?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat vulputate massa ullamcorper maximus. Etiam a nisl justo. Curabitur at facilisis mi. Donec accumsan ligula elit, ut semper ipsum placerat eget. Donec iaculis nulla non tellus tempus, ut hendrerit turpis pulvinar. Vestibulum vel arcu sapien.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat vulputate massa ullamcorper maximus. Etiam a nisl justo. Curabitur at facilisis mi. Donec accumsan ligula elit, ut semper ipsum placerat eget. Donec iaculis nulla non tellus tempus, ut hendrerit turpis pulvinar. Vestibulum vel arcu sapien.</p>
      </div>
      <div class="bi-zutabe eskubi">
        <h2>Zergatik Donostian?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat vulputate massa ullamcorper maximus. Etiam a nisl justo. Curabitur at facilisis mi. Donec accumsan ligula elit, ut semper ipsum placerat eget. Donec iaculis nulla non tellus tempus, ut hendrerit turpis pulvinar. Vestibulum vel arcu sapien.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat vulputate massa ullamcorper maximus. Etiam a nisl justo. Curabitur at facilisis mi. Donec accumsan ligula elit, ut semper ipsum placerat eget. Donec iaculis nulla non tellus tempus, ut hendrerit turpis pulvinar. Vestibulum vel arcu sapien.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donostialdea'
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #donostialdea{
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
  .panala {
    background-image: url("~@/assets/images/backgrounds/panala.png");
    /* Set a specific height */
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   z-index: -1;
 }
 .bi-zutabe{
   width: 95%;
   margin: 0 auto;
   background-color: rgba(0, 0, 0, 0.5);
   opacity: 1;
   color: #FFF;
   z-index:1;
 }
 .bi-zutabe:first-child{
   margin-bottom: 10px;
   padding-bottom: 20px;
 }
 .bi-zutabe:last-child{
  padding-bottom: 40px;
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
  #donostialdea{
    background-image: url("~@/assets/images/backgrounds/donostialdea.png");
    /* Set a specific height */

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  .panala {
    background-image: url("~@/assets/images/backgrounds/panala.png");
    /* Set a specific height */
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   z-index: -1;
 }
 .bi-zutabe{
   width: 80%;
   margin: 0 auto;
   background-color: rgba(0, 0, 0, 0.5);
   opacity: 1;
   color: #FFF;
   z-index:1;
 }
 .bi-zutabe:first-child{
   margin-bottom: 10px;
   padding-bottom: 20px;
 }
 .bi-zutabe:last-child{
  padding-bottom: 40px;
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
  #donostialdea{
    background-image: url("~@/assets/images/backgrounds/donostialdea.png");
    /* Set a specific height */

   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  .panala {
    background-image: url("~@/assets/images/backgrounds/panala.png");
    /* Set a specific height */
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   z-index: -1;

 }
 .bi-zutabe{
   display:inline-block;
   width:35%;
   margin-left:5%;
   margin-right:12%;
   margin-top: 40px;
   background-color: rgba(0, 0, 0, 0.5);
   opacity: 1;
   color: #FFF;
   z-index:1;
   margin-bottom: 40px;
 }
 .bi-zutabe:first-child{
   display:inline-block;
   width:35%;
   margin-left:12%;
   margin-right: 0;
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
