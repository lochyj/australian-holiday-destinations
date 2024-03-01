stateData = {
    "AU-SA": 27,
    "AU-NSW": 36,
    "AU-WA": 10,
    "AU-TAS": 15,
    "AU-QLD": 27,
    "AU-ACT": 23,
    "AU-NT": 7
}

$(function() {
    $('#map_au').vectorMap({
        map: 'au_merc',
        backgroundColor: "#0a131e",
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#fff',
                "fill-opacity": 1,
                stroke: '#0a131e',
                "stroke-width": 1,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: '#5572f7'
            },
            selectedHover: {
            }
        },
        series: {
            regions: [{
                values: stateData,
                scale: ["#8499f5", "#3351d7"],
                normalizeFunction: "polynomial"
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html() + ' (Visitors - ' + stateData[code] + ')');
        }
    });
})
