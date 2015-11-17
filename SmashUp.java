import java.util.Scanner;
import java.util.Random;
import java.util.ArrayList;
import java.util.Arrays;

public class SmashUp
{	
	public static void main(String args[])
	{
		Scanner userInput = new Scanner(System.in);
		Race races = new Race();
		
		System.out.println("Combien de joueurs ?");
		int nbJoueurs = userInput.nextInt();
		userInput.nextLine();
		
		Player[] joueur = new Player[nbJoueurs];
		
		for(int i = 0; i < nbJoueurs; i++)
		{
			System.out.println("Joueur n°" + (i + 1) + " ?");
			joueur[i] = new Player(userInput.nextLine(), races.getRandom2Races());
		}
		
		for(int i = 0; i < nbJoueurs; i++)
		{
			System.out.println(joueur[i]);
		}
	}
}