<template>
    <div id="home">
        <div class="wrap-banner">
            <div class="main-title">
                <div class="text-center">
                    <div id="logo">
                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                    </div>
                    <h1 class="display-3">{{bienvenida}}</h1>
                </div>
            </div>
            <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#00695C" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
            </vue-particles>
        </div>
        <div class="container-fluid">
            <div class="row color-bar">
                <div class="col" style="background: #F44336"></div>
                <div class="col" style="background: #FFBF09"></div>
                <div class="col" style="background: #3BC3B6"></div>
                <div class="col" style="background: #1A7DB3"></div>
                <div class="col" style="background: #1D2029"></div>
            </div>
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
        <div class="container">
            <div class="card-deck">
                <a class="card mb-4" href="#">
                    <div class="card-body">
                        <h4 class="card-title">
                            <i class="fa fa-handshake-o" aria-hidden="true"></i>
                            Crowdfunding
                        </h4>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </a>
                <a class="card mb-4" href="#">
                    <div class="card-body">
                        <h4 class="card-title">
                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                            Foro (Plaza seca)
                        </h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </a>
                <a class="card mb-4" href="#">
                    <div class="card-body">
                        <h4 class="card-title">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Contacto
                        </h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </a>
                <a class="card mb-4" href="#">
                    <div class="card-body">
                        <h4 class="card-title">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            Comunidad
                        </h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="mt-5 container">
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
    padding: 15px 0;
}

a.card {
    color: #212529;
    text-decoration: none;
}

a.card:hover {
    background: #526171;
    color: #FFF;
}
</style>