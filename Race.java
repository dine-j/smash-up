import java.util.Arrays;
import java.util.Random;

public class Race
{
	private String[] race = {"Pirates", "Ninja", "Zombies", "Robots", "Dinosaures", "Sorciers", "Petit Peuple", "Aliens"};
	private static String[] racesDispo = race;
	
	public Race()
	{
	
	}
	
	public String[] getRandom2Races()
	{
		Random random = new Random();
		int a = random.nextInt(race.length);
		int b;
		do
		{
			b = random.nextInt(race.length);
		} while(b == a);
		
		String[] choix = {racesDispo[a], racesDispo[b]};
		return choix;
		
		racesDispo = racesDispo.Where(w => w != racesDispo[a]).ToArray;
		racesDispo = racesDispo.Where(w => w != racesDispo[b]).ToArray;
	}
}