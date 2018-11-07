using AppMedieval.Src;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval
{
    class Program
    {
        static void Main(string[] args)
        {
            // Init Mage Gandalf
            Magus gandalf = new Magus(5);
            gandalf.Attack();
            gandalf.CastASpell();
            gandalf.Fly();

            // Init Sorcier Saroumane
            Wizard saroumane = new Wizard(6);
            saroumane.Attack();
            saroumane.CastASpell();

            // Init Sorcier Radagast
            Wizard radagast = new Wizard(5);
            radagast.Attack();
            radagast.CastASpell();

            // Init Chevelier Aragorn
            Knight aragorn = new Knight(3);
            aragorn.Attack();

            List<Character> characters = new List<Character>();
            characters.Add(gandalf);
            characters.Add(saroumane);
            characters.Add(aragorn);

            foreach(Character character in characters)
            {
                character.Attack();
            }

            Console.WriteLine("///// CREATION DE GUILDE /////");
            Guild<Wizard> wizardGuild = new Guild<Wizard>();
            wizardGuild.Add(saroumane);
            wizardGuild.Add(radagast);

            Console.WriteLine("///// ATTAQUE MASSIVE DE LA GUILDE DES SORCIERS /////");
            wizardGuild.MassiveAttack();
            Console.WriteLine("///// FIN ATTAQUE MASSIVE DE LA GUILDE DES SORCIERS /////");


            Console.ReadKey();
        }
    }
}
