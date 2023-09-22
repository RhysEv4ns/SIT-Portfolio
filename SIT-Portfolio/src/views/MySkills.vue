<script setup>

import { RouterView }from "vue-router";
import { routerViewLocationKey } from 'vue-router';

</script>

<template>
    
    <body>
        <div class="container">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="../assets/html.png" alt="">
                        <h3>HTML</h3>
                    </div>
                </div>

                <div class="face face2">
                    <div class="content">
                        <p1>Having moderate experience with HTML, I have built several simple websites. This is my first utilising a vue router framework.</p1>
                        <a href=""></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="../assets/css-3.png" alt="">
                        <h3>CSS</h3>
                    </div>
                </div>

                <div class="face face2">
                    <div class="content">
                        <p1>Having moderate expereince with CSS, I do enjoy working with front end styling. I find creating little
                            elements such as these cards to be brilliant. 
                        </p1>
                        <a href=""></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="../assets/java-script.png" alt="">
                        <h3>java-script</h3>
                    </div>
                </div>

                <div class="face face2">
                    <div class="content">
                        <p1>Recently began undertaking studies in JS with a focus on the react framework.
                            This is my first vue project for end user rendering as opposed to server side rendering.
                        </p1>
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
    </body>


<routerView/>
</template>    
 

<style scoped>

body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 1200px;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.container card {
    position: relative;
    cursor: pointer;
}

.container .card .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1 {
    background: rgb(100, 124, 177);
    transform: translateY(0);
}

.container .card .face.face1 .content {
    opacity: 100;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content {
    opacity: 1;  
}

.container .card:hover .face.face1 .content img {
    max-width: 100px;
}    

.container .card .face.face1 .content h3 {
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translate(Y);
}

.container .card:hover .face.face2 {
    transform: translateY(0);
}





</style>

