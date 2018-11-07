using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval.Src
{
    class Knight : Character
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="damage"></param>
        public Knight(int damage) : base(damage)
        {

        }

        /// <summary>
        /// Méthode qui permet au personnage de se présenter
        /// </summary>
        protected override void IntroducesItself()
        {
            Console.WriteLine("Je suis un Chevalier");
        }
    }
}
