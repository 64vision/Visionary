<template>
  <div class="small">
          <line-chart :height="300" style="background: #19365A; padding: 7px; color: #fff;" dark></line-chart>
  </div>
</template>

<script>
  import LineChart from '@/plugins/LineChart.js'

  export default {
    components: {
      LineChart
    }
  }
</script>

<style>
  .small {
    height: 300px;
  }
</style>