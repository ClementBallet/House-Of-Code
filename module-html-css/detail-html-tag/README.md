# Faire un accordeon facilement avec la balise HTML ```<details>``` et sans JavaScript


Utilisation de base :
```
<details>
    <summary>Accordeon 1</summary>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, magni maxime cupiditate itaque voluptates eos recusandae quidem cumque delectus officiis tenetur, ea consequuntur unde dolorem dicta. Magni, nostrum. Inventore, fugit.
    </p>
</details>
```

Si on le veut, on peut quand même rajouter du JavaScript avec l'événement ```toggle``` qui va récupérer l'état ouvert ou fermé de la balise ```<details>```.<br>
Exemple:
```
detailsElem.addEventListener("toggle", function(e) {
    if(detailsElem.open)
    {
        /* Faire quelque chose quand l'état est passé en "ouvert" */
    }
    else
    {
        /* Faire quelque chose quand l'état est passé en "fermé" */
    }
}, false);
```