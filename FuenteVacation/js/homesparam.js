const URL_VARS = {};

window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    URL_VARS[key] = decodeURI(value);
});

if('homeId' in URL_VARS){
    document.getElementById("home").innerHTML = URL_VARS.homeId;
}
