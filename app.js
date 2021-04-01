Vue.component("grocery-item", {
  template: `<article v-on:click="isBought = !isBought" v-bind:class="{bought: isBought}">{{ title }}</article>`,
  props: ["title"],
  data: function() {
    return {
      isBought: false
    };
  }
});

new Vue({
  el: "#app",
  data: {
    sectionName: "Grocery List",
    listNote: "Don't forget...",
    groceries: ["Almonds", "Avocados", "Bananas", "Coffee"]
  }
});
