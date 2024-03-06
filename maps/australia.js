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
        backgroundColor: "#fbfbfe",
        zoomOnScroll: true,
        regionStyle: {
            initial: {
                "fill-opacity": 1,
                "stroke": '#050315',
                "stroke-width": 0.5
            },
            hover: {
                "fill-opacity": 0.8,
                "cursor": 'pointer'
            },
            selected: {
                "fill": '#050315'
            }
        },
        series: {
            regions: [{
                values: stateData,
                scale: ["#a9a6ff", "#3351d7"],
                normalizeFunction: "polynomial"
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html() + ' (Visitors - ' + stateData[code] + ')');
        }
    });
})
