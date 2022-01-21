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
var lyr_UMUR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "UMUR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UMUR_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12262732.008349, -839117.576514, 12325880.527637, -789029.190729]
                            })
                        });var format_umur014_1 = new ol.format.GeoJSON();
var features_umur014_1 = format_umur014_1.readFeatures(json_umur014_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_umur014_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_umur014_1.addFeatures(features_umur014_1);var lyr_umur014_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_umur014_1, 
                style: style_umur014_1,
                title: '<img src="styles/legend/umur014_1.png" /> umur 0-14'
            });

lyr_UMUR_0.setVisible(true);lyr_umur014_1.setVisible(true);
var layersList = [baseLayer,lyr_UMUR_0,lyr_umur014_1];
lyr_umur014_1.set('fieldAliases', {'nama kec': 'nama kec', 'umur0-14': 'umur0-14', });
lyr_umur014_1.set('fieldImages', {'nama kec': 'TextEdit', 'umur0-14': 'TextEdit', });
lyr_umur014_1.set('fieldLabels', {'nama kec': 'inline label', 'umur0-14': 'inline label', });
lyr_umur014_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});