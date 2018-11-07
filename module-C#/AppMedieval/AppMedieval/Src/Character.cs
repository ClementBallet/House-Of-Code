using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval.Src
{
    abstract class Character
    {
        /// <summary>
        /// Impose aux enfants d'implementer la methode abstract IntroducesItself()
        /// </summary>
        protected abstract void IntroducesItself();

        protected int lifePoints = 10;
        protected int damage;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="nbDamage"></param>
        public Character(int nbDamage = 0)
        {
            this.damage = nbDamage;
        }

        /// <summary>
        /// Méthode Attaquer un personnage
        /// </summary>
        public virtual void Attack()
        {
            Console.WriteLine("\n");
            this.IntroducesItself();

            Console.WriteLine("J'attaque");
            Console.WriteLine("j'ai causé " + damage + " dégâts");
        }

        /// <summary>
        /// Getter et setter des points de vie 
        /// </summary>
        public int LifePoints
        {
            get
            {
                return lifePoints;
            }

            set
            {
                lifePoints = value;
            }
        }

        /// <summary>
        /// Getter et setter des dégâts
        /// </summary>
        public int Damage
        {
            get
            {
                return damage;
            }

            set
            {
                damage = value;
            }
        }
    }
}
