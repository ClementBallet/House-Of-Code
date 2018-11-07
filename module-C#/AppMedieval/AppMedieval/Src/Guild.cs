using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppMedieval.Src
{
    class Guild<T> where T : Character
    {
        private List<T> Characters;

        /// <summary>
        /// Constructor
        /// </summary>
        public Guild()
        {
            Characters = new List<T>();
        }

        /// <summary>
        /// Ajoute un item de type T
        /// </summary>
        /// <param name="item"></param>
        public void Add(T item)
        {
            Characters.Add(item);
        }

        /// <summary>
        /// Supprime un item de type T
        /// </summary>
        /// <param name="item"></param>
        public void Remove(T item)
        {
            Characters.Remove(item);
        }

        /// <summary>
        /// Méthode qui permets à un personnage d'effectuer une attaque massive
        /// </summary>
        public void MassiveAttack()
        {
            foreach(Character character in Characters)
            {
                character.Attack();
            }
        }
    }
}
