var geometry = ee.Geometry.Rectangle(-179.99, -90, 180, 90)

var dataset = ee.Image('WORLDCLIM/V1/BIO');
var annualMeanTemperature = dataset.select('bio01');
var visParams = {
  min: -230.0,
  max: 300.0,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};
Map.setCenter(71.72, 52.48, 0);
Map.addLayer(annualMeanTemperature, visParams, 'Annual Mean Temperature');

Export.image.toDrive({
  image:annualMeanTemperature,
  description: "AnnualMeanTemp",
  region: geometry,
  scale: 300,
  crs: "Latlong"
})