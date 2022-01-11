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
var format_nama_kec_0 = new ol.format.GeoJSON();
var features_nama_kec_0 = format_nama_kec_0.readFeatures(json_nama_kec_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nama_kec_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nama_kec_0.addFeatures(features_nama_kec_0);var lyr_nama_kec_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nama_kec_0, 
                style: style_nama_kec_0,
    title: 'nama_kec<br />\
    <img src="styles/legend/nama_kec_0_0.png" /> Bulu<br />\
    <img src="styles/legend/nama_kec_0_1.png" /> Gunem<br />\
    <img src="styles/legend/nama_kec_0_2.png" /> Kaliori<br />\
    <img src="styles/legend/nama_kec_0_3.png" /> Kragan<br />\
    <img src="styles/legend/nama_kec_0_4.png" /> Pamotan<br />\
    <img src="styles/legend/nama_kec_0_5.png" /> Pancur<br />\
    <img src="styles/legend/nama_kec_0_6.png" /> Rembang<br />\
    <img src="styles/legend/nama_kec_0_7.png" /> Sale<br />\
    <img src="styles/legend/nama_kec_0_8.png" /> Sarang<br />\
    <img src="styles/legend/nama_kec_0_9.png" /> Sedan<br />\
    <img src="styles/legend/nama_kec_0_10.png" /> Sluke<br />\
    <img src="styles/legend/nama_kec_0_11.png" /> Sulang<br />\
    <img src="styles/legend/nama_kec_0_12.png" /> Sumber<br />\
    <img src="styles/legend/nama_kec_0_13.png" /> Lasem<br />'
        });

lyr_nama_kec_0.setVisible(true);
var layersList = [baseLayer,lyr_nama_kec_0];
lyr_nama_kec_0.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', 'web': 'web', 'Gambar': 'Gambar', });
lyr_nama_kec_0.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', 'web': 'TextEdit', 'Gambar': 'Photo', });
lyr_nama_kec_0.set('fieldLabels', {'id': 'inline label', 'nama_kec': 'inline label', 'web': 'inline label', 'Gambar': 'inline label', });
lyr_nama_kec_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});