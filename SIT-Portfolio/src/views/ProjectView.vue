<script setup>

import { RouterView }from "vue-router";
import { routerViewLocationKey } from 'vue-router';

</script>

<template>
    
    <div class="container">
        <div class="card">
            <div class="card-img">
                <img src="../assets/Project-One.jpeg" alt="">
            </div>

            <div class="card-body">
                <h2 class="card-title">Jenkins Pipeline</h2>
                <p class="card-intro">
                    Developed out for SIT223 , this assessment demonstrates my understanding of how a 
                    pipeline is developed for rolling out software. 
                </p>
            </div>
        </div>
    </div>
    


<routerView/>
</template>    
 

<style scoped>
*,
*:after,
*:before {
    box-sizing: border-box;
}

body {
    background-color: rgb(100, 124, 177);
}

.card {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    flex-grow: 0;
    max-width: 100%;
    background-color: rgb(100, 124, 177);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem;
}

.card-img{
    padding-bottom: 56.25%;
    position: relative;
}

.card-img img{
    position: absolute;
    width: 100%;
}

.card-body {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.75rem;
    line-height: 3.10;
    font-weight: 700;
}

.card-intro {
    margin-top: 0.75rem;
    line-height: 1.5;
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


}
</style>


