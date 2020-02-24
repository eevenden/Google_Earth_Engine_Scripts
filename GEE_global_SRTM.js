#Create rectangle to select entire globe
var geometry = ee.Geometry.Rectangle([-179.99, -90, 180, 90])

#Create variable for SRTM data
var srtm = ee.Image("CGIAR/SRTM90_V4")

#Display SRTM data
Map.addLayer(srtm)

#Export entire SRTM dataset
Export.image.toDrive({
  image:srtm,
  description: "SRTM",
  region: geometry,
  scale: 30,
  maxPixels: 1e12
  
})
