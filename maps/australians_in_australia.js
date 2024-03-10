stateData = {
    "AU-SA": 25240,
    "AU-NSW": 351760,
    "AU-WA": 80370,
    "AU-TAS": 9990,
    "AU-QLD": 159270,
    "AU-ACT": 10430,
    "AU-NT": 3000,
    "AU-VIC": 236680
}

$(function(){
    $('#map_in_au').vectorMap({
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
