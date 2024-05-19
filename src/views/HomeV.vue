<script>
export default {
    methods: {
        locatorButtonPressed() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );
            } else {
                console.log("Error! Your browser does not support geolocation API");
            }
        },
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
                        <button class="input-group-text bg-warning text-white"
                            @click.prevent="locatorButtonPressed">🔎</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
