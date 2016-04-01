

/**********************************************************************************************/
/* Script "z'experts" : http://perso.wanadoo.fr/coin.des.experts/
   delivre sans aucune garantie, ni des auteurs, ni du gouvernement. 
   Diffusion libre, mais merci de conserver cette signature :-) */
/* La fonction bulle() qui ouvre la bulle d'aide a 3 arguments possibles:
   - le premier est le message a faire apparaitre. 
   - LE DEUXIEME EST OBLIGATOIREMENT "event" (sans les guillemets) 
   c.a.d. un mot cle du javascript.
   - Le 3eme argument est facultatif. Il permet d'ajuster 
   le decalage vertical afin de ne pas tronquer les bulles trop 
   longues ouvertes vers le bas de l'ecran; partez de
       hauteur=1,2 x taille police x nombre de lignes +10
   
   Enfin, mettre le bloc <DIV id="tip">...</DIV> en tete du bloc BODY. 
   NE PAS CHANGER LE NOM "tip";  sinon, vous pouvez modifier le style 
   qui suit ou le message d'erreur à votre grÅ½ (mais laissez le
   position:absolute et un z-index tres grand)
*/
var bulleStyle=null
if (!document.layers && !document.all && !document.getElementById)
   event="chut";  //pour apaiser NN3 et autres antiquites
function bulle(msg,evt,hauteur)
	{
	var xfenetre,yfenetre,xpage,ypage,element=null;
	var offset= 15;           // decalage par defaut
	var bulleWidth=150;       // largeur par defaut 
	if (!hauteur) hauteur=40; // hauteur par dÅ½faut
	if (document.layers)
		{
		bulleStyle=document.layers['tip'];
		bulleStyle.document.write('<layer bgColor="#ffffdd" '+'style="width:150px;border:1px solid black;color:black">'+ msg + '</layer>' );
		bulleStyle.document.close();
		xpage = evt.pageX ; ypage  = evt.pageY;
		xfenetre = xpage ;yfenetre = ypage ;		
		}
	else if (document.all)
		{
		element=document.all['tip']
		xfenetre = evt.x ;yfenetre = evt.y ;		
		xpage=xfenetre ; ypage=yfenetre	;	
		if (document.body.scrollLeft) xpage = xfenetre + document.body.scrollLeft ; 
		if (document.body.scrollTop) ypage = yfenetre + document.body.scrollTop;
		}
	else if (document.getElementById)
		{
		element=document.getElementById('tip')
		xfenetre = evt.clientX ;yfenetre = evt.clientY ;
		xpage=xfenetre ; ypage=yfenetre	;	
		if(evt.pageX) xpage = evt.pageX ;
		if(evt.pageY) ypage  = evt.pageY ;
		}
	if(element)
		{
		bulleStyle=element.style;
		element.innerHTML=msg;
		}
		 	
	if(bulleStyle)
		{
/* on met la bulle à gauche du pointeur (si c'est possible) et en haut du pointeur si on est assez bas dans l'Å½cran */
		if (xfenetre > bulleWidth+offset) xpage=xpage-bulleWidth-offset;
		else xpage=xpage+15;
		if ( yfenetre > hauteur+offset ) ypage=ypage-hauteur-offset;
		bulleStyle.width=bulleWidth;  
		if(typeof(bulleStyle.left)=='string')
			{
			bulleStyle.left=xpage+'px'; bulleStyle.top=ypage+'px';  
			}
		else
			{
			bulleStyle.left=xpage     ; bulleStyle.top=ypage ;
			}
		bulleStyle.visibility="visible";
		}
	}
 
function couic()
	{
	if(bulleStyle)  bulleStyle.visibility="hidden";
	}
/*___ Fin fonctions z-expert ___*/
/**********************************************************************************************/

