$(function(){
    var palette = ['#8499f5', '#3351d7', '#ffffff'];

    const generateColors = function(){
        var colors = {},
            key;

        for (key in map.regions) {
        colors[key] = palette[Math.floor(Math.random()*palette.length)];
        }
        return colors;
    }

    const map = new jvm.Map({
        map: 'world_merc',
        container: $('#map_landing'),
        backgroundColor: "#fbfcfe",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#fff',
                "fill-opacity": 1,
                stroke: '#3a3a3a',
                "stroke-width": 1,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            }
        },
        series: {
            regions: [{
                attribute: 'fill'
            }]
        }
    });
    map.series.regions[0].setValues(generateColors());
})