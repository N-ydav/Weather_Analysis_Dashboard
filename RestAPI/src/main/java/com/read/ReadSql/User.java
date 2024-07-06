package com.read.ReadSql;


import jakarta.persistence.Entity;


import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "weatherdata")
public class User {

	@Id
    private Long id;
	private String date;  
	private double temperature; 
	private int average_humidity; 
	private double average_dewpoint; 
	private double average_barometer; 
	private double average_wind_speed; 
	private double average_gust_speed; 
	private int average_direction; 
	private int rainfall_month; 
	private int rainfall_year; 
	private int max_rain_per_minute; 
	private int max_temperature; 
	private int min_temperature; 
	private int max_humidity; 
	private int min_humidity; 
	private double max_pressure; 
	private double min_pressure; 
	private double max_wind_speed; 
	private int max_gust_speed; 
	private int max_heat_index; 
	private String month; 
	private double diff_pressure; 
	private int year; 

	
	
public User(Long id, String date, double temperature, int average_humidity, double average_dewpoint,
			double average_barometer, double average_wind_speed, double average_gust_speed, int average_direction,
			int rainfall_month, int rainfall_year, int max_rain_per_minute, int max_temperature, int min_temperature,
			int max_humidity, int min_humidity, double max_pressure, double min_pressure, double max_wind_speed,
			int max_gust_speed, int max_heat_index, String month, double diff_pressure, int year) {
		super();
		this.id = id;
		this.date = date;
		this.temperature = temperature;
		this.average_humidity = average_humidity;
		this.average_dewpoint = average_dewpoint;
		this.average_barometer = average_barometer;
		this.average_wind_speed = average_wind_speed;
		this.average_gust_speed = average_gust_speed;
		this.average_direction = average_direction;
		this.rainfall_month = rainfall_month;
		this.rainfall_year = rainfall_year;
		this.max_rain_per_minute = max_rain_per_minute;
		this.max_temperature = max_temperature;
		this.min_temperature = min_temperature;
		this.max_humidity = max_humidity;
		this.min_humidity = min_humidity;
		this.max_pressure = max_pressure;
		this.min_pressure = min_pressure;
		this.max_wind_speed = max_wind_speed;
		this.max_gust_speed = max_gust_speed;
		this.max_heat_index = max_heat_index;
		this.month = month;
		this.diff_pressure = diff_pressure;
		this.year = year;
	}



public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public double getTemperature() {
		return temperature;
	}



	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}



	public int getAverage_humidity() {
		return average_humidity;
	}



	public void setAverage_humidity(int average_humidity) {
		this.average_humidity = average_humidity;
	}



	public double getAverage_dewpoint() {
		return average_dewpoint;
	}



	public void setAverage_dewpoint(double average_dewpoint) {
		this.average_dewpoint = average_dewpoint;
	}



	public double getAverage_barometer() {
		return average_barometer;
	}



	public void setAverage_barometer(double average_barometer) {
		this.average_barometer = average_barometer;
	}



	public double getAverage_wind_speed() {
		return average_wind_speed;
	}



	public void setAverage_wind_speed(double average_wind_speed) {
		this.average_wind_speed = average_wind_speed;
	}



	public double getAverage_gust_speed() {
		return average_gust_speed;
	}



	public void setAverage_gust_speed(double average_gust_speed) {
		this.average_gust_speed = average_gust_speed;
	}



	public int getAverage_direction() {
		return average_direction;
	}



	public void setAverage_direction(int average_direction) {
		this.average_direction = average_direction;
	}



	public int getRainfall_month() {
		return rainfall_month;
	}



	public void setRainfall_month(int rainfall_month) {
		this.rainfall_month = rainfall_month;
	}



	public int getRainfall_year() {
		return rainfall_year;
	}



	public void setRainfall_year(int rainfall_year) {
		this.rainfall_year = rainfall_year;
	}



	public int getMax_rain_per_minute() {
		return max_rain_per_minute;
	}



	public void setMax_rain_per_minute(int max_rain_per_minute) {
		this.max_rain_per_minute = max_rain_per_minute;
	}



	public int getMax_temperature() {
		return max_temperature;
	}



	public void setMax_temperature(int max_temperature) {
		this.max_temperature = max_temperature;
	}



	public int getMin_temperature() {
		return min_temperature;
	}



	public void setMin_temperature(int min_temperature) {
		this.min_temperature = min_temperature;
	}



	public int getMax_humidity() {
		return max_humidity;
	}



	public void setMax_humidity(int max_humidity) {
		this.max_humidity = max_humidity;
	}



	public int getMin_humidity() {
		return min_humidity;
	}



	public void setMin_humidity(int min_humidity) {
		this.min_humidity = min_humidity;
	}



	public double getMax_pressure() {
		return max_pressure;
	}



	public void setMax_pressure(double max_pressure) {
		this.max_pressure = max_pressure;
	}



	public double getMin_pressure() {
		return min_pressure;
	}



	public void setMin_pressure(double min_pressure) {
		this.min_pressure = min_pressure;
	}



	public double getMax_wind_speed() {
		return max_wind_speed;
	}



	public void setMax_wind_speed(double max_wind_speed) {
		this.max_wind_speed = max_wind_speed;
	}



	public int getMax_gust_speed() {
		return max_gust_speed;
	}



	public void setMax_gust_speed(int max_gust_speed) {
		this.max_gust_speed = max_gust_speed;
	}



	public int getMax_heat_index() {
		return max_heat_index;
	}



	public void setMax_heat_index(int max_heat_index) {
		this.max_heat_index = max_heat_index;
	}



	public String getMonth() {
		return month;
	}



	public void setMonth(String month) {
		this.month = month;
	}



	public double getDiff_pressure() {
		return diff_pressure;
	}



	public void setDiff_pressure(double diff_pressure) {
		this.diff_pressure = diff_pressure;
	}



	public int getYear() {
		return year;
	}



	public void setYear(int year) {
		this.year = year;
	}



