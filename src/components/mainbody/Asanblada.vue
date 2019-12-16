<template>
  <div id="asanblada">
    <div class="info">
      <h2>Etxebizitza herrikoia</h2>
      <p>
        Integer lacinia sit amet nibh quis ornare. Vestibulum ornare pellentesque turpis,
         eu pulvinar purus eleifend ut. Nullam ex elit, placerat finibus suscipit eu,
        varius sed nisl. Nullam et mauris ac velit condimentum fringilla nec sed ligula.
      </p>
      <p>
         In in bibendum purus. Sed nec ex sit amet nibh egestas ultrices non sed augue.
         Donec non felis enim. Duis accumsan purus id nisl fermentum elementum.
          Quisque suscipit pulvinar mattis. Praesent interdum malesuada urna,
          ut imperdiet nunc fermentum ac.
      </p>
      <p>
        Integer lacinia sit amet nibh quis ornare. Vestibulum ornare pellentesque turpis,
         eu pulvinar purus eleifend ut. Nullam ex elit, placerat finibus suscipit eu,
        varius sed nisl. Nullam et mauris ac velit condimentum fringilla nec sed ligula.
      </p>
      <p>
         In in bibendum purus. Sed nec ex sit amet nibh egestas ultrices non sed augue.
         Donec non felis enim. Duis accumsan purus id nisl fermentum elementum.
          Quisque suscipit pulvinar mattis. Praesent interdum malesuada urna,
          ut imperdiet nunc fermentum ac.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Asanblada'
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #asanblada{
    min-width:500px;
    background-image: url("~@/assets/images/backgrounds/asanblada.jpg");
   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
   color: white;

  }
  .info{
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    padding: 40px 0px;
  }
 #asanblada h2{
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    margin: 0;
    text-align: center;
 }
 #asanblada p {
   font-family: 'Open Sans', sans-serif;
   width: 90%;
   margin: 10px auto;
   font-size: 1.2rem;
   text-align: justify;
 }
}
@media screen and (min-width:768px ){
  #asanblada{
    background-image: url("~@/assets/images/backgrounds/asanblada.jpg");


   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
   color: white;

  }
  .info{
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    padding: 40px 0px;
  }
 #asanblada h2{
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    margin: 0;
    text-align: center;
 }
 #asanblada p {
   font-family: 'Open Sans', sans-serif;
   width: 80%;
   margin: 10px auto;
   font-size: 1.2rem;
   text-align: justify;
 }
}
@media screen and (min-width:992px){
  #asanblada{
    background-image: url("~@/assets/images/backgrounds/asanblada.jpg");


   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
   color: white;

  }
  .info{
    max-width: 900px;
    width: 60%;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.5);
    padding:20px 40px;
  }
 #asanblada h2{
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    margin: 0;
    text-align: center;
 }
 #asanblada p {
   font-family: 'Open Sans', sans-serif;
   width: 100%;
   margin: 10px auto;
   font-size: 1.2rem;
   text-align: justify;
 }
}

</style>
