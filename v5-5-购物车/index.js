var app = new Vue({
  el: '#app',
  data: {
    ids: [],
    checkAll: false,
    list: [{
        id: 1,
        name: 'iPhone 7',
        price: 7199,
        count: 2
      },
      {
        id: 3,
        name: 'iPad Air',
        price: 2888,
        count: 1
      },
      {
        id: 2,
        name: 'Macbook',
        price: 12888,
        count: 5
      },
      {
        id: 4,
        name: 'iMac',
        price: 7888,
        count: 10
      }
    ]
  },
  computed: {
    totalPrice: function() {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i];
        total += item.price * item.count;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    }
  },
  methods: {
    handleReduce: function(index) {
      if (this.list[index].count === 1) return;
      this.list[index].count--;
    },
    handleAdd: function(index) {
      this.list[index].count++;
    },
    handleRemove: function(index) {
      this.list.splice(index, 1);
    },
    checkOne: function(id) {
      let index = this.ids.indexOf(id);
      if (index >= 0) {
        this.ids.splice(index, 1);
      }else{
          this.ids.push(id);
      }
    },
    checkedAll: function() {
      this.checkAll = !this.checkAll;
      if(this.checkAll){
        this.ids = [];
        this.list.forEach(function (val) {
          this.ids.push(val.id)
        }, this)
      }else{
        this.ids = [];
      }
    }
  }
});