/**********************************************************************************************/
//Fonction obtenue sur le web : http://www.devparadise.com/technoweb/code/jscript/a300.php
//Cette fonction permet de changer le contenu d'un inentifian HTML (ID) par le contenu de "Content"
function SetDiv(ID,Content)
	{
	if (ns6)
		{
		document.getElementById(ID).innerHTML = Content;
		return;
		}
	if (ie4)
		{
		document.all[ID].innerHTML = Content;
		return;
		}
	if (ns4)
		{
		with (eval('document.'+ID+'.document'))
			{
			open();
			write(Content);
			close();
			}
		return;
		}
	}
/* Fin fonction SetDiv*/

/**********************************************************************************************
     
     A partir d'ici, ensemble des fonctions créées par  ****Albatros Concept****

**********************************************************************************************/

/*******************************************************************************
 * Fonctions agissant sur du texte                                             *
 ********************************************************************************/

function supprime_sous_texte(portion, texte)
	{
	//supprime le premier caractère "car" de la chaine "texte"
		return (texte.substr(0,texte.indexOf(portion,0))+texte.substr(texte.indexOf(portion,0)+portion.length,texte.length-(texte.indexOf(portion,0)+portion.length)));
	}



/*******************************************************************************
* Fonctions agissant sur les différents types de champs de formulaires         *
********************************************************************************/

function test_saisie_text(objet_value,motif)
	{
/*teste le champ objet_value du champ  de formulaire avec le motif "motif". Retourne true ou false
voir les motif à la fin de ce fichier.
*/
    if (!motif.test(objet_value)) 
    	{
		objet_value="";
		return(false);
		}
	else
		return(true);
	}  	


/*******************************************************************************
* Fonctions qui agissent sur un bandeau dynamique en JS, contenant des logos JS*
********************************************************************************/
function deroule(id)//Albatros Concept
	{
//Fonction recursive qui agrandit une bande sur la largeur
//"largeur", est une variable globale, "bande" est un id
//Graduation se base sur n(n+1)/2 tel que n(n+1)/2=600, c'est Ã  dire, n=35 maxi
	largeur=largeur+graduation;
	if (ns6) 
		obj_barre_outil_JS.width=""+largeur+"px";
	else
		obj_barre_outil_JS.width=largeur;
	if (largeur<612 && action_clic<0 && graduation<36)
		{
		graduation++;
		setTimeout("deroule()",20);
		}
	else
		{
		SetDiv(id,"Barre d'Outils JAVASCRIPT");
		}
	}

function enroule()//Albatros Concept
	{
//Fonction recursive qui retrecit une bande sur la largeur
//"largeur", est une variable globale, "bande" est un id
	largeur=largeur-graduation;
	if (ns6) 
		obj_barre_outil_JS.width=""+largeur+"px";
	else
		obj_barre_outil_JS.width=largeur;
	if (largeur>0 && action_clic>0 && graduation>0)
		{
		graduation--;
		setTimeout("enroule()",20);
		}
	}

function roule(id,id2)//Albatros Concept
	{
//Fonction qui vérifie le clic sur la zone d'agrandissement/rétrécissement de la bande horizontale
//"action-clic", est une variable globale, "id" est l'id de la zone clic "id2" l'id de la zone bande et obj, l'objet de id2
	action_clic=-action_clic;
	if (action_clic<0)
		{
		SetDiv(id,"<font color='white'>&lt;</font>");
		deroule(id2);
		}
	else
		{
		SetDiv(id,"<font color='white'>&gt;</font>");
		SetDiv(id2,'');
		enroule();
		}
	}
/*******************************************************************************
*__ Fin des Fonctions qui agissent sur un bandeau dynamique en JS__            *
********************************************************************************/

