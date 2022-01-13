


  module.exports = {
    screenchart: function() {
    var canvas = document.getElementById('chart_container');
    var context = canvas.getContext('2d');
    canvas.toDataURL('png');
    }
 }