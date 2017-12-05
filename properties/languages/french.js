
export default {

	fr : {

		id : 'fr' ,

		names 			: {
			en 			: 'French' 		,
			de 			: 'Französisch' ,
			fr 			: 'Français' 	,
			ms 			: 'Perancis' 	,
			tr 			: 'Fransızca' 	,
			vi 			: 'Người Pháp' 	,
			zh 			: '法国'
		} ,

		actions 		: {
			ad 			: 'Sponsorisé' 						,
			all 		: 'tout' 							,
			add 		: 'Ajouter' 						,
			calculating : 'Calculateur...' 					,
			cancel 		: 'Annuler' 						,
			load 		: 'Charge' 							,
			loading 	: 'Chargement...' 					,
			more 		: 'Lire la suite' 					,
			refresh 	: 'Rafraîchir' 						,
			return 		: 'Arrière' 						,
			remove 		: 'Retirer' 						,
			share 		: 'Partager' 						,
			search 		: 'Entrez un terme de recherche' 	,
			update 		: 'Mettre à jour'
		} ,

		denominations 	: {
			btc 		: {
				name 	: 'BitCoin' ,
				symbol 	: 'BTC'
			}
		} ,

		errors 			: {
			500 		: 'Indisponible' 																		,
			ajax 		: 'Une erreur s\'est produite lors de la récupération des données. Veuillez réessayer.' ,
			default 	: 'Oups: une erreur s\'est produite. Redémarrez l\'application.'
		} ,

		screens 		: {
			algorithms 	: {
				title 		: '{{length}} Algorithmes' 								,
				headers 	: {
					name 	: 'Nom' 												,
					profit 	: 'Profit' 												,
					symbol 	: 'Symbole'
				} 																	,
				none 		: 'Aucune devise trouvée pour le terme de recherche'
			} 																		,
			detail 			: {
				title 		: 'Détail'
			} ,
			exchanges 		: {
				title 		: 'Achat'
			} ,
			language 		: {
				title 		: 'Changer de langue'
			} ,
			settings 		: {
				title 		: 'Paramètres'
			} ,
			share 			: {
				title 		: 'Crypto Coin Miner',
				summary 	: 'Trouvez la cryptocurrence la plus rentable pour mener #CryptoCoinMiner!'
			} ,
			theme 			: {
				title 		: 'Change le thème'
			} ,
			translations 	: {
				title 		: 'Soumettre une traduction' 	,
				action 		: 'Envoyer une traduction' 		,
				body 		: 'Cette application utilise Google Translate pour fournir un support multilingue à nos utilisateurs. Cela pourrait probablement être beaucoup mieux. Si vous parlez une autre langue et souhaitez que cela soit ajouté à la demande, veuillez vous en faire part de la traduction.'
			} ,
			themes 			: {
				title 		: 'Soumettre un thème' 	,
				action 		: 'Envoyer un thème' 	,
				body 		: 'Si vous souhaitez soumettre un thème, veuillez envoyer votre palette de couleurs et votre nom de thème et nous l\'ajouterons à la demande.'
			} ,
			donate 			: {
				action 		: 'Copier {{placeholder}} adresse' 	,
				title 		: 'Faire un don' 					,
				body 		: 'Aidez cette application à rester libre et à développer en faisant un don. En appuyant sur les boutons ci-dessous, vous copiez l\'adresse du porte-monnaie dans votre presse-papiers.',
				wallets 	: [
					{
						name 	: 'Ethereum' ,
						id 		: '0x790b032d497131296eae4250a4840785dfcfd83e'
					} ,
					{
						name 	: 'BitCoin' ,
						id 		: '1MGkY3ZtvPVZUrg68eMdeKcjAv5FwD7hhm'
					} ,
					{
						name 	: 'LiteCoin' ,
						id 		: 'Li5YUuaso9Dzmf1ZB9qrh9QBfy9TWeLTdJ'
					} ,
					{
						name 	: 'Groestlcoin' ,
						id 		: 'FqmnNi5CVUi3wPBhzCZkTWRyE666j6oYat'
					} , 
					{
						name 	: 'NEO' ,
						id 		: 'ARr1SNboRfbHEjnpnrdVkpApz9cNknS7hL'
					}
				]
			}
		}
	}
};
