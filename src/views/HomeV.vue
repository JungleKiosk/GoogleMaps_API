<script>
import axios from 'axios'

export default {
    methods: {
        locatorButtonPressed() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.getAdressForm(position.coords.latitude, position.coords.longitude)
                        /* console.log(position.coords.latitude);
                        console.log(position.coords.longitude); */
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );
            } else {
                console.log("Error! Your browser does not support geolocation API");
            }
        },
        getAdressForm(lat, long) {
            const apiKey = 'myKey'; // Sostituisci con la tua chiave API
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;

            axios.get(url)
                .then(response => {
                    if (response.data.error_message) {
                        console.log(response.data.error_message);
                    } else {
                        console.log(response.data.results[0].formatted_address);
                    }
                })
                .catch(error => {
                    console.log(error.message);
                });
        }
    },
};
</script>

<template>
    <div id="title" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6 text-center">
                <h1>Google Maps - API</h1>
                <p>Home🏡</p>
                <form action="">
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Enter your address" aria-label="Username"
                            aria-describedby="addon-wrapping" />
                        <button class="input-group-text bg-warning text-white" @click.prevent="locatorButtonPressed">
                            🔎
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
