<template>
    <div class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading mt-5">{{title}}</h1>
            <p class="lead text-muted">{{desc}}</p>
            <p>
                <router-link class="btn btn-outline-info" tag="button" to="/">{{volver}}</router-link>
            </p>
        </div>
    </div>
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