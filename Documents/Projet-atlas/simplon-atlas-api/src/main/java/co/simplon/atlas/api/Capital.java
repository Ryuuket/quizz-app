package co.simplon.atlas.api;

public class Capital {

    private String capitalName;
    private int capitalPopulation;
    private int capitalArea;

    public Capital(String capitalName, int capitalPopulation, int capitalArea) {
	// ajouter capitalID
	this.capitalName = capitalName;
	this.capitalPopulation = capitalPopulation;
	this.capitalArea = capitalArea;
    }

    // ajouter une méthode get et une méthode set pour récupérer ou envoyer des
    // données pour la variable capitalID

    public String getCapitaltName() {
	return this.capitalName;
    }

    public void setCapitaltName(String capitalName) {
	this.capitalName = capitalName;
    }

    public int getCapitalPopulation() {
	return this.capitalPopulation;
    }

    public void setCapitalPopulation(int capitalPopulation) {
	this.capitalPopulation = capitalPopulation;
    }

    public int getCapitalArea() {
	return this.capitalArea;
    }

    public void setCapitalArea(int capitalArea) {
	this.capitalArea = capitalArea;
    }
}