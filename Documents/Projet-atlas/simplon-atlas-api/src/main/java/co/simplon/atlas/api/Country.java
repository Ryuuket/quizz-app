package co.simplon.atlas.api;

public class Country {

    private String isoCodeTwo;
    private String isoCodeThree;
    private String countryName;
    private int countryPopulation;
    private int countryArea;
    private String countryLanguage;

    public Country(String isoCodeTwo, String isoCodeThree, String countryName, int countryPopulation, int countryArea,
	    String countryLanguage) {
	// ajouter countryID
	this.isoCodeTwo = isoCodeTwo;
	this.isoCodeThree = isoCodeThree;
	this.countryName = countryName;
	this.countryPopulation = countryPopulation;
	this.countryArea = countryArea;
	this.countryLanguage = countryLanguage;
    }

    // ajouter une méthode get et une méthode set pour récupérer ou envoyer des
    // données pour la variable countryID

    public String getIsoCodeTwo() {
	return this.isoCodeTwo;
    }

    public void setIsoCodeTwo(String isoCodeTwo) {
	this.isoCodeTwo = isoCodeTwo;
    }

    public String getIsoCodeThree() {
	return this.isoCodeThree;
    }

    public void setIsoCodeThree(String isoCodeThree) {
	this.isoCodeThree = isoCodeThree;
    }

    public String getCountryName() {
	return this.countryName;
    }

    public void setCountryName(String countryName) {
	this.countryName = countryName;
    }

    public int getCountryPopulation() {
	return this.countryPopulation;
    }

    public void setCountryPopulation(int countryPopulation) {
	this.countryPopulation = countryPopulation;
    }

    public int getCountryArea() {
	return this.countryArea;
    }

    public void setCountryArea(int countryArea) {
	this.countryArea = countryArea;
    }

    public String getCountryLanguage() {
	return this.countryLanguage;
    }

    public void setCountryLanguage(String countryLanguage) {
	this.countryLanguage = countryLanguage;
    }
}