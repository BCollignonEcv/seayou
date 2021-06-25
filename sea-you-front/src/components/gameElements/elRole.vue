<template>
    <div class="role-component" v-on:click="select" v-bind:class="{ selected: isSelected | isMandatory, mandatory: isMandatory}">
        <img class="logo-w-responsive" :src="'/static/img/roles/' + pathImg">
        <p class="role-title">{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: ['name', 'pathImg', 'mandatory'],
    data() {
        return {
            isSelected: false,
            isMandatory: this.mandatory
        }
    },
    methods: {
        select: function (){
            if(this.isMandatory != true){
                this.isSelected = !this.isSelected
            }
        }
    }
}
</script>

<style>
  .role-component.mandatory{
      cursor:not-allowed;
    }

  .role-component{
      width: 120px;
      border-radius: 5px;
      padding: 1rem;
      cursor: pointer;
  }

  .role-component.selected{
    background-color: var(--color-thirdly);
  }

  .role-component img{
    display:block;
    margin:auto;
    width: 4vw;
  }
  
  .role-component p.role-title{
    display: block;
    text-align: center;
    margin-top: .5rem ;
  }
</style>