public User() {
		
		// TODO Auto-generated constructor stub
	}
	


//	private String published;
//	private String citylng;
//	private String citylat;
//	private int intensity;
//	private String sector;
//	private String topic;
//	private String insight;
//	private String swot;
//	private String url;
//	private String region;
//	private String start_year;
//	private String impact;
//	private String added;	
//	private int end_year;
//	private String city;
//	private String country;
//	private int relevance;
//	private String pestle;
//	private String source;
//	private String title;
//	private int likelihood;
//	public User() {
//		
//		// TODO Auto-generated constructor stub
//	}
//public User(Long id, String published, String citylng, String citylat, int intensity, String sector, String topic,
//			String insight, String swot, String url, String region, String start_year, String impact, String added,
//			int end_year, String city, String country, int relevance, String pestle, String source, String title,
//			int likelihood) {
//		
//		this.id = id;
//		this.published = published;
//		this.citylng = citylng;
//		this.citylat = citylat;
//		this.intensity = intensity;
//		this.sector = sector;
//		this.topic = topic;
//		this.insight = insight;
//		this.swot = swot;
//		this.url = url;
//		this.region = region;
//		this.start_year = start_year;
//		this.impact = impact;
//		this.added = added;
//		this.end_year = end_year;
//		this.city = city;
//		this.country = country;
//		this.relevance = relevance;
//		this.pestle = pestle;
//		this.source = source;
//		this.title = title;
//		this.likelihood = likelihood;
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getPublished() {
//		return published;
//	}
//
//	public void setPublished(String published) {
//		this.published = published;
//	}
//
//	public String getCitylng() {
//		return citylng;
//	}
//
//	public void setCitylng(String citylng) {
//		this.citylng = citylng;
//	}
//
//	public String getCitylat() {
//		return citylat;
//	}
//
//	public void setCitylat(String citylat) {
//		this.citylat = citylat;
//	}
//
//	public int getIntensity() {
//		return intensity;
//	}
//
//	public void setIntensity(int intensity) {
//		this.intensity = intensity;
//	}
//
//	public String getSector() {
//		return sector;
//	}
//
//	public void setSector(String sector) {
//		this.sector = sector;
//	}
//
//	public String getTopic() {
//		return topic;
//	}
//
//	public void setTopic(String topic) {
//		this.topic = topic;
//	}
//
//	public String getInsight() {
//		return insight;
//	}
//
//	public void setInsight(String insight) {
//		this.insight = insight;
//	}
//
//	public String getSwot() {
//		return swot;
//	}
//
//	public void setSwot(String swot) {
//		this.swot = swot;
//	}
//
//	public String getUrl() {
//		return url;
//	}
//
//	public void setUrl(String url) {
//		this.url = url;
//	}
//
//	public String getRegion() {
//		return region;
//	}
//
//	public void setRegion(String region) {
//		this.region = region;
//	}
//
//	public String getStart_year() {
//		return start_year;
//	}
//
//	public void setStart_year(String start_year) {
//		this.start_year = start_year;
//	}
//
//	public String getImpact() {
//		return impact;
//	}
//
//	public void setImpact(String impact) {
//		this.impact = impact;
//	}
//
//	public String getAdded() {
//		return added;
//	}
//
//	public void setAdded(String added) {
//		this.added = added;
//	}
//
//	public String getCity() {
//		return city;
//	}
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//	public String getCountry() {
//		return country;
//	}
//
//	public void setCountry(String country) {
//		this.country = country;
//	}
//
//	public int getRelevance() {
//		return relevance;
//	}
//
//	public void setRelevance(int relevance) {
//		this.relevance = relevance;
//	}
//
//	public String getPestle() {
//		return pestle;
//	}
//
//	public void setPestle(String pestle) {
//		this.pestle = pestle;
//	}
//
//	public String getSource() {
//		return source;
//	}
//
//	public void setSource(String source) {
//		this.source = source;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public int getLikelihood() {
//		return likelihood;
//	}
//
//	public void setLikelihood(int likelihood) {
//		this.likelihood = likelihood;
//	}
//
//	public int getEnd_year() {
//		return end_year;
//	}
//
//	public void setEnd_year(int end_year) {
//		this.end_year = end_year;
//	}
//	
	
	
	
	
}