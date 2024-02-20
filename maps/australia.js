$('#map_au').vectorMap({
    map: 'au_merc',
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
        },
        selected: {
            fill: '#5572f7'
        },
        selectedHover: {
        }
    }
});