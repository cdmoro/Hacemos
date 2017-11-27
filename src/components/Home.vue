<template>
    <div id="home">
        <div class="wrap-banner">
            <div class="main-title">
                <div class="text-center">
                    <div id="logo">
                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                    </div>
                    <h1 class="display-3">{{ nombre }}</h1>
                    <p>
                        <router-link to="/nosotros" class="btn btn-link text-dark">¿Quiénes somos?</router-link>
                    </p>
                </div>
            </div>
            <!-- <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#00695C" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
            </vue-particles> -->
        </div>
        <section id="services">
            <div class="mb-5 container">
                <div class="row justify-content-md-center">
                    <div class="col-md-8 col-xs-12">
                        <video width="100%" controls>
                            <source src="src/assets/manifestacion.mp4" type="video/mp4"> Tu explorador no soporta videos
                        </video>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <div class="text-muted">05/08/2017</div>
                        <div>
                            Video sobre la movilización
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="pt-5 pb-3 bg-dark">
            <b-container>
                <b-row>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a class="card border-dark" href="#">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                    Crowdfunding
                                </h4>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a class="card border-dark" href="#">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                                    Foro (Plaza seca)
                                </h4>
                                <p class="card-text">This card has supporting text below</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a class="card border-dark" href="#">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    Contacto
                                </h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a class="card border-dark" href="#">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                    Comunidad
                                </h4>
                                <p class="card-text">This is a wider card with supporting text below</p>
                            </div>
                        </a>
                    </div>
                </b-row>
            </b-container>
        </div>
        <b-container class="mt-4 mb-4">
            <b-row>
                <div class="col-md-5 col-xs-12 pt-3">
                    <h2>
                        <i class="fa fa-map-marker" aria-hidden="true" style="color: #F44336;"></i>
                        Nos podés encontrar acá
                    </h2>
                    <b-card class="text-muted">
                            <div>Calle 123</div>
                            <div class="small">Localidad, Provincia</div>
                    </b-card>
                </div>
                <b-col>
                    <div id="map"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: "Hacemos.AEFIP"
        }
    },
    mounted: function() {
        this.initMap()
    },
    methods: {
        initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                scrollwheel: false,
                draggable: false,
                disableDefaultUI: true,
                center: new google.maps.LatLng(-34.6037132, -58.3816179),
                // https://snazzymaps.com/style/119980/e
                styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "invert_lightness": true }, { "saturation": 10 }, { "lightness": 30 }, { "gamma": 0.5 }, { "hue": "#435158" }] }]
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-34.6037132, -58.3816179),
                map: map
            });
            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(new google.maps.LatLng(-34.6037132, -58.3816179));
            });
        }
    }
}
</script>

<style>
.color-bar .col {
    padding: 20px 0;
    transition: transform .4s ease;
    transform-origin: 0 0;
}

.color-bar .col:hover {
    transform: scale(1, 1.2);
}

a.card {
    color: #212529;
    text-decoration: none;
    min-height: 150px;
    height: 100%;
    transition: background, box-shadow .5s ease;
}

a.card:hover {
    background: #526171;
    color: #FFF;
    box-shadow: #222 0px 4px 8px 1px;
}
</style>