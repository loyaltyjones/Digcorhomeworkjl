fetch("https://api.weatherapi.com/v1/forecast.json?q=30318&days=5&key=f9590783e4ed48ebb8d152028241803")
.then((response) => response.json())
.then((data) => {
    let weathercond = [];
    weathercond.push(data);
    //console.log(weathercond)

    for(i = 0; i < weathercond.length; i++){
        let name = weathercond[i].location.name;
        let region = weathercond[i].location.region;
        let country = weathercond[i].location.country;
        let lat = weathercond[i].location.lat;
        let lon = weathercond[i].location.lon;
        let tz_id = weathercond[i].location.tz_id;
        let time = weathercond[i].location.localtime_epoch;
        let localtime = weathercond[i].location.localtime;
        let lastupdate = weathercond[i].current.last_updated_epoch;
        let lastupdate2 = weathercond[i].current.last_updated;
        let tempC = weathercond[i].current.temp_c;
        let tempF = weathercond[i].current.temp_f;
        let  currentday= weathercond[i].current.is_day;
        let  currentCon= weathercond[i].current.condition;
        let  windMph= weathercond[i].current.wind_mph;
        let  windKph= weathercond[i].current.wind_kph;
        let  windDegree= weathercond[i].current.wind_degree;
        let  windDir= weathercond[i].current.wind_dir;
        let  pressure= weathercond[i].current.pressure_mb;
        let  pressureIn= weathercond[i].current.pressure_in;
        let  precipMM= weathercond[i].current.precip_mm;
        let  precipin= weathercond[i].current.precip_in;
        let  humidityC= weathercond[i].current.humidity;
        let  cloud= weathercond[i].current.cloud;
        let  feelslikeC= weathercond[i].current.feelslike_c;
        let  feelslikeF= weathercond[i].current.feelslike_f;
        let  visibilityKm= weathercond[i].current.vis_km;
        let  visibilityM= weathercond[i].current.vis_miles;
        let  currentUv= weathercond[i].current.uv;
        let  currentGustMph= weathercond[i].current.gust_mph;
        let  currentGustKph= weathercond[i].current.gust_kph;

        console.log(name,region,country,lat,lon,tz_id,currentGustKph,visibilityKm,visibilityM,lastupdate,windDir,windDegree,lastupdate2,tempC,tempF,currentday,currentCon,windMph,windKph,pressure,pressureIn,precipMM,precipin,humidityC,cloud,feelslikeC,feelslikeF,currentUv,currentGustMph,time,localtime);

        // let nana= document.createElement("div");
        // nana.innerHTML = weathercond[i].current.cloud

        // document.body.appendChild(nana);


}
 })
    