/**********************************************************************************************/
//Fonctions diverses
/**********************************************************************************************/
function affiche_geoloc(Id,longitude,lattitude,largeur,hauteur,libelle_lieu)
/*Fonction qui positionne la carte openstreetmap centré sur longitude et latitude dans l'Id-*/
	{
	var unite_pxl=0.00001;
	var decalage_hor=unite_pxl*largeur, decalage_ver=unite_pxl*hauteur;
	
	Texte="Localisation "+libelle_lieu+"<BR><iframe width='"+largeur+"' height='"+hauteur+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://www.openstreetmap.org/export/embed.html?bbox="+(longitude-decalage_hor)+","+(lattitude-decalage_ver)+","+(longitude+decalage_hor)+","+(lattitude+decalage_ver)+"&amp;layer=mapnik&amp;marker="+lattitude+","+longitude+"' style='border: 1px solid black'></iframe><br />";
//	Texte="<iframe width='"+largeur+"' height='"+hauteur+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://www.openstreetmap.org/export/embed.html?bbox=0.2012,48.02177,0.21266,48.02986&amp;layer=mapnik&amp;marker="+lattitude+","+longitude+"' style='border: 1px solid black'></iframe><br /><small><a href='http://www.openstreetmap.org/?lat=45.8&amp;lon=2.2&amp;zoom=5&amp;layers=M'>Voir une carte plus grande</a></small>";
	SetDiv(Id, Texte);
	}

function dim_fenetre()//Albatros Concept : calcule les dimensions de la fenêtre courante
	{
	if (ie4)
		{
		h_fenetre=document.body.clientHeight;
		w_fenetre=document.body.clientWidth;
		y0_fenetre=window.document.documentElement.scrollTop;
		x0_fenetre=window.document.documentElement.scrollLeft;
		}
	else
		{
		w_fenetre=window.innerWidth;
		h_fenetre=window.innerHeight;
		x0_fenetre=window.pageXOffset;
		y0_fenetre=window.pageYOffset;
		}
	}

function voir(objet,drapeau)//Albatros Concept : change l'état d'un objet JS en visible ou invisible
	{
	if (drapeau)
		{
		if (ie4) objet.visibility='visible';
		else if (ns4) objet.visibility='show';
		else if (ns6) objet.visibility='visible';
		}
	else
		{
		if (ie4) objet.visibility='hidden';
		else if (ns4) objet.visibility='hide';
		else if (ns6) objet.visibility='hidden';
		}
	}

function rebours()
	{
//Fonction personnelle (Albatros concept), permettant de compter à rebours dans un ID
//timer est une variable globale dont la valeur est prédéfinie
//texte_rebours est aussi une variable texte globale
//texte_time est un id html dans lequel on mettra l'heure
//la fonction fin_rebours_application() est hors cette API et doit être écrit dans chaque application pour le trairement
	var heure = Math.floor(timer/3600);
	var minute = Math.floor((timer%3600)/60);
	var seconde = timer%60;
	var texte_rebours = "";
	if (heure>0)
		{
		if (heure<10)
			{
			texte_rebours="0";
			}
		texte_rebours=texte_rebours+heure+":";
		}
	if (minute<10)
		{
		texte_rebours=texte_rebours+"0";
		}
	texte_rebours=texte_rebours+minute+":";
	if (seconde<10)
		{
		texte_rebours=texte_rebours+"0";
		}
	texte_rebours=texte_rebours+seconde;
	SetDiv("texte_time",texte_rebours);
	timer--;
	if (timer<0)
		{
		clearInterval(x_interval);
		fin_rebours_application();//Cette fonction est écrite dans la page d'application pour traiter la fin du compte à rebours
		start_timer = false;
		}
//	return 0;
	}

function start_rebours()
	{
	if (!start_timer && timer >0)
		{
		start_timer=true;
		x_interval = setInterval("rebours()", 1000);
		}
	else if (start_timer)
		{
		clearInterval(x_interval);
		}
	}
var x_interval;
var start_timer = false;//sert de va et vient
var motif_isN = /^([1-9][0-9]{0,})$/;
var motif_isQ = /^[+\-]{0,1}([1-9][0-9]{0,})$/;
var motif_isR = /^[+\-]{0,1}((0(\.[0-9]{1,})|([1-9][0-9]{0,}(\.[0-9]{1,}){0,1})))$/;

var ns4 = (document.layers)? true:false;         //NS 4
var ie4 = (document.all)? true:false;         //IE 4
var ns6 = (document.getElementById)? true:false;   //NS 6 ou IE 5

