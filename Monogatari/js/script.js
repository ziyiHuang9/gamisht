/* global monogatari */

// Define the messages used in the game.
monogatari.action ('Message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('Notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('Particles').particles ({

});

monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voice', {

});

// Define the sounds used in the game.
monogatari.assets ('sound', {

});

// Define the videos used in the game.
monogatari.assets ('video', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'moodboard':'moodboard_1.jpg',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'cafe': 'cafe.PNG',
    'livre': 'livre.PNG',
	'bureau':'modèle.JPG',
});


// Define the Characters
monogatari.characters ({
	'D': {
		name: 'Diana',
		color: '#5bcaff',
		directory:'DIANA',
		sprites: {
            angry: 'FACE/TENUE CASUAL/DIANA_COLERE_CASUAL_FACE.PNG',
            confus: 'FACE/TENUE CASUAL/DIANA_CONFUSION_CASUAL_FACE.PNG',
			degout: 'FACE/TENUE CASUAL/DIANA_DEGOUT_CASUAL_FACE.PNG',
			happy: 'FACE/TENUE CASUAL/DIANA_JOIE_CASUAL_FACE.PNG',
			disdain: 'FACE/TENUE CASUAL/DIANA_MEPRIS_CASUAL_FACE.PNG',
			stress: 'FACE/TENUE CASUAL/DIANA_NEUTRE_CASUAL_FACE.PNG',
			scared: 'FACE/TENUE CASUAL/DIANA_PEUR_CASUAL_FACE.PNG',
			surpris: 'FACE/TENUE CASUAL/DIANA_SURPRISE_CASUAL_FACE.PNG',
			sad: 'FACE/TENUE CASUAL/DIANA_TRISTESSE_CASUAL_FACE.PNG',
        }
	},
	'H': {
		name: 'Henry',
		color: '#5bcaff',
		directory:'HENRY/FACE/TENUE CASUAL',
		sprites: {
            angry: 'HENRY_COLERE_CASUAL_FACE.PNG',
            confus: 'HENRY_CONFUSION_CASUAL_FACE.PNG',
			degout: 'HENRY_DEGOUT_CASUAL_FACE.PNG',
			happy: 'HENRY_JOIE_CASUAL_FACE.PNG',
			disdain: 'HENRY_MEPRIS_CASUAL_FACE.PNG',
			stress: 'HENRY_NEUTRE_CASUAL_FACE.PNG',
			scared: 'HENRY_PEUR_CASUAL_FACE.PNG',
			surpris: 'HENRY_SURPRISE_CASUAL_FACE.PNG',
			sad: 'HENRY_TRISTESSE_CASUAL_FACE.PNG',
        }
	},
	'J': {
		name: 'Jules',
		color: '#5bcaff',
		directory:'JULES/FACE/TENUE_CASUAL',
		sprites: {
            angry: 'JULES_COLERE_CASUAL_FACE.PNG',
            confus: 'JULES_CONFUSION_CASUAL_FACE.PNG',
			degout: 'JULES_DEGOUT_CASUAL_FACE.PNG',
			happy: 'JULES_JOIE_CASUAL_FACE.PNG',
			disdain: 'JULES_MEPRIS_CASUAL_FACE.PNG',
			stress: 'JULES_NEUTRE_CASUAL_FACE.PNG',
			scared: 'JULES_PEUR_CASUAL_FACE.PNG',
			surpris: 'JULES_SURPRISE_CASUAL_FACE.PNG',
			sad: 'JULES_TRISTESSE_CASUAL_FACE.PNG',
        }
	},
	'L': {
		name: 'Lena',
		color: '#5bcaff',
		directory:'LENA/FACE/TENUE_CASUAL',
		sprites: {
            angry: 'LENA_COLERE_CASUAL_FACE.PNG',
            confus: 'LENA_CONFUSION_CASUAL_FACE.PNG',
			degout: 'LENA_DEGOUT_CASUAL_FACE.PNG',
			happy: 'LENA_JOIE_CASUAL_FACE.PNG',
			disdain: 'LENA_MEPRIS_CASUAL_FACE.PNG',
			stress: 'LENA_NEUTRE_CASUAL_FACE.PNG',
			scared: 'LENA_PEUR_CASUAL_FACE.PNG',
			surpris: 'LENA_SURPRISE_CASUAL_FACE.PNG',
			sad: 'LENA_TRISTESSE_CASUAL_FACE.PNG',
        }
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show scene cafe with fadeIn',
		'show character D happy at left with D',
		'show character H happy at center',
		'show character L happy at right with L',
		'',
		'hide character H',
		'hide character L',
		'hide character D',

		'show character D happy at center with fadeIn',
		' Salut, {{player.name}} ! te voilà, on t’attendait.',
		'hide character D',

		'show character L stress at center with fadeIn',
		' Salut, {{player.name}}. Merci d’être venue. Tu dois te demander quel genre de mission secrète nous réunit tous les 5 sur cette terrasse de café…',
		'hide character L',

		'show character J stress at center with fadeIn',
		' … moi je dirais toutes les 5, comme c’est le féminin qui l’emporte maintenant sur le masculin ',

		'show character J happy at center with fadeIn',
		' C’est vrai que cela fait un moment depuis qu’on s’est vues, je ne sais plus par ailleurs si je t’ai félicitée d’avoir réussi tes études en traduction. Tu sais peut-être qu’on a décidé de former une troupe de théâtre à nous quatre et que ça marche plutôt bien…',
		'hide character J',

		'show character H stress at center with fadeIn',
		'… oui, cela a été pas mal de travail mais les choses marchent bien pour nous, on a même trouvé un mécène qui nous permet de voyager un peu pour préparer notre prochain spectacle …',
		'hide character H',

		'show character D happy at center with fadeIn',
		'	… et de payer une traductrice, c’est pour cela qu’on a pensé à toi !',
		'hide character D',

		'show character L happy at center with fadeIn',
		'Mais on n’a toujours pas expliqué à {{player.name}} de quoi il s’agit ! Bon, j’imagine que tu connais un peu l’œuvre de Shakespeare…',
		'hide character L',

		'show character J happy at center with fadeIn',
		'… et que c’est un peu son œuvre qui nous a donné l’idée de monter notre troupe de théâtre. On trouve qu’il y a toujours de nouvelles façons de jouer les pièces anciennes et on s’intéresse à comment les pièces de Shakespeare voyagent dans les temps mais aussi dans l’espace, il y a pas mal de différences par rapport au théâtre classique français. ',
		'hide character J',

		'show character H happy at center with fadeIn',
		'C’est un peu pour cela que notre mécène nous a demandé de voyager pour préparer le spectacle et on serait très content que tu nous accompagnes…',
		'hide character H',

		'show character D stress at center with fadeIn',
		' … d’autant plus qu’on sait que tu t’intéresses aux mêmes questions que nous : comment on représente les hommes et les femmes à travers les siècles ? ',
		'show character D happy at center with fadeIn',
		' comment on s’insulte ? et comment faire passer l’humour ?',
		'hide character D',
		
		'show character L happy at center with fadeIn',
		'Mais on n’a toujours pas expliqué à {{player.name}} son rôle ! Alors, Kate : est-ce que tu as déjà vu un spectacle de type « Tout Shakespeare en 90 minutes », où on fait un montage de scènes et de personnages plus ou moins connus en passant un peu de coq à l’âne entre les différentes pièces ? C’est une formule assez connue dans les pays anglophones où tout le monde étudie quelques pièces de Shakespeare à l’école, mais moins connue en France.',
		'hide character L',

		{
		'Choice': {
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		},],
		'Yes': [
			'jump step-two',
		],
		'No': [
			'show scene livre',
			'show image moodboard center with fadein',
			'show character L happy at center with fadeIn',
			'Alors, voici ton rôle dans notre jeu : on voudrait faire appel à toi pour nous écrire une pièce comme ça en français, à partir des œuvres de Shakespeare. ',
			'hide image moodboard',
			'hide character L',
			'jump step-two',
		],
		'step-two':[
			'show scene cafe with fadeIn',

			'show character L happy at center with fadeIn',
			'On a voulu faire appel à une traductrice comme toi parce qu’on va devoir jouer devant un public français. On a appris que Shakespeare a déjà été traduit en français plusieurs fois au fil des siècles, mais on voudrait avoir ton point de vue de traductrice, pour nous aider à transmettre ces textes à un public moderne. Et comme toutes les traductions existantes ou presque ont été effectuées par des hommes…',
			'hide character L',

			'show character J happy at center with fadeIn',
			'Oui, en effet. En faisant quelques recherches, on a appris aussi que les rôles féminins étaient généralement joués per les hommes dans le théâtre élisabéthain car les femmes n’avaient pas le droit de monter sur scène. Bien sûr, on voit aussi de temps en temps des personnages féminins qui incarnent un rôle d’homme à l’intérieur d’une pièce, et pas mal de joutes verbales entre amants où la femme se montre aussi intelligente que l’homme. Toutes ces questions nous intéressent pour le spectacle que nous voulons créer et nous espérons inciter notre public à réfléchir un peu.',
			'hide character J',

			'show character H happy at center with fadeIn',
			' On sait que tu t’intéresses à ce genre de choses, donc on a pensé que tu serais parfaite pour le rôle… de traductrice-dramaturge !',
			'hide character H',

			'show character D happy at center with fadeIn',
			'Donc, si tu acceptes notre proposition, ton rôle sera de voyager avec nous sur des lieux plus ou moins shakespeariens dont on essaie de s’imprégner, notre mécène prendra tout en charge et tu seras bien sûr payée pour ton travail. Nous allons te montrer les idées que nous avons eues pour les scènes à jouer mais avons besoin de ton aide pour nous aider à choisir comment les enchaîner, pour que ce soit drôle pour le public mais aussi pour les inciter à réfléchir.',
			'hide character D',

			'show character L happy at center with fadeIn',
			'Nous avons commencé à regarder différentes traductions des scènes et voyons que cela en dit long sur comment Shakespeare a été interprété en France au fil des siècles. Ce sera à toi d’écrire ta pièce, mais on aimerait avoir ton avis de traductrice sur quelle traduction nous donne le meilleur point de départ pour chaque scène. Nous avons pensé à une quarantaine de scène possibles, mais notre mécène nous indique qu’il faut essayer de n’en garder que douze pour le spectacle, donc à toi de nous aider à choisir.',
			'hide character L',

			'show character D happy at center with fadeIn',
			'Nous avons fait quelques recherches sur les pièces et pourrons t’expliquer les détails au moment donné, tu pourras aussi bien sûr aller te documenter dans ton bureau, où je sais que tu as quelques ouvrages de référence et un ordinateur qui gardera une trace de tes progrès. ',
			'Nous pensons qu’il y a bien assez à faire en nous focalisant sur des échanges où on trouve des questions de genre, d’insulte ou d’humour, mais essayons de trouver un moyen de varier l’expérience pour notre public. Je suis sûre que tu nous aideras à trouver quelque chose en cours de route…',
			'hide character D',

			'show character L happy at center with fadeIn',
			'Bon, je pense qu’on a tout dit. {{player.name}}, est-ce que tu acceptes notre proposition ?',
			'hide character L',
        
			{
				'Choice': {
						'oui': {
							'Text': 'oui, c’est parti',
							'Do': 'jump oui'
						},
						'non': {
							'Text': 'est-ce je peux aller faire un tour dans mon bureau avant de confirmer ?',
							'Do': 'jump non'
						}
					}
				},],
				'oui': [
					'jump final',
				],
			
				'non': [
					'jump bureau',
				],
			bureau:[
				'show scene bureau',
				'cest mon bureau',
			],
			final:[
			'show character J happy at center with fadeIn',
			'Alors, nous avons trois idées de point de départ. Personnellement, j’avais pensé aux échanges dans Henry V, où le roi Henry essaie de faire la cour en anglais à Catharine d’Artois et elle répond en français…',
			'hide character J',
			
			'show character H happy at center with fadeIn',
			'Moi, j’ai pensé à Hamlet, là où Hamlet joue avec les affections d’Ophélia…',
			'hide character H',
			
			'show character D happy at center with fadeIn',
			'Et moi je pense qu’il faut commencer par quelque chose de drôle – peut-être la première rencontre de nos amants préférés dans Beaucoup de bruit pour rien ?Nous n’arrivons pas à nous mettre d’accord, donc à toi de nous dire, Kate !',
			'hide character D',

			'Merci de m’avoir fait confiance ! Alors, pour lancer notre travail, allons voir :',
			'<div>1. Henry V, autant voir comment on jongle entre deux langues pour nous aider à réfléchir à la traduction… > <button>texte 1</button></div><div>2. Hamlet, autant aller chercher de l’humour dans une tragédie… > <button>texte 4</button></div><div>3. Beaucoup de bruit, autant commencer par une comédie – et vous m’avez bien dit que votre mécène nous paie le voyage en Italie ? > <button>texte 5</button></div>',
			function() {
				const btn = document.querySelector('button');
				console.log(btn);
			},
],
})
