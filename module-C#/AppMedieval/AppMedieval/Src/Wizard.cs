using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval.Src
{
    
    class Wizard : Character, ILanceurSort
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="damage"></param>
        public Wizard(int damage) : base(damage)
        {

        }

        /// <summary>
        /// Méthode qui permet au personnage de lancer un sort
        /// </summary>
        public void CastASpell()
        {
            Console.WriteLine("Anagavalda !");
        }

        /// <summary>
        /// Méthode qui permet au personnage de se présenter
        /// </summary>
        protected override void IntroducesItself()
        {
            Console.WriteLine("Je suis un Sorcier");
        }
    }
}
