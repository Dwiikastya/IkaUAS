var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Praktek_0 = new ol.format.GeoJSON();
var features_Praktek_0 = format_Praktek_0.readFeatures(json_Praktek_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Praktek_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Praktek_0.addFeatures(features_Praktek_0);var lyr_Praktek_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Praktek_0, 
                style: style_Praktek_0,
    title: 'Praktek<br />\
    <img src="styles/legend/Praktek_0_0.png" /> 24.456<br />\
    <img src="styles/legend/Praktek_0_1.png" /> 28.151<br />\
    <img src="styles/legend/Praktek_0_2.png" /> 29.765<br />\
    <img src="styles/legend/Praktek_0_3.png" /> 31.059<br />\
    <img src="styles/legend/Praktek_0_4.png" /> 37.038<br />\
    <img src="styles/legend/Praktek_0_5.png" /> 38.821<br />\
    <img src="styles/legend/Praktek_0_6.png" /> 39.230<br />\
    <img src="styles/legend/Praktek_0_7.png" /> 42.779<br />\
    <img src="styles/legend/Praktek_0_8.png" /> 50.229<br />\
    <img src="styles/legend/Praktek_0_9.png" /> 50.955<br />\
    <img src="styles/legend/Praktek_0_10.png" /> 55.525<br />\
    <img src="styles/legend/Praktek_0_11.png" /> 61.328<br />\
    <img src="styles/legend/Praktek_0_12.png" /> 65.387<br />\
    <img src="styles/legend/Praktek_0_13.png" /> 91.577<br />'
        });

lyr_Praktek_0.setVisible(true);
var layersList = [baseLayer,lyr_Praktek_0];
lyr_Praktek_0.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'LAKI-LAKI': 'LAKI-LAKI', 'PEREMPUAN': 'PEREMPUAN', 'JUMLAH': 'JUMLAH', });
lyr_Praktek_0.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'LAKI-LAKI': 'TextEdit', 'PEREMPUAN': 'TextEdit', 'JUMLAH': 'TextEdit', });
lyr_Praktek_0.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'kode_prop': 'inline label', 'kode_kab': 'inline label', 'LAKI-LAKI': 'inline label', 'PEREMPUAN': 'inline label', 'JUMLAH': 'inline label', });
lyr_Praktek_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});