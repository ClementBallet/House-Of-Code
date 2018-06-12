-- Récupérer le visuel de chaque produits visibles (visible = 1)
SELECT * FROM produit WHERE visible=1;
-- Afficher tous les produits, leur catégories (1 par ligne) et la date d'ajout du produit à cette catégorie
SELECT p.nom AS 'Nom du produit', pc.id_categorie AS 'ID du produit', pc.dateAjout AS "Date d'\ajout du produit"
FROM produit p
INNER JOIN produit_categorie pc ON p.id_produit = pc.id_produit
-- Afficher le nom des catégories pour lesquelles on a des produits visibles (= 1)
SELECT DISTINCT c.nom AS 'Nom catégorie', p.nom AS 'Nom produit'
FROM produit p  
INNER JOIN produit_categorie pc ON p.id_produit = pc.id_produit
INNER JOIN categorie c ON pc.id_categorie = c.id_cat
WHERE p.visible = 1;
-- Afficher le somme du prix de tous les produits de la catégorie "Accessoire"
SELECT sum(p.prix_HT) 
FROM produit p  
INNER JOIN produit_categorie pc ON p.id_produit = pc.id_produit
INNER JOIN categorie c ON pc.id_categorie = c.id_cat
WHERE c.nom = 'Accessoire';
-- Afficher la moyenne du prix de tous les produits visibles de la catégorie "Pc portable"
SELECT avg(p.prix_HT)
FROM produit p 
INNER JOIN produit_categorie pc ON p.id_produit = pc.id_produit
INNER JOIN categorie c ON pc.id_categorie = c.id_cat
WHERE p.visible = 1
AND c.nom = 'PC Portable';
-- Afficher le nombre de produits simsilaires pour chaque produits
SELECT produit_source.nom AS 'Nom produit', count(produit_cible.id_produit) AS 'Nombre de produits similaires'
FROM produit produit_source
LEFT JOIN produit_similaire ps 
ON produit_source.id_produit = ps.id_produit_source
LEFT JOIN produit produit_cible
ON ps.id_produit_cible = produit_cible.id_produit
GROUP BY produit_source.id_produit;
-- Afficher le nom et le prix des produits similaires au produit 'PC Portable HP' par ordre décroissant de degré
SELECT produit_cible.nom AS 'Produit', produit_cible.prix_HT AS 'Prix', produit_similaire.degre AS 'Degré'
FROM produit produit_source
INNER JOIN produit_similaire
ON produit_source.id_produit = produit_similaire.id_produit_source
INNER JOIN produit produit_cible
ON produit_similaire.id_produit_cible = produit_cible.id_produit
WHERE produit_source.nom = 'PC Portable HP'
ORDER BY produit_similaire.degre DESC;
-- Afficher le nom et le prix des produits visibles dont le prix est strictement supérieur à 700€
SELECT nom, prix_HT, visible
FROM produit
WHERE visible = 1
AND prix_HT > 700;