# Sleect entire globe as study area
var geometry = ee.Geometry.Rectangle(-179.99, -90, 180, 90)

#Load the WORLDCLIM BIO - select the BIO1 variable within dataset
var dataset = ee.Image('WORLDCLIM/V1/BIO');
var annualMeanTemperature = dataset.select('bio01');
#Sets the visible min and max and assigns colors
var visParams = {
  min: -230.0,
  max: 300.0,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

#Centers map on North America
Map.setCenter(71.72, 52.48, 0);
Map.addLayer(annualMeanTemperature, visParams, 'Annual Mean Temperature');

#Exports entire dataset at a 300m scale
Export.image.toDrive({
  image:annualMeanTemperature,
  description: "AnnualMeanTemp",
  region: geometry,
  scale: 300,

})
