
export default {
	
	de : {

		id 		: 'de' 			,
		names  	: {
			en 	: 'German' 		,
			de 	: 'Deutsche' 	,
			fr 	: 'Allemand' 	,
			ms 	: 'Jerman' 		,
			tr 	: 'Almanca' 	,
			vi 	: 'tiếng Đức' 	,
			zh 	: '德语'
		} ,

		actions 		: {
			ad 			: 'Gefördert' 								,
			all 		: 'alle' 									,
			add 		: 'Hinzufügen' 								,
			calculating : 'Berechnen...' 							,
			cancel 		: 'Stornieren' 								,
			load 		: 'Belastung' 								,
			loading 	: 'Laden...' 								,
			more 		: 'Weiterlesen' 							,
			refresh 	: 'Erneuern' 								,
			return 		: 'Zurück' 									,
			remove 		: 'Entfernen' 								,
			share 		: 'Aktie' 									,
			search 		: 'Bitte geben Sie einen Suchbegriff ein' 	,
			update 		: 'Aktualisieren'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Nicht verfügbar' ,
			ajax 			: 'Es gab einen Fehler beim Abrufen der Daten. Bitte versuche es erneut.' ,
			default 		: 'Oops - ein Fehler ist aufgetreten. Bitte starten Sie die Anwendung neu.'
		} ,

		screens : {

			algorithms 		: {
				title 		:'{{length}} Algorithmen' 	,
				headers 	: {
					name 	: 'Name' 					,
					profit 	: 'Profitieren' 			,
					symbol 	: 'Symbol'
				} ,
				none 		: 'eine Währungen für Suchbegriff gefunden'
			} ,

			detail 			: {
				title 		: 'Detail' 						,
				add 		: 'Zum Portfolio hinzufügen' 	,
				update 		: 'Portfolio aktualisieren'
			} ,

			exchanges 		: {
				title 		: 'Kauf'
			} ,

			language 		: {
				title 		: 'Sprache ändern'
			} ,

			settings 		: {
				title 		: 'Einstellungen'
			} ,

			share 			: {
				title 		: 'Crypto Münzenbergmann' ,
				summary 	: 'Finden Sie die profitabelste Krypto-Währung zu mir #CryptoCoinMiner!'
			} ,

			theme 			: {
				title 		: 'Thema ändern'
			} ,

			translations 	: {
				title 		: 'Übersetzung abgeben' ,
				action 		: 'Senden Sie eine Übersetzung' ,
				body 		: 'Diese Anwendung verwendet Google Translate, um mehrsprachige Unterstützung für unsere Nutzer zu bieten. Es könnte wohl viel besser sein. Wenn Sie eine andere Sprache sprechen und möchten, dass sie der Bewerbung hinzugefügt wurde, helfen Sie bitte, indem Sie eine Übersetzung einreichen.'
			} ,

			themes 			: {
				title 		: 'Thema abgeben',
				action 		: 'Senden Sie ein Thema' ,
				body 		: 'Wenn Sie ein Thema einreichen möchten, senden Sie bitte Ihre Farbpalette und den Themennamen und wir werden es der Anwendung hinzufügen.'
			} ,

			donate 		: {
				action 		: 'Kopiere {{placeholder}} Adresse' ,
				title 		: 'Spenden' ,
				body 		: 'Bitte helfen Sie dieser Anwendung bleiben Sie kostenlos und Weiterentwicklung durch Spenden. Durch Drücken der folgenden Schaltflächen wird die Brieftasche in die Zwischenablage kopiert.' ,
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
