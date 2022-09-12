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
	'duel':'duel_decor.PNG',
	'dessin':'dessin_jaune_affiche.PNG',
	'theatre':'piece_de_theatre.PNG',
	'jardin':'jardin_shakespear.PNG',
});

monogatari.script ({
	// The game starts here.
	
	'Start': [
		function(){
			const txtbox = document.querySelector('text-box');
			txtbox.style.visibility='hidden';
		},
		'show scene dessin with fadeIn',
		/* 'show notification Welcome', */
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
		'show scene cafe',
		function(){
			const gamescreen = document.querySelector('game-screen');
			var text = document.createElement('div');
			gamescreen.appendChild(text);
			text.classList.add('text_original');
			text.innerHTML='c a f e';
/* 			text.style.display='none'; */
		},
		'show character D happy with D_cafe',
		'show character H happy with H_cafe',
		'show character L happy with L_cafe',
		'show character J happy with J_cafe',
		'',


		function(){
			const txtbox = document.querySelector('text-box');
			const text = document.querySelector('.text_original');
			text.style.display='none';
			txtbox.style.visibility='visible';
		},

		'show character D happy with D_cafe',
		'show character D_P talk with cafe_petit',
		' Salut, {{player.name}} ! te voilà, on t’attendait.',
		'hide character D_P',

		'show character L stress with L_cafe',
		'show character L_P talk with cafe_petit',
		' Salut, {{player.name}}. Merci d’être venue. Tu dois te demander quel genre de mission secrète nous réunit tous les 5 sur cette terrasse de café…',
		'hide character L_P',

		'show character J stress with J_cafe',
		'show character J_P talk with cafe_petit',
		' … moi je dirais toutes les 5, comme c’est le féminin qui l’emporte maintenant sur le masculin ',


		'show character J happy with J_cafe',
		' C’est vrai que cela fait un moment depuis qu’on s’est vues, je ne sais plus par ailleurs si je t’ai félicitée d’avoir réussi tes études en traduction. Tu sais peut-être qu’on a décidé de former une troupe de théâtre à nous quatre et que ça marche plutôt bien…',
		'hide character J_P',

		'show character H stress with H_cafe',
		'show character H_P talk with cafe_petit',
		'… oui, cela a été pas mal de travail mais les choses marchent bien pour nous, on a même trouvé un mécène qui nous permet de voyager un peu pour préparer notre prochain spectacle …',
		'hide character H_P',

		'show character D happy with D_cafe',
		'show character D_P talk with cafe_petit',
		'	… et de payer une traductrice, c’est pour cela qu’on a pensé à toi !',
		'hide character D_P',

		'show character L happy with L_cafe',
		'show character L_P talk with cafe_petit',
		'Mais on n’a toujours pas expliqué à {{player.name}} de quoi il s’agit ! Bon, j’imagine que tu connais un peu l’œuvre de Shakespeare…',
		'hide character L_P',

		'show character J happy with J_cafe',
		'show character J_P talk with cafe_petit',
		'… et que c’est un peu son œuvre qui nous a donné l’idée de monter notre troupe de théâtre. On trouve qu’il y a toujours de nouvelles façons de jouer les pièces anciennes et on s’intéresse à comment les pièces de Shakespeare voyagent dans les temps mais aussi dans l’espace, il y a pas mal de différences par rapport au théâtre classique français. ',
		'hide character J_P',

		'show character H happy with H_cafe',
		'show character H_P talk with cafe_petit',
		'C’est un peu pour cela que notre mécène nous a demandé de voyager pour préparer le spectacle et on serait très content que tu nous accompagnes…',
		'hide character H_P',

		'show character D stress with D_cafe',
		'show character D_P talk with cafe_petit',
		' … d’autant plus qu’on sait que tu t’intéresses aux mêmes questions que nous : comment on représente les hommes et les femmes à travers les siècles ? ',
		'show character D happy with D_cafe',
		' comment on s’insulte ? et comment faire passer l’humour ?',
		'hide character D_P',
		
		'show character L happy with L_cafe',
		'show character L_P talk with cafe_petit',
		'Mais on n’a toujours pas expliqué à {{player.name}} son rôle ! Alors, Kate : est-ce que tu as déjà vu un spectacle de type « Tout Shakespeare en 90 minutes », où on fait un montage de scènes et de personnages plus ou moins connus en passant un peu de coq à l’âne entre les différentes pièces ? C’est une formule assez connue dans les pays anglophones où tout le monde étudie quelques pièces de Shakespeare à l’école, mais moins connue en France.',
		'hide character L_P',

		{
		'Choice': {
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump step-two'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		},],
		'No': [
			'show scene livre',
			'show image moodboard center',
			'show character L happy at center with fadeIn',
			'Alors, voici ton rôle dans notre jeu : on voudrait faire appel à toi pour nous écrire une pièce comme ça en français, à partir des œuvres de Shakespeare. ',
			'hide image moodboard',
			'hide character L',
			'jump step-two',
		],
		'step-two':[
			'show scene cafe',

			'show character L happy with fadeIn cafe',
			'On a voulu faire appel à une traductrice comme toi parce qu’on va devoir jouer devant un public français. On a appris que Shakespeare a déjà été traduit en français plusieurs fois au fil des siècles, mais on voudrait avoir ton point de vue de traductrice, pour nous aider à transmettre ces textes à un public moderne. Et comme toutes les traductions existantes ou presque ont été effectuées par des hommes…',
			'hide character L',

			'show character J happy with fadeIn cafe',
			'Oui, en effet. En faisant quelques recherches, on a appris aussi que les rôles féminins étaient généralement joués per les hommes dans le théâtre élisabéthain car les femmes n’avaient pas le droit de monter sur scène. Bien sûr, on voit aussi de temps en temps des personnages féminins qui incarnent un rôle d’homme à l’intérieur d’une pièce, et pas mal de joutes verbales entre amants où la femme se montre aussi intelligente que l’homme. Toutes ces questions nous intéressent pour le spectacle que nous voulons créer et nous espérons inciter notre public à réfléchir un peu.',
			'hide character J',

			'show character H happy with fadeIn cafe',
			' On sait que tu t’intéresses à ce genre de choses, donc on a pensé que tu serais parfaite pour le rôle… de traductrice-dramaturge !',
			'hide character H',

			'show character D happy with fadeIn cafe',
			'Donc, si tu acceptes notre proposition, ton rôle sera de voyager avec nous sur des lieux plus ou moins shakespeariens dont on essaie de s’imprégner, notre mécène prendra tout en charge et tu seras bien sûr payée pour ton travail. Nous allons te montrer les idées que nous avons eues pour les scènes à jouer mais avons besoin de ton aide pour nous aider à choisir comment les enchaîner, pour que ce soit drôle pour le public mais aussi pour les inciter à réfléchir.',
			'hide character D',

			'show character L happy with fadeIn cafe',
			'Nous avons commencé à regarder différentes traductions des scènes et voyons que cela en dit long sur comment Shakespeare a été interprété en France au fil des siècles. Ce sera à toi d’écrire ta pièce, mais on aimerait avoir ton avis de traductrice sur quelle traduction nous donne le meilleur point de départ pour chaque scène. Nous avons pensé à une quarantaine de scène possibles, mais notre mécène nous indique qu’il faut essayer de n’en garder que douze pour le spectacle, donc à toi de nous aider à choisir.',
			'hide character L',

			'show character D happy with fadeIn cafe',
			'Nous avons fait quelques recherches sur les pièces et pourrons t’expliquer les détails au moment donné, tu pourras aussi bien sûr aller te documenter dans ton bureau, où je sais que tu as quelques ouvrages de référence et un ordinateur qui gardera une trace de tes progrès. ',
			'Nous pensons qu’il y a bien assez à faire en nous focalisant sur des échanges où on trouve des questions de genre, d’insulte ou d’humour, mais essayons de trouver un moyen de varier l’expérience pour notre public. Je suis sûre que tu nous aideras à trouver quelque chose en cours de route…',
			'hide character D',

			'show character L happy with fadeIn cafe',
			'Bon, je pense qu’on a tout dit. {{player.name}}, est-ce que tu acceptes notre proposition ?',
			'hide character L',
			'jump step_three',
		
		],
		'step_three':[
			'show scene cafe',
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
		'bureau':[
				'show scene bureau',
				'cest mon bureau',
				'jump step_three',
			],
		'final':[
			'show character J happy with fadeIn cafe',
			'Alors, nous avons trois idées de point de départ. Personnellement, j’avais pensé aux échanges dans Henry V, où le roi Henry essaie de faire la cour en anglais à Catharine d’Artois et elle répond en français…',
			'hide character J',
			
			'show character H happy with fadeIn cafe',
			'Moi, j’ai pensé à Hamlet, là où Hamlet joue avec les affections d’Ophélia…',
			'hide character H',
			
			'show character D happy with fadeIn cafe',
			'Et moi je pense qu’il faut commencer par quelque chose de drôle – peut-être la première rencontre de nos amants préférés dans Beaucoup de bruit pour rien ?Nous n’arrivons pas à nous mettre d’accord, donc à toi de nous dire, Kate !',
			'hide character D',

			'Merci de m’avoir fait confiance ! Alors, pour lancer notre travail, allons voir :',

			'jump redo',

		],
		'redo':[ 
			'show scene cafe', 
		{
				'Choice': {
						'texte1': {
							'Text': '1. Henry V, autant voir comment on jongle entre deux langues pour nous aider à réfléchir à la traduction… > texte 1',
							'Do': 'jump text1'
						},
						
						'texte4': {
							'Text': '2. Hamlet, autant aller chercher de l’humour dans une tragédie… >texte 4',
							'Do': 'jump text4'
						},
						'texte5': {
							'Text': ' 3. Beaucoup de bruit, autant commencer par une comédie – et vous m’avez bien dit que votre mécène nous paie le voyage en Italie ? texte 5',
							'Do': 'jump text5'
						}
					}
			},
		],
		'text1':[
			function() {
	/* 			const gamescreen = document.querySelector('game-screen'); */
/* 				console.log(gamescreen); */
				const text = document.querySelector('.text_original');
				const txtbox = document.querySelector('text-box');
			/* 	var text = document.createElement('div'); */
				txtbox.style.visibility='hidden';
				text.style.display='block';
				text.classList.remove('text_original');
				text.classList.add('text');
				text.innerHTML='';
			/* 	gamescreen.appendChild(text); */
				text.innerHTML='<p class="p">Là on a mis nos costumes et on essaie de jouer une scène qui a lieu après la bataille :les Anglais ont gagné, Henry est maintenant roi de France et il essaie de faire la cour à Catharine de Valois. Dans la pièce de Shakespeare on l’appelle souvent Kate, comme toi,mais c’est Léna qui la joue aujourd’hui. (Léna sourit). Aujourd’hui je suis Alice, sa damed’honneur. Henry joue son homologue Henry V, qui devait être un peu plus jeune que lui dans la vraie vie (Henry > colère un moment). </p>';
	/* 			txtbox.style.display='none'; */
				console.log(text);
	/* 			gamescreen.removeChild(txtbox); */
				console.log(txtbox);			
	/* 			$('text-box').css('display','none'); */
			},
		'show scene theatre',
		'show character D degout_cos_mg with D_theatre',
		'show character L happy_cos_fd with L_theatre',
		'show character J disdain_cos_fd with J_theatre',

		'',
		function() {
			const txtbox = document.querySelector('text-box');
			const text = document.querySelector('.text');
			txtbox.style.visibility='visible';
			text.style.display='none';

		},

		'jump new',
	],

	'new':['Salut {{player.name}}, nous voici à Azincourt, sur le site de la bataille du même nom dans la pièce Henry V. Cela ne ressemble pas à grand-chose aujourd’hui mais c’était une vraie bataille, le 25 octobre 1415 et cela devait rassembler à cela.',

		'show character D happy_cos_mg with D_theatre',
		'Là on a mis nos costumes et on essaie de jouer une scène qui a lieu après la bataille : les Anglais ont gagné, Henry est maintenant roi de France et il essaie de faire la cour à Catharine de Valois. Dans la pièce de Shakespeare on l’appelle souvent {{player.name}}, comme toi, mais c’est Léna qui la joue aujourd’hui.',
		
		'Aujourd’hui je suis Alice, sa dame d’honneur. Henry joue son homologue Henry V, qui devait être un peu plus jeune que lui dans la vraie vie (Henry > colère un moment).' ,
		'C’est une scène qu’on va jouer en version originale, tu verras qu’il y a un mélange d’anglais et de français qui fait un drôle d’effet. Tu es prête ?',
		
		'show character J stress_cos_fd at center',

		'Fair Katharine, and most fair,',
		'Will you vouchsafe to teach a soldier terms',
		"Such as will enter at a lady's ear",
		'And plead his love-suit to her gentle heart?',

		'show character L surpris_cos_fd with L_theatre',
		'Your majesty shall mock at me; ',
		'I cannot speak your England.',

		'show character D degout_cos_mg with D_theatre',
		'O fair Katharine, if you will love me soundly with',
		'your French heart, I will be glad to hear you',
		'confess it brokenly with your English tongue. Do',
		'you like me, {{player.name}}?',

		' Pardonnez-moi, I cannot tell vat is "like me".',

		'show character J happy_cos_fd at center',
		'An angel is like you, Kate, and you are like an angel.',

		'show character L confus_cos_fd with L_theatre',
		'Que dit-il? que je suis semblable a les anges?',

		'show character D happy_cos_mg with D_theatre',
		'Oui, vraiment, sauf votre grâce, ainsi dit-il.',

		'show character J happy_cos_fd at center',
		'I said so, dear Katharine; and I must not blush to',

		'show character L surpris_cos_fd with L_theatre',
		'O bon Dieu! les langues des hommes sont pleines detromperies.',

		'show character J confus_cos_fd at center',
		'What says she, fair one? that the tongues of men are full of deceits?',

		'show character D happy_cos_mg with D_theatre',
		'Oui, dat de tongues of de mans is be full of deceits: dat is de princess.',

		'Voilà la scène en langue originale, Kate, qu’en penses-tu ? ',
		'Il y a du français et de l’anglais, mais on va sans doute devoir jouer cela plutôt en français pour notre public cible, je ne sais pas si tu as une idée de comment faire.',
		' Si tu passes ton curseur sur les répliques qu’on vient de jouer, tu verras la traduction de François-Victor Hugo – j’ai vu que tu as sa biographie dans ton bureau.',
		'On s’est dit que ce serait une bonne scène pour commencer notre pièce, mais nous ne savons pas trop quelle version prendre. ',
		'jump redo',
	],
	text4:[
		'show scene jardin',

		'show character J disdain_cos_fg with J_jardin',
		'show character L happy_cos_fd with L_jardin',
		'',

		'show character J stressD_cos_fg with J_jardin',
		'Salut Kate, nous voici au jardin Shakespeare, qui nous sert aujourd’hui du décor pour un échange entre Hamlet et Ophélia qui se déroule quelque part dans le château d’Elsinore au Danemark.',
		' C’est une scène qui me semble importante pour notre pièce, mais j’avoue qu’elle ne me met pas très à l’aise de faire des calembours sur le corps d’une femme. Le texte original est plein d’esprit mais je ne sais pas très bien comment jouer cela en français, surtout à l’époque de #metoo. ',
		'show character J confus_cos_fg with J_jardin',
		'A quoi tu penses, Léna ?',

		'Nothing ! Mais tu sais aussi bien que moi ce mot qui signifie « rien » était aussi un euphémisme pour les rapports sexuels à l’époque, c’est vrai que ce n’est pas toujours simple traduire cela à travers les siècles… ',
		'show character L confus_cos_fd with L_jardin',
		' Mais ne t’inquiète pas, Jules, on est des professionnels et tu vas jouer là le rôle d’un des personnages Shakespeariens les plus tordus. On a gardé notre tenue moderne aujourd’hui pour ne pas trop attirer l’attention des touristes qui passent dans le jardin, mais si tu n’y arrives vraiment pas tu peux prendre ma robe et mon rôle et je jouerai le prince !',
		{
			'Choice': {
					't4_1': {
						'Text': 'Anglais',
						'Do': 'jump t4_1'
					},
					't4_2': {
						'Text': 'Guizot',
						'Do': 'jump t4_2'
					},
					't4_3': {
						'Text': 'Dumas',
						'Do': 'jump t4_3'
					},
					't4_4': {
						'Text': 'Desprats',
						'Do': 'jump t4_4'
					},
				}
			},],
			't4_1': [
				'show character J disdain_cos_mg with J_jardin',
				'Lady, shall I lie in your lap?',
		
				'No, my lord.',
				'I mean, my head upon your lap?',
				'Ay, my lord.',
				'Do you think I meant country matters?',
				' I think nothing, my lord.',
				'That’s a fair thought to lie between maids’ legs.',
				'What is, my lord?',
				'Nothing.',
				'jump redo',
			],
		
			't4_2': [
				' Madame, me coucherai-je entre vos genoux ?',
				'Non, mon seigneur.hamlet Je veux dire la tête sur vos genoux.',
				'Oui, mon seigneur.',
				'Pensez-vous donc que j’aie eu dans l’esprit un propos de manant',
				'Je ne pense rien, mon seigneur.',
				'Ce n’est pas une vilaine pensée que celle de s’étendre parmi des jambes de jeunes filles.',
				'Comment, mon seigneur ?',
				'Rien.',
				'jump redo',
			],
			't4_3': [
				'Madame, laissez-moi m’asseoir à vos genoux,Et mon bonheur ici fera bien des jaloux.[alongée]',
				'jump redo',
			],
			't4_4': [
				'Madame, puis-je m’allonger entre vos genoux ? ',
				' Non, mon seigneur. ',
				'Je veux dire : ma tête sur vos genoux. ',
				'Oui, monseigneur. ',
				' Vous pensiez que je parlais de contrées champêtres ?',
				'Je ne pense rien, mon seigneur. ',
				"C'est une belle pensée de s'étendre entre les jambes d’une vierge.OPHÉLIA Quoi, mon seigneur ? ",
				' Rien',
				'jump redo',
			],	

	text5:[
		'show scene duel',

		'show character J happy_cos_fg at right',
		'show character D happy_cos_md at left',
		'',
		'jump redo',

	],
})
