<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title"><slot name="title"></slot></h3>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
.panel {
  margin-bottom: 24px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0 16px;
  .panel-heading {
    position: relative;
    font-size: 16px;
    padding: 8px 0;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  .panel-body {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1;
  }
}
.panel-default {
  border-color: #e4ecf3;
  .panel-heading {
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
  }
  .panel-title {
    padding: 8px 0;
    color: #313131;
  }
}
</style>
