<template>
  <div id="whoami">
    <div id="pantaila">
    <div class="hexagon1" >
      <h1 v-html="$t('zerda.title')">Zer da Abaraska?</h1>
    </div>
    <div class="hexagon2">
      <p  v-html="$t('zerda.p1')" class="p1">
        Etxebizitzaren arazoak eragiten digun kolektiboa gara, Donostiako hirigunean modu duin batean bizi nahi dugu eta gaur egungo ereduak ez gaitu konbentzitzen.
      </p>
      <p v-html="$t('zerda.p2')" class="p2">
        Etxebizitza ez da ondasun material soila, oinarrizko eskubidea baizik. Gure oinarrizko harreman taldea finkatzen du, bizitza egonkortzen digu eta munduan txoko bat ematen digu.
      </p>
      <p v-html="$t('zerda.p3')" class="p3">
        Antolamendu kooperatiboa, jabetza kolektiboa, etxebizitzaren erabilera balioa eta kideen arteko lankidetza izango ditugu ardatz gure etxebizitza ereduan.
      </p>
      <p v-html="$t('zerda.p4')" class="p4">
        Eredu inklusibo, jasangarri eta ez espekulatzaile bat sustatu nahi dugu.
      </p>
      <p class="p5">
        <b v-html="$t('zerda.p5')">
          Etorkizuna eraikitzeko eta irudikatzeko espazioa da Abaraska.
        </b>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZerDa'
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #whoami{
    background-image: url("~@/assets/images/backgrounds/erletokia.jpg");
    min-width: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;
  }
  #pantaila{
    background-color: rgba(0,0,0,0.2);
  }
  h1{
    padding: 10px 0px 0 0;
    font-size: 4 rem;
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }
  .hexagon2{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .hexagon2 p{
    color: #fff;
    font-size: 1rem;
    text-align: left;
  }
}
@media screen and (min-width:768px ){
  #whoami{
    background-image: url("~@/assets/images/backgrounds/erletokia.jpg");
    /* Set a specific height */
   min-height: 250px;
   height: auto;
   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
  }
  #pantaila{
    background-color: rgba(0,0,0,0.2);
  }
  h1{
    padding: 30px 0px 0 0;
    font-size: 4 rem;
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }
  .hexagon2{
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .hexagon2 p{
    color: #fff;
    font-size: 1rem;
    text-align: left;
  }
}
@media screen and (min-width:992px){
  #whoami{
    background-image: url("~@/assets/images/backgrounds/erletokia.jpg");

    min-height: 250px;
   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   position: relative;
   display: inline-block;
   width: 100%;
  }
  #pantaila{
    width: 100%;
    display:table;
    background-color: rgba(0,0,0,0.4);
  }
 h1{
   padding-top: 40px;
   padding-left: 20px;
   font-size: 52px;
   margin: 0;
   text-align: left;
 }

  .hexagon1 {
   vertical-align: top;
   background-image: url("~@/assets/images/hexagons/hexagon_black.svg");
   background-repeat: no-repeat;
   background-size: 480px;
   background-position: -120px -160px;
   width: 360px;
   display: inline-block;
   color: white;
   min-height: 250px;
   position: absolute;
   top: 0;
 }
 .hexagon2 {
  width: calc(100% - 400px);
  color: white;
  float: right;
  padding:20px;
 }
 .hexagon2 p{
     text-align: left;
     font-size: 1.5rem;
 }
}
</style>
