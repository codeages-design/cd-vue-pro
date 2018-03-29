# Mixins 混入

该目录存放一些混入方法，即一些vue页面上有一些相同的代码片段，可以提取出来作为混入方法，在vue页面上调用即可

```js
export const hello = {
  created () {
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello, this is mixins');
    }
  }
};


// 在vue上使用
export default {
    mixins: [hello]
}
```
