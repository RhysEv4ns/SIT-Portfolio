<script setup>
import { routerViewLocationKey } from 'vue-router';


</script>

<template>



  <div class="main-container">
    <div class="container-one">
        <div class="profile">
            <img src="../assets/Portfolio-icon.png" alt="">
            <div><strong>Who Am I?: {{ WhoAmI }}</strong></div>

            <input type="checkbox" id="rhys" value="Rhys" v-model="checkedNames">
            <label for="rhys"><strong>Rhys Evans</strong></label>

            <input type="checkbox" id="sd" value="Software Developer" v-model="checkedNames">
            <label for="sd"><strong>Software Developer</strong></label>
            

        </div>
        <div class="external-links">
                <div class="link">
                    <a href="https://github.com/RhysEv4ns"><img src="../assets/github.png" alt=""></a>
                </div>
                <div class="link">
                   <a href="https://www.linkedin.com/in/rhys-evans-a48479281/"><img src="../assets/linkedin.png" alt=""></a>
                </div>
        </div>
    </div>
    <div class="container-two">
        <div class="about-me">
            <h1> About Me</h1>
            <p>
                Student studying software development with a focus on HTML, CSS and JS.
                I have experience working with Python and frameworks such as Django and Mysql. 
                These were attained during an Information Technology bachalors degree.
                I have also begun my jouney in JS and frameworks such as React and Vue.
            </p>
        </div>
        <div class="my-skills">
            <h1> My Skills </h1>
                <div class="column-one">
                    <img src="../assets/java-script.png" alt="">
                    <img src="../assets/css-3.png" alt="">
                    <img src="../assets/html.png" alt="">  
                </div>
                <div class="column-two">    
                    <img src="../assets/python.png" alt="">
                    <img src="../assets/c-sharp.png" alt="">
                    <img src="../assets/sql-server.png" alt="">
                
                </div>    
        </div>
    </div>
  </div>
  <routerView />
</template>

<style scoped>



body {
    background-color: rgb(100, 124, 177);
}
    img{
        height: 60px;
    }

    .main-container{
        display: flex;
        flex-direction: row;
        background-color: rgb(100, 124, 177);
        border-radius: 25px;
    }

    .container-one{
        background-color: rgb(100, 124, 177);
        padding: 2.5%;
        width: 25%;
        border-radius: 25px;

    }

    .profile img{
        height: 10rem;
        border-radius: 50%;
    }

    .external-links{
        display: flex;
        flex-direction: center;
        margin: 3.5%;
    }
    .container-two{
        background-color: rgb(112, 107, 178);
        margin: 4.5%;
        width: 75%;
        border-radius: 25px;
    }

    .about-me{
        text-align: left;
        margin: 3.5%;
    }

    .my-skills {
        text-align: left;
        margin: 3.5%;
        
        
    }

   
  
       
</style>a
