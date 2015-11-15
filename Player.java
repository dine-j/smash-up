public class Player
{
	private String name;
	private String[] raceJouee;
	
	public Player(String name, String[] races)
	{
		this.name = name;
		raceJouee = races;
	}
	
	public String getPlayerName()
	{
		return name;
	}
	
	public String[] getRaceJouee()
	{
		return raceJouee;
	}
	
	public String toString()
	{
		return name + " jouera " + raceJouee[0] + " et " + raceJouee[1] + ".";
	}
}