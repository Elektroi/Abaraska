<template>
    <span class="languages">
      <language-chooser v-on:click.native="changeLanguage('eu_ES')" class="hexagon"
      v-bind:class="eu_ES" title="Euskara" name="EU"></language-chooser>
      <language-chooser v-on:click.native="changeLanguage('es_ES')" class="hexagon"
      v-bind:class="es_ES" title="Español" name="ES"></language-chooser>
    </span>

</template>

<script>
import LanguageChooser from '@/components/header/LanguageChooser'
import {setI18nLanguage, getI18nLanguage} from '@/i18n'

export default {
  name: 'Languages',
  props: ['code', 'name', 'title'],
  components: { LanguageChooser },
  data: function () {
    return {
      es_ES: '',
      eu_ES: ''
    }
  },
  methods: {
    changeLanguage: function (lang) {
      this.es_ES = ''
      this.eu_ES = ''
      if (lang === 'es_ES') {
        this.es_ES = 'active'
      } else {
        this.eu_ES = 'active'
      }
      setI18nLanguage(lang)
    }
  },
  created: function () {
    this.es_ES = ''
    this.eu_ES = ''
    if (getI18nLanguage() === 'es_ES') {
      this.es_ES = 'active'
    } else {
      this.eu_ES = 'active'
    }
  }
}
</script>

<style scoped>
  .active{
    background-image: url("~@/assets/images/hexagons/hexagon_yellow_border.svg") !important;
  }
  .languages {
    display: inline-block;
    text-align: right;
    width:30%;
    padding-right: 20px;
    padding-top: 10px;
  }
  .languages p{
    margin: 0px;
    padding:0px;
    text-align: center;
    font-weight: bold;
  }
  .hexagon{
    background-image: url("~@/assets/images/hexagons/hexagon_yellow_border_white.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 40px;
    width: 45px;
    display: inline-block;
    color: black;
    line-height: 40px;
  }
</style>
