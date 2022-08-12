<template>
  <div class="catalog">
    <container>
      <div class="catalog__top">
        <div class="default__title">Catalog</div>
        <div class="catalog__func">
          <ul class="catalog-list">
            <li class="list__title">Mark</li>
            <li class="list__item" v-for="item in filter" :key="item.id">
              <label :for="item.name" class="list__label">
                <span>{{item.name}}</span>
                <input type="checkbox" @input="f" v-model="item.model" :id="item.name" :name="item.name" class="list__check"/>
              </label>
            </li>
          </ul>
          <ul class="catalog-list">
            <li class="list__title">Type</li>
            <li class="list__item" v-for="item in filterCor" :key="item.id">
              <label :for="item.name" class="list__label">
                <span>{{item.name}}</span>
                <input type="checkbox" @input="filtCor" v-model="item.model" :id="item.name" :name="item.name" class="list__check"/>
              </label>
            </li>
          </ul>
          <ul class="catalog-list catalog-list-light">
            <li class="list__title">Price</li>
            <li>
              <input 
                type="text" 
                class="catalog__input"
                @keypress="numbersOnly" 
                v-model="filterPriceMin"
                maxlength="6"
                placeholder="Min"
              >
            </li>
            <li>
              <input 
                type="text" 
                class="catalog__input"
                @keypress="numbersOnly" 
                v-model="filterPriceMax"
                maxlength="6"
                placeholder="Max"
              >
            </li>
          </ul>
          <ul class="catalog-list catalog-list-light">
            <li class="list__title">Search</li>
            <li>
              <input 
                type="text" 
                class="catalog__input"
                maxlength="20"
                v-model="catalogSearchQuery"
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="catalog__body">
        <div class="catalog__grid">
          <product-cart v-for="product in setCatalogFilterredAndSearch" :key="product.id" :product="product"/>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { mapState , mapMutations} from "vuex";
import productCart from '@/components/product-cart.vue'

export default {
  data() {
    return {
      checkedList: [],
      checkedListCor: [],
      filteredCatalog: [],
      filterPriceMin: 0,
      filterPriceMax: 0,
      catalogSearchQuery: '',
    }
  },
  computed: {
    ...mapState({
      catalog: (state) => state.catalog,
      filter: (state) => state.filters,
      filterCor: (state) => state.filtersCor,
    }),
    setCatalogFilterred() {
      if(parseInt(this.filterPriceMin) >= 0 && parseInt(this.filterPriceMax) > parseInt(this.filterPriceMin)) {
        if (this.checkedList.length && this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) &&  this.checkedListCor.includes(item.type.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin) && parseInt(item.price) <= parseInt(this.filterPriceMax) 
          })
        }else if(this.checkedList.length){
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin) && parseInt(item.price) <= parseInt(this.filterPriceMax)
          })        
        } else if(this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedListCor.includes(item.type.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin) && parseInt(item.price) <= parseInt(this.filterPriceMax)
          })
        }
        else {
          return this.filteredCatalog = this.catalog.filter((item)=>{return parseInt(item.price) >= parseInt(this.filterPriceMin) && parseInt(item.price) <= parseInt(this.filterPriceMax)})
        }
      } 
      else if(parseInt(this.filterPriceMin) >= 0 ) {
        if (this.checkedList.length && this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) &&  this.checkedListCor.includes(item.type.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin) 
          })
        }else if(this.checkedList.length){
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin)
          })        
        } else if(this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedListCor.includes(item.type.toLowerCase()) && parseInt(item.price) >= parseInt(this.filterPriceMin)
          })
        }
        else {
          return this.filteredCatalog = this.catalog.filter((item)=>{return parseInt(item.price) >= parseInt(this.filterPriceMin)})
        }
      } 
      else if(parseInt(this.filterPriceMax) > parseInt(this.filterPriceMin)) {
        if (this.checkedList.length && this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) &&  this.checkedListCor.includes(item.type.toLowerCase())  && parseInt(item.price) <= parseInt(this.filterPriceMax) 
          })
        }else if(this.checkedList.length){
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) && parseInt(item.price) <= parseInt(this.filterPriceMax)
          })        
        } else if(this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedListCor.includes(item.type.toLowerCase()) && parseInt(item.price) <= parseInt(this.filterPriceMax)
          })
        }
        else {
          return this.filteredCatalog = this.catalog.filter((item)=>{return parseInt(item.price) <= parseInt(this.filterPriceMax)})
        }
      }
      else {
        if (this.checkedList.length && this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) &&  this.checkedListCor.includes(item.type.toLowerCase()) 
          })
        }
        else if(this.checkedList.length){
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedList.includes(item.mark.toLowerCase()) 
          })        
        } 
        else if(this.checkedListCor.length) {
          this.filteredCatalog = this.catalog.filter((item)=>{
            return this.checkedListCor.includes(item.type.toLowerCase()) 
          })
        }
        else {
          return this.filteredCatalog = this.catalog
        }
      }
      return this.filteredCatalog
    },
    setCatalogFilterredAndSearch() {
      return this.setCatalogFilterred.filter(item => item.name.toLowerCase().includes(this.catalogSearchQuery))
    }
  },
  components: {
    productCart,
  },
  methods: {
    f(e) {
      if (e.target.checked) {
        this.checkedList.push(e.target.id);

      } else {
        const remCheck = this.checkedList.indexOf(e.target.id);
        this.checkedList.splice(remCheck, 1);
      };
    },
    filtCor(e) {
      if (e.target.checked) {
        this.checkedListCor.push(e.target.id);

      } else {
        const remCheck = this.checkedListCor.indexOf(e.target.id);
        this.checkedListCor.splice(remCheck, 1);
      };
    },
    numbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
  },
  watch: {
  }
};
</script>

<style scoped>
.catalog {
  padding: 80px 0px 0px 0px;
}

.catalog__top {
  display: flex;
  justify-content: space-between;
  padding: 25px 0 40px;
  align-items: center;
  flex-wrap: wrap;
}

.catalog__func {
  display: flex;
  align-items: center;
  grid-gap: 0 45px;
  flex-wrap: wrap;  
}
.catalog__input {
  width: 100px;
}

.catalog-list{
  display: flex;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
}

.list__item {
  padding: 0 0 0 20px;
}


.catalog-list-light {
  grid-gap: 0 10px;
}
.list__title {
  font-size: 18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
  color: #2e2e2e;
}
.catalog__filter {
  background: blue;
}

.list__label {
  display: flex;
  cursor: pointer;
  align-items: center;
  grid-gap: 0 7px;
}

.list__check{
  cursor: pointer;
}

.catalog__body {
  padding: 45px 0px 0px 0px;
  border-top: 1px solid #2e2e2e;
}

.catalog__grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: auto;
  grid-gap: 25px 20px;
}

</style>
