<template>
  <div id="horia">
    <div class="atal-contenedorea">
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'building']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.erabileralagapena_title')">
          Erabilera lagapena
        </h3>
        <p v-html="$t('puntuak.erabileralagapena')">
          Kooperatiba da etxearen jabea. Bizilagunek etxea erabiltzeko baimena dute, baina ezin dute espekulatu.
        </p>
      </div>
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.bizikidetza_title')">
          Bizikidetza
        </h3>
        <p v-html="$t('puntuak.bizikidetza')">
          Etxeak espazio eta zerbitzu amankomunak izango ditu, baliabideei ahalik eta probetxatu handiena ateratzeko eta bizikidetza sustatzeko.
        </p>
      </div>
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'cubes']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.arkitekturajasangarria_title')">
          Arkitektura jasangarria
        </h3>
        <p v-html="$t('puntuak.arkitekturajasangarria')">
          Espazioak egokituko dira erabiltzaileen beharretara, eta ez alderantziz. Bioeraikuntzan oinarritutako arkitektura bultzatuko dugu.
        </p>
      </div>
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'sun']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.auzoa_title')">
          Auzoa
        </h3>
        <p v-html="$t('puntuak.auzoa')">
          Etxea ez da espazio aislatu bat. Inguruaren parte denez, auzotik hartuko du, eta auzoari emango dio.
        </p>
      </div>
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'money-bill-alt']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.finantziazioa_title')">
          Finantziazioa
        </h3>
        <p v-html="$t('puntuak.finantziazioa')">
          Proiektua finantzatzeko erabiliko ditugu ekonomia solidarioa, finantza etikoak eta norbanakoen zein entitateen ekarpenak.
        </p>
      </div>
      <div class="data">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'globe']" class="icon" size="2x" />
        </div>
        <h3 v-html="$t('puntuak.arkitekturaproiektua_title')">
          Antzeko proiektuak
        </h3>
        <p v-html="$t('puntuak.arkitekturaproiektua')">
          Ez dugu ezer berririk asmatu. Badira antzerako etxebizitza ereduak. Esaterako, Bartzelonako La Borda, Madrilgo Entrepatios, Uruguaiko Etxe Kooperatiboak, eta urrutira joan gabe, Bilboko Egunsentia proiektua.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'Horia',
  components: {
    FontAwesomeIcon, faSolid
  }
}
</script>

<style scoped>
@media screen and (max-width:767px ){
  #horia{
    min-width: 500px;
   background-color: #fbc800;
   color: #000;
  }
  .atal-contenedorea{
    margin: 0 auto;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }
  h3{
     font-family: 'Roboto', sans-serif;
     text-align: center;
     padding: 0px;
     padding-bottom: 5px;
     margin: 0px;
     position: relative;
  }
  h3:before{
     content: "";
     position: absolute;
     width: 20%;
     height: 1px;
     bottom: 0;
     left:  40%;
     border-bottom: 1px solid #000;
 }
  p{
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding-left: 10px;
    padding-right:10px;
  }
  .icon-container{
      background-image: url("~@/assets/images/hexagons/hexagon_black.svg");
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: contain;
      color: #fcd22f;
  }
  .icon{
    width: 40%;
    padding-top: 20px;
    padding-left: 30px;
    height: 40%;
  }
  .data{
    width:100%;
    vertical-align: top;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@media screen and (min-width:768px ){
  #horia{
   background-color: #fbc800;
   color: #000;
  }
  .atal-contenedorea{
    margin: 0 auto;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }
  h3{
     font-family: 'Roboto', sans-serif;
     text-align: center;
     padding: 0px;
     padding-bottom: 5px;
     margin: 0px;
     position: relative;
  }
  h3:before{
     content: "";
     position: absolute;
     width: 20%;
     height: 1px;
     bottom: 0;
     left:  40%;
     border-bottom: 1px solid #000;
 }
  p{
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding-left: 10px;
    padding-right:10px;
  }
  .icon-container{
      background-image: url("~@/assets/images/hexagons/hexagon_black.svg");
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: contain;
      color: #fcd22f;
  }
  .icon{
    width: 40%;
    padding-top: 20px;
    padding-left: 30px;
    height: 40%;
  }
  .data{
    width: 49%;
    vertical-align: top;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@media screen and (min-width:992px){
  #horia{
   background-color: #fbc800;
   color: #000;
  }
  .atal-contenedorea{
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }
  h3{
     font-family: 'Roboto', sans-serif;
     text-align: center;
     padding: 0px;
     padding-bottom: 5px;
     margin: 0px;
     position: relative;
  }
  h3:before{
     content: "";
     position: absolute;
     width: 20%;
     height: 1px;
     bottom: 0;
     left:  40%;
     border-bottom: 1px solid #000;
 }
  p{
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding-left: 10px;
    padding-right:10px;
  }
  .icon-container{
      background-image: url("~@/assets/images/hexagons/hexagon_black.svg");
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: contain;
      color: #fcd22f;
  }
  .icon{
    width: 40%;
    padding-top: 20px;
    padding-left: 30px;
    height: 40%;
  }
  .data{
    width: 33%;
    vertical-align: top;
    display: inline-block;
    margin-bottom: 10px;
  }
}

</style>
