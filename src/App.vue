<template>
   <div>
      <div class="container" style="margin-top: 1rem">
         <h2 :style="{color: items.length > 2 ? 'red': 'teal'}">Страница с постами:</h2>
         <input class="input" type="text" :placeholder="plasweholder"
                v-model.trim="input" v-on:keypress.enter="addItem">
         <button class="button" @click="addItem">addItem</button>
         <ul v-if="items.length > 0">
            <li :class="input.length > 4 ? 'active' : '' " v-for="(item, index) in items" :key="index">{{ touppercase(item) }}
               <button class="button" @click="delItem(index)">Удалить</button>
            </li>
            <hr style="border: 2px solid red"/>
            <li  @> Количество заметок: {{ items.length }} | Удвоение с computed:{{ dobbleContComputed }}</li>
<!--            <p v-once>{{title}}</p>-->
<!--            <p v-text="title"></p>-->
<!--            <p v-pre >{{title}}</p>-->
<!--            <p v-html >{{title}}</p>-->
<!--            <p v-cloak >{{title}}</p>-->
         </ul>
         <p v-else>заметок пока нет</p>
         <div v-for="(item, i) of obj" :key="item">{{i}} </div>
         <div class="app-btns">
            <MySelect class="select" v-model="selectedSort" :optionsArray="options"></MySelect>
            <MyButton @click.native="showDialogs"> Создать пост</MyButton>
         </div>
         <MyDialog @hideDialog="dialogsVisible" :dialogsVisible="dialogsVisible">
            <Form @create="createPost"/>
         </MyDialog>
         <Posts v-if="!isPostLoading" :posts="posts" @remove="removePost"/>
         <div v-else>loading</div>
      
      
      </div>
   </div>
</template>
<script>
import Form from "@/components/Form.vue"
import Posts from "@/components/Posts"
import axios from "axios"

export default {
   data() {
      return {
         items: ['items1', 'items2'],
         input: '',
         plasweholder: 'text',
         posts: [],
         title: "",
         body: "",
         dialogsVisible: false,
         isPostLoading: false,
         selectedSort: "",
         options: [
            {value: "Один", name: "А"},
            {value: "Два", name: "Б"},
         ],
      }
   },
   methods: {
      dobbleCoutn(count) {
         console.log('dobbleCount')
         return count * 2
      },
      touppercase(item) {
         return item.toUpperCase()
      },
      delItem(index) {
         // this.items = this.items.filter(i => i[index] !== item[index] )
         this.items.splice(index, 1)
      },
      addItem() {
         if (this.input !== '') {
            this.items.push(this.input)
            this.input = ''
         }
      },
      createPost(post) {
         this.posts.push(post)
      },
      removePost(post) {
         this.posts = this.posts.filter((p) => p.id !== post.id)
      },
      showDialogs() {
         this.dialogsVisible = true
      },
      hideDialog() {
         this.dialogsVisible = false
      },
      
      async fetchPosts() {
         try {
            this.isPostLoading = true
            setTimeout(async () => {
               const response = await axios.get(
                   "https://jsonplaceholder.typicode.com/posts?_limit=5"
               )
               this.posts = response.data
               this.isPostLoading = false
            }, 2000)
         } catch (e) {
            // alert("mistakes")
         }
      },
   },
   mounted() {
      this.fetchPosts()
   },
   watch: {
      input(value) {
         if (value.length > 10) {
            this.input = ''
         }
         console.log('watch value: ', value)
      }
   },
   computed: {
      dobbleContComputed() {
         console.log('dobbleContComputed')
         return this.items.length * 2
      }
   },
   components: {
      Form,
      Posts,
   },
   // watch: {
   //    selectedSort(newValue) {
   //       this.posts.sort((post1, post2) => {
   //          return post1[newValue]?.localeCompare(post2[newValue])
   //       })
   //    },
   // },
}
</script>
<style scoped>
.app-btns {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.input {
   width: 100%;
   padding: 10px;
   border: 1px solid teal;
   margin-bottom: 10px;
}

.button {
   padding: 5px 20px;
   border: 1px solid teal;
   border-radius: 5px;
   cursor: pointer;
   background: #fff;
   
}

ul {
   margin: 0;
   padding: 10px 5px;
}

li {
   padding: 10px;
   margin-bottom: 10px;
   display: flex;
   width: 100%;
   list-style: none;
   justify-content: space-between;
   align-items: center;
   border: 1px solid teal;
}
li.active{
   background: teal;
   color: #fff;
}
</style>
