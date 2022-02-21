<template>
<div id="app">
  <h1>Posts Application</h1>

    <div v-for="post in posts" class="post">
      {{ post.title }} with id = {{ post._id }}

      <div v-for="comment in comments">
        comments:
        {{comment.content}}
      </div>
      <br>
      <br>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      comments:null
    }
  },
  async mounted () {
    await axios
      .get('api/posts/v1/posts/')
      .then(response => (this.posts = response.data.data))

    await axios
      .get('api/comments/v1/posts/'+process.env.postId+'/comments')
      .then(res=>(this.comments = res.data.data))
  }
};
</script>

<style>
  body{
    background-color:#fefaeb;
    font-family: sans-serif;
    margin: 3%
  }
</style>