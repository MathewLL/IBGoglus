ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Region_etudie_1 = new ol.format.GeoJSON();
var features_Region_etudie_1 = format_Region_etudie_1.readFeatures(json_Region_etudie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_etudie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_etudie_1.addFeatures(features_Region_etudie_1);
var lyr_Region_etudie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_etudie_1, 
                style: style_Region_etudie_1,
                interactive: true,
                title: '<img src="styles/legend/Region_etudie_1.png" /> Region_etudie'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Region_etudie_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Region_etudie_1];
lyr_Region_etudie_1.set('fieldAliases', {'AN': 'AN', 'IDANPAR': 'IDANPAR', 'IDPAR': 'IDPAR', 'IDMAOANPAR': 'IDMAOANPAR', 'TYPPAR': 'TYPPAR', 'REFTYPPAR': 'REFTYPPAR', 'SUP': 'SUP', 'SUPHEC': 'SUPHEC', 'SOUPAR': 'SOUPAR', 'REFSOUPAR': 'REFSOUPAR', 'INDPARDRA': 'INDPARDRA', 'PARDRAI': 'PARDRAI', 'GROPRO': 'GROPRO', 'DESGROPRO': 'DESGROPRO', 'NBPRO': 'NBPRO', 'CODPRO1': 'CODPRO1', 'DESCODPR1': 'DESCODPR1', 'PRCSUPPR1': 'PRCSUPPR1', 'CODPRO2': 'CODPRO2', 'DESCODPR2': 'DESCODPR2', 'PRCSUPPR2': 'PRCSUPPR2', 'CODPRO3': 'CODPRO3', 'DESCODPR3': 'DESCODPR3', 'PRCSUPPR3': 'PRCSUPPR3', 'CODPRO4': 'CODPRO4', 'DESCODPR4': 'DESCODPR4', 'PRCSUPPR4': 'PRCSUPPR4', 'CODPRO5': 'CODPRO5', 'DESCODPR5': 'DESCODPR5', 'PRCSUPPR5': 'PRCSUPPR5', 'CODPRO6': 'CODPRO6', 'DESCODPR6': 'DESCODPR6', 'PRCSUPPR6': 'PRCSUPPR6', 'CODPRO7': 'CODPRO7', 'DESCODPR7': 'DESCODPR7', 'PRCSUPPR7': 'PRCSUPPR7', 'CODPRO8': 'CODPRO8', 'DESCODPR8': 'DESCODPR8', 'PRCSUPPR8': 'PRCSUPPR8', 'CODPRO9': 'CODPRO9', 'DESCODPR9': 'DESCODPR9', 'PRCSUPPR9': 'PRCSUPPR9', 'CODPRO10': 'CODPRO10', 'DESCODPR10': 'DESCODPR10', 'PRCSUPPR10': 'PRCSUPPR10', 'CODPRO11': 'CODPRO11', 'DESCODPR11': 'DESCODPR11', 'PRCSUPPR11': 'PRCSUPPR11', 'CODPRO12': 'CODPRO12', 'DESCODPR12': 'DESCODPR12', 'PRCSUPPR12': 'PRCSUPPR12', 'CODPRO13': 'CODPRO13', 'DESCODPR13': 'DESCODPR13', 'PRCSUPPR13': 'PRCSUPPR13', 'CODPRO14': 'CODPRO14', 'DESCODPR14': 'DESCODPR14', 'PRCSUPPR14': 'PRCSUPPR14', 'CODPRO15': 'CODPRO15', 'DESCODPR15': 'DESCODPR15', 'PRCSUPPR15': 'PRCSUPPR15', 'VARCUL': 'VARCUL', 'GRAMEL': 'GRAMEL', 'NBFAU': 'NBFAU', 'COMBOT': 'COMBOT', 'ANPREREC': 'ANPREREC', });
lyr_Region_etudie_1.set('fieldImages', {'AN': '', 'IDANPAR': '', 'IDPAR': '', 'IDMAOANPAR': '', 'TYPPAR': '', 'REFTYPPAR': '', 'SUP': '', 'SUPHEC': '', 'SOUPAR': '', 'REFSOUPAR': '', 'INDPARDRA': '', 'PARDRAI': '', 'GROPRO': '', 'DESGROPRO': '', 'NBPRO': '', 'CODPRO1': '', 'DESCODPR1': '', 'PRCSUPPR1': '', 'CODPRO2': '', 'DESCODPR2': '', 'PRCSUPPR2': '', 'CODPRO3': '', 'DESCODPR3': '', 'PRCSUPPR3': '', 'CODPRO4': '', 'DESCODPR4': '', 'PRCSUPPR4': '', 'CODPRO5': '', 'DESCODPR5': '', 'PRCSUPPR5': '', 'CODPRO6': '', 'DESCODPR6': '', 'PRCSUPPR6': '', 'CODPRO7': '', 'DESCODPR7': '', 'PRCSUPPR7': '', 'CODPRO8': '', 'DESCODPR8': '', 'PRCSUPPR8': '', 'CODPRO9': '', 'DESCODPR9': '', 'PRCSUPPR9': '', 'CODPRO10': '', 'DESCODPR10': '', 'PRCSUPPR10': '', 'CODPRO11': '', 'DESCODPR11': '', 'PRCSUPPR11': '', 'CODPRO12': '', 'DESCODPR12': '', 'PRCSUPPR12': '', 'CODPRO13': '', 'DESCODPR13': '', 'PRCSUPPR13': '', 'CODPRO14': '', 'DESCODPR14': '', 'PRCSUPPR14': '', 'CODPRO15': '', 'DESCODPR15': '', 'PRCSUPPR15': '', 'VARCUL': '', 'GRAMEL': '', 'NBFAU': '', 'COMBOT': '', 'ANPREREC': '', });
lyr_Region_etudie_1.set('fieldLabels', {'AN': 'inline label', 'IDANPAR': 'no label', 'IDPAR': 'no label', 'IDMAOANPAR': 'no label', 'TYPPAR': 'no label', 'REFTYPPAR': 'inline label', 'SUP': 'inline label', 'SUPHEC': 'no label', 'SOUPAR': 'no label', 'REFSOUPAR': 'no label', 'INDPARDRA': 'no label', 'PARDRAI': 'no label', 'GROPRO': 'inline label', 'DESGROPRO': 'inline label', 'NBPRO': 'inline label', 'CODPRO1': 'no label', 'DESCODPR1': 'no label', 'PRCSUPPR1': 'no label', 'CODPRO2': 'no label', 'DESCODPR2': 'no label', 'PRCSUPPR2': 'no label', 'CODPRO3': 'no label', 'DESCODPR3': 'no label', 'PRCSUPPR3': 'no label', 'CODPRO4': 'no label', 'DESCODPR4': 'no label', 'PRCSUPPR4': 'no label', 'CODPRO5': 'no label', 'DESCODPR5': 'no label', 'PRCSUPPR5': 'no label', 'CODPRO6': 'no label', 'DESCODPR6': 'no label', 'PRCSUPPR6': 'no label', 'CODPRO7': 'no label', 'DESCODPR7': 'no label', 'PRCSUPPR7': 'no label', 'CODPRO8': 'no label', 'DESCODPR8': 'no label', 'PRCSUPPR8': 'no label', 'CODPRO9': 'no label', 'DESCODPR9': 'no label', 'PRCSUPPR9': 'no label', 'CODPRO10': 'no label', 'DESCODPR10': 'no label', 'PRCSUPPR10': 'no label', 'CODPRO11': 'no label', 'DESCODPR11': 'no label', 'PRCSUPPR11': 'no label', 'CODPRO12': 'no label', 'DESCODPR12': 'no label', 'PRCSUPPR12': 'no label', 'CODPRO13': 'no label', 'DESCODPR13': 'no label', 'PRCSUPPR13': 'no label', 'CODPRO14': 'no label', 'DESCODPR14': 'no label', 'PRCSUPPR14': 'no label', 'CODPRO15': 'no label', 'DESCODPR15': 'no label', 'PRCSUPPR15': 'no label', 'VARCUL': 'no label', 'GRAMEL': 'no label', 'NBFAU': 'no label', 'COMBOT': 'no label', 'ANPREREC': 'no label', });
lyr_Region_etudie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});