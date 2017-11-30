
<template>
    <div>
        <el-button @click="changeTheme('a')">change theme A</el-button>
        <el-button @click="changeTheme('b')">change theme B</el-button>
        <el-button @click="changeTheme('c')">change theme C</el-button>
    </div>
</template>
<script>
    export default {
        created(){
            this.$store.commit('changeTheme',this.$style.a)
        },
        methods:{
            changeTheme(s){
                var obj = {
                    'a':this.$style.a,
                    'b':this.$style.b,
                    'c':this.$style.c
                }
                this.$store.commit('changeTheme',obj[s])
            }
        }
    }
</script>
<style module>
  .a{
    color: red;
    border:3px solid #000;
  }
  .b{
    color: orange;
    border:3px solid #ccc;
  }
  .c{
    color: pink;
    border:3px solid #eee;
  }
</style>