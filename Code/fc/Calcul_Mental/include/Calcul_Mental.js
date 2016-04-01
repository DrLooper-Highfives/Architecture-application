/*
Ensemble d'opérations pour le jeu calcul mental en javascript
Albatros Concept 09/07/2013
*/
function compare_resultats (user,calcul)
	{
/*
"calcul" est la chaine de caractere du calcul à effectuer
"user" est le nombre retourné par l'utilisateur
*/
	if (user.value == eval (calcul))
		return (true);
	else
		return (false);
	}

function tirage_fois15 ()
	{
	nombre1 = Math.floor(Math.random()*50)+1;
	return (nombre1 + "*15");
	}

function tirage_fois11 ()
	{
	nombre1 = Math.floor(Math.random()*99)+1;
	return (nombre1 + "*11");
	}

function tirage_fois12 ()
	{
	nombre1 = Math.floor(Math.random()*40)+11;
	return (nombre1 + "*12");
	}

function tirage_somme ()
	{
	nombre1 = Math.floor(Math.random()*50)+1;
	nombre2 = Math.floor(Math.random()*50)+1;
	return (nombre1 + "+" + nombre2);
	}

function tirage_difference ()
	{
	nombre1 = Math.floor(Math.random()*50)+1;
	nombre2 = Math.floor(Math.random()*50)+1;
	calcul= eval (nombre1 + "+" + nombre2);
	return (calcul + "-" + nombre2);
	}

function tirage_produit ()
	{
	nombre1 = Math.floor(Math.random()*10)+1;
	nombre2 = Math.floor(Math.random()*10)+1;
	return (nombre1 + "*" + nombre2);
	}

function tirage_quotient ()
	{
	nombre1 = Math.floor(Math.random()*10)+1;
	nombre2 = Math.floor(Math.random()*10)+1;
	calcul= eval (nombre1 + "*" + nombre2);
	return (calcul + "/" + nombre2);
	}

/* New here */

function tirage_carre_2_chiffre_fin_5 ()
	{
	nombre = (Math.floor(Math.random()*10))*10+5;
	return (nombre + "*" + nombre);
	}

function tirage_carre_2_chiffre_fin_5_plus_moins1 ()
	{
	nombre1 = (Math.floor(Math.random()*10))*10+4;
	nombre2 = nombre1+2;
	return (nombre1 + "*" + nombre2);
	}

function tirage_fois25 ()
	{
	nombre = Math.floor(Math.random()*100)+1;
	return (nombre + "*25");
	}

function tirage_divise25 ()
	{
	nombre = (Math.floor(Math.random()*100)+1)*25;
	return (nombre + "/25");
	}

function tirage_addition ()
	{
	nombre1 = Math.floor(Math.random()*10)+1;
	nombre2 = Math.floor(Math.random()*10)+1;
	return (nombre1 + "+" + nombre2);
	}

function tirage_soustraction ()
	{
	nombre1 = Math.floor(Math.random()*10)+1;
	nombre2 = Math.floor(Math.random()*10)+1;
	return (nombre1 + nombre2 +  "-" + nombre1);
	}


function affiche_tirage()
	{
/*
"calcul" est la chaine de caractere du calcul à effectuer
"user" est le nombre retourné par l'utilisateur
*/
//	SetDiv("user","");
	SetDiv("resultat",machine);
	choix_type= liste_choix.charAt(Math.random()*liste_choix.length);
//	choix_type= Math.floor(Math.random()*11)+1;
	if (choix_type == "A")
		calcul=tirage_somme ();
	if (choix_type == "B")
		calcul=tirage_difference ();
	if (choix_type == "C")
		calcul=tirage_produit ();
	if (choix_type == "D")
		calcul=tirage_quotient ();
	if (choix_type == "E")
		calcul=tirage_fois12 ();
	if (choix_type == "F")
		calcul=tirage_fois11 ();
	if (choix_type == "G")
		calcul=tirage_fois15 ();
	if (choix_type == "H")
		calcul=tirage_carre_2_chiffre_fin_5 ();
	if (choix_type == "I")
		calcul=tirage_carre_2_chiffre_fin_5_plus_moins1 ();
	if (choix_type == "J")
		calcul=tirage_fois25 ();
	if (choix_type == "K")
		calcul=tirage_divise25 ();
	if (choix_type == "L")
		calcul=tirage_addition ();
	if (choix_type == "M")
		calcul=tirage_soustraction ();
	SetDiv("calcul",calcul);
	document.form_user.user.focus();
	}

function affiche_user(chiffre)
	{
/*
"calcul" est la chaine de caractere du calcul à effectuer
"user" est le nombre retourné par l'utilisateur
*/
	if (user + chiffre <10000)
		{
		user=user + chiffre;
		SetDiv("user",user);
		}
	}

function init_timer()
	{
	clearInterval(x_interval);
	start_timer = false;
	timer = 120;
	SetDiv("texte_time","");
	}

function debut_partie()
	{
	init_timer();
	start_rebours();
	SetDiv("msg_jeu","");
	SetDiv("score_total","");
	SetDiv("note_sur_20","");
	affiche_tirage();
	}

/*
Categorie tirage
- A somme, B soustraction, C produit, D quotient, E fois 12, F fois 11, G fois 15, H carre de nombre à 2 chiffre se terminant par 5, I idem à h mais avec +-1, J fois 25, K divise 25
*/
var type_tirage = new Array;
type_tirage["1"] = "AB";type_tirage["2"] = "CD";type_tirage["3"] = "EFG";type_tirage["4"] = "HI";type_tirage["5"] = "JK";type_tirage["6"] = "ABCDEFGHIJK";type_tirage["7"] = "L";type_tirage["8"] = "M";
var score_max = new Array;
score_max["1"] = 465 ; score_max["2"] = 1830 ; score_max["3"] = 153 ; score_max["4"] = 378 ; score_max["5"] = 120; score_max["6"] = 120; score_max["7"] = 325; score_max["8"] = 210;
var liste_choix=type_tirage["1"];

