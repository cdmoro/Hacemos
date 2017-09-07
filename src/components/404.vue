<template>
    <section id="no-section">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3" v-text="title"></h1>
                <p class="lead" v-text="desc"></p>
            </div>
        </div>
        <div class="text-center">
            <router-link class="btn btn-outline-info" tag="button" to="/" v-text="volver"></router-link>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: "Ups: Parece que hubo un error",
                desc: "La página que intentás visitar no está disponible.",
                volver: "Volver al inicio"
            }
        }
    }
</script>