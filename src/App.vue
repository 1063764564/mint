<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
//  设定苹果手机input框不自动放大监听
document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});
var lastTouchEnd = 0;
document.addEventListener(
    "touchend",
    function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    },
    false
);
export default {
    name: 'App',

}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
