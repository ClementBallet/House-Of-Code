-- Sélection tous les étudiants ayant classe 1
SELECT * FROM `etudiant` WHERE id_classe=1;
-- Sélection tous les étudiants dont nom commence par D
SELECT * FROM `etudiant` WHERE nom LIKE 'D%';
-- Sélection nom,prenom,mail des étudiants ayant classe 2
SELECT nom,prenom,mail FROM `etudiant` WHERE id_classe=2;
-- Sélection nom étudiants n'ayant pas classe 1 et finissant par s
SELECT nom FROM `etudiant` WHERE id_classe NOT IN (1) AND nom LIKE '%s';
-- Sélection mail des étudiants ayant classes 1 ou 2
SELECT mail FROM `etudiant` WHERE id_classe IN (1,2);
-- 


