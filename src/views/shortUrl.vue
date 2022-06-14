<template>
  <div class="short">
    <div class="inputUrl">
      <h1>Create <span>Short URL</span></h1>
      <div>
        <b-form-input
          id="longUrl"
          v-model="longUrl"
          placeholder="Link to create short URL"
        ></b-form-input>
      </div>
      <div>
        <b-button  block @click="postUrl">Create Short URL</b-button>
      </div>
      <div class="table">
        <b-table bordered outlined striped hover :items="url" :fields="fields"
          ><template #cell(shortUrl)="row">
            localhost:3000/{{row.value}}
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: [],
      add:{
        longUrl:'',
      },
      longUrl:'',
      apiget: 'http://localhost:3000/api/get-url',
      apipost: 'http://localhost:3000/api/create-short-url',
      fields: [
        { key: 'longUrl', label: 'longUrl', tdClass: 'center' },
        { key: 'shortUrl', label: 'shortUrl', tdClass: 'center' },
        { key: 'count', label: 'count', tdClass: 'center' },
      ],
    }
  },
  async mounted() {
    const result = await axios.get(this.apiget)
    this.url = result.data
    console.log(this.url)
  },
  methods:{
    async postUrl(){
      this.add.longUrl = this.longUrl
      console.log(this.add);
      const result = await axios.post(this.apipost,this.add)
      console.log(result);
      this.$router.go()
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
.short {
  display: flex;
  height: 100vh;
  font-family: 'Kanit', sans-serif;
  justify-content: center;
  background-color: #ffffff;
}
.inputUrl h1 {
  color: #000066;
  font-size: 48px;
  text-align: center;
  margin: 20px;
}
.inputUrl h1 span {
  color: #ffcc00;
}
input {
  height: 50px;
}
button {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
}
.btn-secondary {
  background-color: #000066;
  color: #ffcc00;
  border-color: #000066;
}
.btn-secondary:hover {
  background-color: #ffcc00;
  color: #000066;
  border-color: #000066;
}
.btn-secondary:not(:disabled):not(.disabled):active {
  background-color: #ffcc00;
  color: #000066;
  border-color: #000066;
}
.btn-secondary:focus {
  background-color: #000066;
  color: #ffcc00;
  border-color: #000066;
}
table{
  text-align: center;
}
</style>
