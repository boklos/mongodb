# mongodb
Download MongoProcLinux users not using the Ubuntu 12.04 binaries need to have python 2.7 installed and the pymongo module installed. They can also choose to to point mongoProc to any 2.7 compatible python implementation (like PyPy) in user_settings by changing the python field.
Write a program that finds the document with the highest recorded temperature for each state, and adds a "month_high" field for that document, setting its value to true. Use the weather dataset that you imported in HW 2.1. 

This is a sample document from the weather data collection:
> use weather
switched to db weather
> db.data.findOne()
{
    "_id" : ObjectId("520bea012ab230549e749cff"),
    "Day" : 1,
    "Time" : 54,
    "State" : "Vermont",
    "Airport" : "BTV",
    "Temperature" : 39,
    "Humidity" : 57,
    "Wind Speed" : 6,
    "Wind Direction" : 170,
    "Station Pressure" : 29.6,
    "Sea Level Pressure" : 150
}
Assuming this document has the highest "Temperature" for the "State" of "Vermont" in our collection, the document should look like this after you run your program:
db.data.findOne({ "_id" : ObjectId("520bea012ab230549e749cff") })
{
    "_id" : ObjectId("520bea012ab230549e749cff"),
    "Day" : 1,
    "Time" : 54,
    "State" : "Vermont",
    "Airport" : "BTV",
    "Temperature" : 39,
    "Humidity" : 57,
    "Wind Speed" : 6,
    "Wind Direction" : 170,
    "Station Pressure" : 29.6,
    "Sea Level Pressure" : 150,
    "month_high" : true
}
Note that this is only an example and not the actual document that you would be updating. Note also that our collection only has one month of data for each "State", which is why we are asking you to set "month_high".
