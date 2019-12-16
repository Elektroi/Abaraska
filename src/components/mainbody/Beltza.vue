<template>
  <div id="beltza">
    <div class="left">
      <h2 v-html="$t('bestelakobizieredu.title')">
        Bestelako bizi eredu bat
      </h2>
      <p v-html="$t('bestelakobizieredu.p1')">
        Egungo bizi eredu indibidualistak ez ditu kontuan hartzen jendearen oinarrizko beharrak. Bizitzako aspektu gehiago partekatu nahi ditugu gure intimitateari eta pribatutasunari uko egin gabe.
      </p>
      <p v-html="$t('bestelakobizieredu.p2')">
        Ohiko familia ereduaren aldean, zaintza, denboraren ekonomia, ekonomia erreproduktiboa, eta beste hainbat aspektu modu politiko batean ulertzeko eta lantzeko espazioa izan daiteke bizitokia.
      </p>
      <p v-html="$t('bestelakobizieredu.p3')">
       Bizilagunak bizi-lagunak izan daitezke.
      </p>
    </div>
    <div class="right">
      <h2 v-html="$t('jabetzakolektiboa.title')">
         Jabetza kolektiboa eta erabilera balioa
      </h2>
      <p v-html="$t('jabetzakolektiboa.p1')">
        Lurra ondasun publikoa izatea nahi dugu, eta erabilera eskubidea aldarrikatzen dugu. Jabetza pribatuaren aldean, gure ereduan kooperatiba litzateke eraikinaren jabe, eta ez norbanakoa.
      </p>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beltza'
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #beltza{
   background-color: #FFF;
   color: #000;
   min-width: 500px;
  }
  h2{
     font-family: 'Roboto', sans-serif;
  }
  p{
     font-family: 'Open Sans', sans-serif;
  }
  .left{
    padding: 0px 0px;
    margin: 20px 40px 20px 40px;
    border-bottom: solid 5px #fbc800;
  }
  .right{
    padding: 0px 0px;
    margin: 20px 40px 20px 40px;
    vertical-align: top;
  }
}
@media screen and (min-width:768px ){
  #beltza{
   background-color: #FFF;
   color: #000;
  }
  h2{
     font-family: 'Roboto', sans-serif;
  }
  p{
     font-family: 'Open Sans', sans-serif;
  }
  .left{
    width: calc(48% - 80px);
    display:inline-block;
    padding: 0px 40px;
    margin: 50px 0px;
    text-align: right;
    border-right: solid 5px #fbc800;
  }
  .right{
    width: calc(48% - 80px);
    display:inline-block;
    padding: 0px 40px;
    margin: 50px 0px;
    vertical-align: top;
  }
}
@media screen and (min-width:992px){
  #beltza{
   background-color: #FFF;
   color: #000;
   max-width: 1050px;
   margin: 0 auto;
  }
  h2{
     font-family: 'Roboto', sans-serif;
  }
  p{
     font-family: 'Open Sans', sans-serif;
  }
  .left{
    width: calc(48% - 80px);
    display:inline-block;
    padding: 0px 40px;
    margin: 50px 0px;
    text-align: right;
    border-right: solid 5px #fbc800;
  }
  .right{
    width: calc(48% - 80px);
    display:inline-block;
    padding: 0px 40px;
    margin: 50px 0px;
    vertical-align: top;
  }
}

</style>
