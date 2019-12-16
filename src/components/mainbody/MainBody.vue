<template>
    <div class="content">
    <zer-da></zer-da>
    <etxea-hankaz-gora v-if="(new Date()).getTime() < (new Date('2018-12-20T00:00:00')).getTime()"></etxea-hankaz-gora>
    <beltza></beltza>
    <!-- <asanblada></asanblada>-->
    <horia></horia>
    <txostoia></txostoia>
    <!-- <donostialdea></donostialdea> -->
  </div>
</template>

<script>
import ZerDa from '@/components/mainbody/ZerDa'
import Beltza from '@/components/mainbody/Beltza'
import Asanblada from '@/components/mainbody/Asanblada'
import Horia from '@/components/mainbody/Horia'
import Donostialdea from '@/components/mainbody/Donostialdea'
import EtxeaHankazGora from '@/components/mainbody/EtxeaHankazGora'
import Txostoia from '@/components/mainbody/Txostoia'

export default {
  name: 'MainBody',
  components: { ZerDa, Beltza, Asanblada, Horia, Donostialdea, EtxeaHankazGora, Txostoia }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
