<template>
<div id="etxeaHankazGora">
  <div class="azalpena">
    <h2 v-html="$t('etxeahankazgora.title1')" >Etxea hankaz gora!</h2>
    <h3 v-html="$t('etxeahankazgora.title2')" >Hiria, etxea eta elkarbizitza feminismotik</h3>
    <h4 v-html="$t('etxeahankazgora.nonNoiz')" >Abenduak 19-20 - Donostiako Emakumeen Etxean</h4>
    <p v-html="$t('etxeahankazgora.p1')" >Etxea hankaz gora jartzeko gonbidapena da hau. Etxea hankaz gora jarri, alfonbra azpian gordetako guztia astindu eta leihoak ireki, aire freskoa sar dadin.</p>
    <p v-html="$t('etxeahankazgora.p2')" >Jardunaldi hauek hirigintza, etxebizitza eta elkarbizitzari buruz era kolektiboan hausnartzeko parada izango dira. Erantzunak ekarri baino, ditugun galderei denon artean erantzunak bilatzea da asmoa.</p>
    <p v-html="$t('etxeahankazgora.p3')" >Aurten ikuspegi feminista batetik aztertuko dugu hiria, etxea eta elkarbizitza.</p>
    <p v-html="$t('etxeahankazgora.p4')" >Hasteko, Etxea Hirian atalean, kalea eta etxea edo publikoa eta pribatuaren arteko banaketa artifizial hori behatu nahi dugu. Nola antolatzen diren hiriguneak eta zein puntutaraino kontuan hartzen diren bertan biziko diren gorputzen beharrak.</p>
    <p v-html="$t('etxeahankazgora.p5')" >Ondoren, Gu Etxean atalean, elkarbizitzaren inguruan eztabaidatuko dugu. Nola jarriko ditugu praktikan interdependentziaren ondorioz suertatzen diren elkarren zaintza eta sostengu sareak? Nola partekatu nahi ditugu espazioak eta ekimenak? Ze tresna sortu ditzakegu taldeko dinamika osasuntsu baterako (erabakiak hartu, ahots guztiek lekua izan, desadostasunak onartu, gatazkak kudeatu, zaintzak bultzatu…)?</p>
    <p v-html="$t('etxeahankazgora.p6')" >Hitz batean, etxea hankaz gora jarri nahi dugu kolektibotasunetik harremanak izateko moduak ulertzeko, kuestionatzeko eta  transformatzeko. Beste elkarbizitza esperientzia batzuk ezagutu eredu kapitalistari eta familia nuklear heteropatriarkalari aurre egiteko eta alternatibak eraikitzeko.</p>
    <p v-html="$t('etxeahankazgora.p7')" >Bizitza hankaz gora jarri,  erdigunean kokatzeko.</p>
    <p v-html="$t('etxeahankazgora.p8')" >Bizi-lagunak izan nahi dugulako!</p>
    <p v-html="$t('etxeahankazgora.apuntatzeko')" >Tokia gordetzeko, idatzi korreo bat info@abaraskaetxea.eus-era</p>
  </div>
  <div class="kartela">
    <img src="~@/assets/images/events/EtxeaHankazGora.jpg" />
  </div>
</div>
</template>

<script>
export default {
  name: 'EtxeaHankazGora'
}
</script>

<style scoped>
@media screen and (max-width:767px) {
  #etxeaHankazGora {
    min-width: 500px;
    background-color: #fbc800;
    margin-top: -20px;
  }
  .kartela{
    padding-bottom: 20px;
  }
  .kartela img{
    width: calc(100% - 60px);
    display: block;
    margin: 0 auto;
  }
  .azalpena{
    padding-top: 20px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h4 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
}

@media screen and (min-width:768px) and (max-width: 991px) {
  #etxeaHankazGora {
    min-width: 500px;
    background-color: #fbc800;
  }
  .kartela{
    padding-bottom: 20px;
  }
  .kartela img{
    width: calc(100% - 100px);
    display: block;
    margin: 0 auto;
  }
  .azalpena{
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h4 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
}

@media screen and (min-width:992px) {
  #etxeaHankazGora {
    min-width: 500px;
    background-color: #fbc800;
    margin-top: -20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .kartela{
    width: calc(50% - 30px);
    display: inline-block;
  }
  .kartela img{
    margin: 0 auto;
    display: block;
    max-height: 800px;
    padding-top: 5px;
  }
  .azalpena{
    width: calc(50% - 30px);
    display: inline-block;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  h4 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    opacity: 1.0;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
}
</style>
