using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval.Src
{
    class Magus : Character, ILanceurSort
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="damage"></param>
        public Magus(int damage) : base(damage)
        {

        }

        /// <summary>
        /// Méthode qui permet au personnage de voler
        /// </summary>
        public void Fly()
        {
            Console.WriteLine("Je vole");
        }

        /// <summary>
        /// Méthode qui permet au personnage de lancer un sort
        /// </summary>
        public void CastASpell()
        {
            Console.WriteLine("Abraracourcix !");
        }


        /// <summary>
        /// Méthode qui permet au personnage de se présenter
        /// </summary>
        protected override void IntroducesItself()
        {
            Console.WriteLine("Je suis un Mage");
        }
    }
}
