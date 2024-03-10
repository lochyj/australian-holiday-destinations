countryData = {
    "ID": 1368,
    "NZ": 1263,
    "US": 667,
    "UK": 604,
    "JP": 509,
    "TH": 500,
    "IN": 488,
    "FJ": 387,
    "VN": 332,
    "SG": 326
}

$(function() {
    $('#map_aus_world').vectorMap({
        map: 'world_merc',
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
                values: countryData,
                scale: ["#a9a6ff", "#3351d7"],
                normalizeFunction: "polynomial"
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html() + ' (Visitors - ' + countryData[code] + 'k)');
        }
    });
})
