import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Race
{
	private ArrayList<String> race = new ArrayList<String>();
	
	public Race()
	{
		String[] races = {"Pirates", "Ninja", "Zombies", "Robots", "Dinosaures", "Sorciers", "Petit Peuple", "Aliens"};
		String[] extension3 = {"Chats", "Fées", "Poney", "Princesse"};
		for(int i = 0; i < races.length; i++)
		{
			race.add(races[i]);
		}
		for(int i = 0; i < extension3.length; i++)
		{
			race.add(extension3[i]);
		}
	}
	
	public ArrayList<String> getRaces()
	{
		return race;
	}
	
	public String[] getRandom2Races()
	{
		Random random = new Random();
		int a = random.nextInt(race.size());
		int b;
		do
		{
			b = random.nextInt(race.size());
		} while(b == a);
		
		String[] choix = {race.get(a), race.get(b)};
		race.remove(a);
		race.remove(b);
		return choix;
	}
}