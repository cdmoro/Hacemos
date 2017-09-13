<template>
    <div id="home">
        <div class="wrap-banner">
            <div class="main-title">
                <div class="text-center">
                    <h1 class="display-3">{{bienvenida}}</h1>
                    <!-- <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> -->
                </div>
            </div>
            <vue-particles
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
        </div>
        <section id="services">
            <div class="container">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bienvenida: "¡Bienvenido/a!"
            }
        }
    }
</script>