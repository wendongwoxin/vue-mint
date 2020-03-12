<template>
  <div class="nav-header">
     <div class="nav-tag" @click="changeTag('mainpage')" :class="chosenTag === 'mainpage'? 'chosen-tag' : ''">首推</div>
     <div class="nav-tag" @click="changeTag('focus')" :class="chosenTag === 'focus'? 'chosen-tag' : ''">关注</div>
     <div class="nav-tag" @click="changeTag('newest')" :class="chosenTag === 'newest'? 'chosen-tag' : ''">最新</div>
     <div class="nav-tag" @click="changeTag('goodworks')" :class="chosenTag === 'goodworks'? 'chosen-tag' : ''">佳作</div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  computed: {
    chosenTag () {
      return this.$store.state.chosenTag
    }
  },
  methods: {
    changeTag (tag) {
      this.$store.commit('changeTag', tag)
    }
  }
}
</script>

<style scoped>
  .nav-header {
    background-color: #ffffff;
    height: 60px;
  }
  .nav-tag {
    display: inline-block;
    color: #999999;
    height: 40px;
    line-height: 40px;
    margin: 10px 0 10px 20px;
    font-size: 16px;
  }
  .chosen-tag {
    color: #000000;
    font-size: 20px;
    position: relative;
  }
  .chosen-tag::after {
    content: '';
    position: absolute;
    border-top: 5px solid #198bff;
    border-right: 30px solid #198bff;
    left: 5px;
    top: 40px;
  }
</style>
