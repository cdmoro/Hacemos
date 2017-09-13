<template>
    <div id="home">
        <div class="wrap-banner">
            <div class="main-title">
                <div class="text-center">
                    <div id="logo">
                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                    </div>
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
                :linesWidth="2"
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
        <div class="container">
            <h2>Nos podés encontrar acá</h2>
        </div>
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bienvenida: "¡Bienvenido/a!"
            }
        },
        mounted: function() {
            this.initMap()
        },
        methods: {
            initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    scrollwheel: false,
                    draggable: false,
                    disableDefaultUI: true,
                    center: new google.maps.LatLng(-34.6037132,-58.3816179)
                });
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-34.6037132,-58.3816179),
                    map: map
                });
                google.maps.event.addDomListener(window, 'resize', function() {
                    map.setCenter(new google.maps.LatLng(-34.6037132,-58.3816179));
                });
            }
        }
    }
</script>