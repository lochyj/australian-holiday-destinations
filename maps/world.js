countryData = {
    "US": 100,
    "CA": 10,
}

$(function() {
    $('#map_world').vectorMap({
        map: 'world_merc',
        backgroundColor: "#fbfcfe",
        zoomOnScroll: true,
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
            },
            selected: {
                fill: '#5572f7'
            }
        },
        series: {
            regions: [{
                values: countryData,
                scale: ["#8499f5", "#3351d7"],
                normalizeFunction: "polynomial"
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html() + ' (Visitors - ' + countryData[code] + ')');
        }
    });
})
