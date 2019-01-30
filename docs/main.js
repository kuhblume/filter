function convertP(add) {
    var mm = document.getElementById(add).value;
    document.getElementById("test").style.filter+=add+'('+mm+'%)';
}
function convertD(add) {
    var mm = document.getElementById(add).value;
    document.getElementById("test").style.filter+=add+'('+mm+'deg)';
}
function convertPx(add) {
    var mm = document.getElementById(add).value;
    document.getElementById("test").style.filter+=add+'('+mm+'px)';
}