<template>
    <div ref="map" style="width: 100%; height: 400px"></div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        if (!window.kakao || !window.kakao.maps) {
            const script = document.createElement("script");
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=181f0a42e86a3a655720fcb452a96e31";
            /* global kakao */
            script.addEventListener("load", () => {
                kakao.maps.load(this.initMap);
            });
            document.head.appendChild(script);
        }
        else kakao.maps.load(this.initMap);
    },
    methods: {
        initMap() {
            const container = this.$refs.map;
            const options = {
                center: new kakao.maps.LatLng(
                    37.484425126315195,
                    127.00912693382395
                ),
                level: 5,
            };
            this.map = new kakao.maps.Map(container, options);

            const zoomControl = new kakao.maps.ZoomControl();
            this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            const markerPosition = new kakao.maps.LatLng(
                37.484425126315195,
                127.00912693382395
            );
            const marker = new kakao.maps.Marker({ position: markerPosition });
            marker.setMap(this.map);
        },
    },
};
</script>

<style></style>
