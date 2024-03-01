countryData = {
    "FJ": 9,
    "CA": 6,
    "HK": 10,
    "CH": 12,
    "BD": 2,
    "FR": 11,
    "IN": 9,
    "GR": 3,
    "MY": 12,
    "JP": 15,
    "US": 10,
    "AL": 1,
    "KR": 3,
    "KH": 6,
    "VU": 4,
    "ID": 4,
    "BE": 3,
    "MM": 2,
    "BN": 2,
    "DE": 4,
    "CH": 3,
    "LK": 8,
    "SG": 21,
    "NZ": 11,
    "OM": 2,
    "GP": 1,
    "AQ": 1,
    "UK": 15,
    "VE": 1,
    "CY": 1,
    "EG": 3,
    "HR": 2,
    "IT": 6,
    "US": 5,
    "AE": 8,
    "TH": 12,
    "MO": 3,
    "PK": 2,
    "RU": 3,
    "AR": 1,
    "VN": 9,
    "DK": 3,
    "CR": 1,
    "LA": 2,
    "SA": 3,
    "VI": 1,
    "NL": 5,
    "CU": 2,
    "IE": 2,
    "WK": 1,
    "QA": 2,
    "BZ": 1,
    "TW": 2,
    "WF": 1,
    "ES": 5,
    "BO": 1,
    "PS": 2,
    "TR": 2,
    "BA": 1,
    "EH": 1,
    "YE": 1,
    "BG": 1,
    "ZM": 1,
    "ZW": 1,
    "TN": 1,
    "CL": 1,
    "UA": 1,
    "CZ": 1,
    "EC": 1,
    "EE": 1,
    "FL": 1,
    "GT": 1,
    "VA": 1,
    "HU": 1,
    "IL": 1,
    "JO": 1,
    "KP": 1,
    "LV": 1,
    "LB": 1,
    "LI": 1,
    "LT": 1,
    "MK": 1,
    "MX": 1,
    "MC": 1,
    "MN": 1,
    "MA": 1,
    "PE": 1,
    "PL": 1,
    "PT": 1,
    "RO": 1,
    "CS": 1,
    "SK": 1,
    "SI": 1,
    "SE": 1,
    "SY": 1,
    "UY": 1
}

$(function() {
    $('#map_world').vectorMap({
        map: 'world_merc',
        backgroundColor: "#0a131e",
        zoomOnScroll: true,
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
