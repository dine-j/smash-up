import java.util.Scanner;
import java.util.Random;
import java.util.ArrayList;
import java.util.Arrays;

public class SmashUp
{
	public static String[] race = {"Pirates", "Ninja", "Zombies", "Robots", "Dinosaures", "Sorciers", "Petit Peuple", "Aliens"};
	
	public static void main(String args[])
	{
		Scanner userInput = new Scanner(System.in);
		ArrayList<String> raceDispo = new ArrayList<String>(Arrays.asList(race));
		
		System.out.println("Combien de joueurs ?");
		int nbJoueurs = userInput.nextInt();
		userInput.nextLine();
		
		Player[] joueur = new Player[nbJoueurs];
		
		for(int i = 0; i < nbJoueurs; i++)
		{
			System.out.println("Joueur n°" + i + " ?");
			joueur[i] = new Player(userInput.nextLine(), get2RandomRaces(raceDispo));
			raceDispo.remove(joueur[i].getRaceJouee()[0]);
			raceDispo.remove(joueur[i].getRaceJouee()[1]);
		}
		
		for(int i = 0; i < nbJoueurs; i++)
		{
			System.out.println(joueur[i]);
		}
	}
	
	public static String[] get2RandomRaces(ArrayList<String> race)
	{
		Random random = new Random();
		String[] choix = new String[2];
		
		for(int i = 0; i < 2; ++i)
		{
			choix[i] = race.get(random.nextInt(race.size()));
			race.remove(choix[i]);
		}
		
		return choix;
	}
}