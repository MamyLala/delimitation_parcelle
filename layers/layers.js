ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([47.715771, -14.039469, 48.807714, -13.534434]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Commune_Ambanja_1 = new ol.format.GeoJSON();
var features_Commune_Ambanja_1 = format_Commune_Ambanja_1.readFeatures(json_Commune_Ambanja_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Commune_Ambanja_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_Ambanja_1.addFeatures(features_Commune_Ambanja_1);
var lyr_Commune_Ambanja_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_Ambanja_1, 
                style: style_Commune_Ambanja_1,
                popuplayertitle: 'Commune_Ambanja',
                interactive: false,
                title: '<img src="styles/legend/Commune_Ambanja_1.png" /> Commune_Ambanja'
            });
var format_parcelle_2025_2 = new ol.format.GeoJSON();
var features_parcelle_2025_2 = format_parcelle_2025_2.readFeatures(json_parcelle_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_parcelle_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_2025_2.addFeatures(features_parcelle_2025_2);
var lyr_parcelle_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_2025_2, 
                style: style_parcelle_2025_2,
                popuplayertitle: 'parcelle_2025',
                interactive: true,
                title: '<img src="styles/legend/parcelle_2025_2.png" /> parcelle_2025'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Commune_Ambanja_1.setVisible(true);lyr_parcelle_2025_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Commune_Ambanja_1,lyr_parcelle_2025_2];
lyr_Commune_Ambanja_1.set('fieldAliases', {'ADM2_PCODE': 'ADM2_PCODE', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_TYPE': 'ADM3_TYPE', 'BS': 'BS', 'BP': 'BP', });
lyr_parcelle_2025_2.set('fieldAliases', {'start': 'start', 'end': 'end', 'today': 'today', 'Enqueteur': 'Enqueteur', 'Commune': 'Commune', 'Fokontany': 'Fokontany', 'Reboiseur1': 'Reboiseur1', 'Total Plan': 'Total Plan', 'Espece': 'Espece', 'Nom du sit': 'Nom du sit', 'nom_form': 'nom_form', 'instance_n': 'instance_n', 'GPS_Parcel': 'GPS_Parcel', 'latitude Y': 'latitude Y', 'longitude': 'longitude', 'altitude': 'altitude', 'Précision': 'Précision', 'surface_m2': 'surface_m2', 'surface_ha': 'surface_ha', 'Superficie': 'Superficie', 'Date d’e': 'Date d’e', 'Reboiseur': 'Reboiseur', '_id': '_id', '_submissio': '_submissio', '_index': '_index', });
lyr_Commune_Ambanja_1.set('fieldImages', {'ADM2_PCODE': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_TYPE': 'TextEdit', 'BS': 'TextEdit', 'BP': 'TextEdit', });
lyr_parcelle_2025_2.set('fieldImages', {'start': 'DateTime', 'end': 'DateTime', 'today': 'DateTime', 'Enqueteur': 'TextEdit', 'Commune': 'TextEdit', 'Fokontany': 'TextEdit', 'Reboiseur1': 'TextEdit', 'Total Plan': 'TextEdit', 'Espece': 'TextEdit', 'Nom du sit': 'TextEdit', 'nom_form': 'TextEdit', 'instance_n': 'TextEdit', 'GPS_Parcel': 'TextEdit', 'latitude Y': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'Précision': 'TextEdit', 'surface_m2': 'TextEdit', 'surface_ha': 'TextEdit', 'Superficie': 'TextEdit', 'Date d’e': 'DateTime', 'Reboiseur': 'TextEdit', '_id': 'TextEdit', '_submissio': 'DateTime', '_index': 'TextEdit', });
lyr_Commune_Ambanja_1.set('fieldLabels', {'ADM2_PCODE': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_TYPE': 'no label', 'BS': 'no label', 'BP': 'no label', });
lyr_parcelle_2025_2.set('fieldLabels', {'start': 'hidden field', 'end': 'hidden field', 'today': 'hidden field', 'Enqueteur': 'inline label - visible with data', 'Commune': 'inline label - visible with data', 'Fokontany': 'inline label - visible with data', 'Reboiseur1': 'inline label - visible with data', 'Total Plan': 'hidden field', 'Espece': 'hidden field', 'Nom du sit': 'inline label - visible with data', 'nom_form': 'hidden field', 'instance_n': 'hidden field', 'GPS_Parcel': 'hidden field', 'latitude Y': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'Précision': 'hidden field', 'surface_m2': 'hidden field', 'surface_ha': 'hidden field', 'Superficie': 'inline label - visible with data', 'Date d’e': 'hidden field', 'Reboiseur': 'hidden field', '_id': 'hidden field', '_submissio': 'hidden field', '_index': 'hidden field', });
lyr_parcelle_2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});