<template>
  <div class="sidebar">
    <div class="block">
      <div class="label">
        <font-awesome-icon icon="fas fa-sliders-h" />
        本站功能
      </div>
      <div class="opt" v-for="it in link1">
        {{ it.title }}
      </div>
    </div>
    <div class="block">
      <div class="label">
        <font-awesome-icon icon="fas fa-map-signs" />
        常用网站
      </div>
      <div class="opt" v-for="it in link2">
        <a :href="it.href" target="_blank">
          {{ it.title }}
        </a>
      </div>
    </div>
    <div class="block">
      <img class="img" src="@/assets/img/hongmoguan.png" alt="">
    </div>
    <div class="sub">
      ©2019-2023 猫耳夏川<br />
      版权所有，请勿商用
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      link1: [{
        title: 'Minecraft',
        href: ''
      }, {
        title: 'FTP',
        href: ''
      }, {
        title: '录播姬',
        href: ''
      }, {
        title: 'Github',
        href: ''
      }],
      link2: [{
        title: 'Mozilla',
        href: 'https://www.mozilla.org/'
      }, {
        title: 'MDN Web Doc',
        href: 'https://developer.mozilla.org/'
      }, {
        title: '菜鸟教程',
        href: 'https://www.runoob.com/'
      }, {
        title: 'Vue.js',
        href: 'https://vuejs.org/'
      }, {
        title: '信·AC动漫联盟',
        href: 'https://faith-ac.github.io/'
      }, {
        title: '萌娘百科',
        href: 'https://zh.moegirl.org.cn/'
      }, {
        title: 'USTC Mirror',
        href: 'https://mirrors.ustc.edu.cn/'
      }, {
        title: 'MSDN, 我告诉你',
        href: 'https://msdn.itellyou.cn/'
      }, {
        title: '琉璃神社',
        href: 'https://www.liuli.cat/'
      }, {
        title: '中国研究生招生信息网',
        href: 'https://yz.chsi.com.cn/'
      }, {
        title: '中国教育考试网',
        href: 'https://ntce.neea.edu.cn/'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  width: 100%;
  position: sticky;
  top: -6rem
}

.block {
  margin: 1rem 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0.25rem #0004;
  border-radius: 0.5rem;
  overflow: hidden;
}

.label {
  font-weight: bold;
  padding-bottom: 0.5rem;
}

.opt {
  padding: 0.25rem 0;
  cursor: pointer;
}

.img {
  width: 100%;
}

.sub {
  text-align: center;
  padding-bottom: 1rem;
}
</style>