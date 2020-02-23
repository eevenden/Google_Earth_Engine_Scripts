#Change extent to include entire globe
var geometry = ee.Geometry.Rectangle([180, 90, -180, 90])

#Locate the SRTM dataset within GEE
var srtm = ee.Image("CGIAR/SRTM90_V4")

#Display data
Map.addLayer(srtm)

#Export data at a 300m scale
Export.image.toDrive({
  image:srtm,
  description: "SRTM",
  region: geometry,
  scale: 300
  