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
var lyr_PetaKecamatankabupatenSemarang1_modifikasi_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peta-Kecamatan-kabupaten-Semarang-1_modifikasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PetaKecamatankabupatenSemarang1_modifikasi_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12262732.008349, -839117.576514, 12325880.527637, -789029.190729]
                            })
                        });var lyr_PetaKecamatankabupatenSemarang1_modifikasi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peta-Kecamatan-kabupaten-Semarang-1_modifikasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PetaKecamatankabupatenSemarang1_modifikasi_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12262732.008349, -839117.576514, 12325880.527637, -789029.190729]
                            })
                        });var format_produktivitas_2 = new ol.format.GeoJSON();
var features_produktivitas_2 = format_produktivitas_2.readFeatures(json_produktivitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_produktivitas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_produktivitas_2.addFeatures(features_produktivitas_2);var lyr_produktivitas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_produktivitas_2, 
                style: style_produktivitas_2,
                title: '<img src="styles/legend/produktivitas_2.png" /> produktivitas'
            });

lyr_PetaKecamatankabupatenSemarang1_modifikasi_0.setVisible(true);lyr_PetaKecamatankabupatenSemarang1_modifikasi_1.setVisible(true);lyr_produktivitas_2.setVisible(true);
var layersList = [baseLayer,lyr_PetaKecamatankabupatenSemarang1_modifikasi_0,lyr_PetaKecamatankabupatenSemarang1_modifikasi_1,lyr_produktivitas_2];
lyr_produktivitas_2.set('fieldAliases', {'id': 'id', 'KEC': 'KEC', 'UMUR 15-64': 'UMUR 15-64', });
lyr_produktivitas_2.set('fieldImages', {'id': 'TextEdit', 'KEC': 'TextEdit', 'UMUR 15-64': 'TextEdit', });
lyr_produktivitas_2.set('fieldLabels', {'id': 'inline label', 'KEC': 'inline label', 'UMUR 15-64': 'inline label', });
lyr_produktivitas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});