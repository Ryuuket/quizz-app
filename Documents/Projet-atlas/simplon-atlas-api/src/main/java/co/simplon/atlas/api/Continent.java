package co.simplon.atlas.api;

public class Continent {

    private String continentName;
    private int continentArea;

    public Continent(String continentName, int continentArea) {
	// ajouter continentID
	this.continentName = continentName;
	this.continentArea = continentArea;
    }

    // ajouter une méthode get et une méthode set pour récupérer ou envoyer des
    // données pour la variable continentID

    public String getContinentName() {
	return this.continentName;
    }

    public void setContinentName(String continentName) {
	this.continentName = continentName;
    }

    public int getContinentArea() {
	return this.continentArea;
    }

    public void setContinentArea(int continentArea) {
	this.continentArea = continentArea;
    }
}