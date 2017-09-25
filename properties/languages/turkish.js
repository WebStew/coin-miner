
export default {
	
	tr : {

		id 		: 'tr' 				,
		names 	: {
			en 	: 'Turkish' 		,
			de 	: 'Türkisch' 		,
			fr 	: 'Turc' 			,
			ms 	: 'Turki' 			,
			tr 	: 'Türk' 			,
			vi 	: 'Thổ' 			,
			zh 	: '土耳其'
		} ,

		actions 		: {
			ad 			: 'Sponsor' 						,
			all 		: 'herşey' 							,
			add 		: 'Eklemek' 						,
			calculating : 'Hesaplama...' 					,
			cancel 		: 'İptal etmek' 					,
			load 		: 'Yük' 							,
			loading 	: 'Yükleniyor...' 					,
			more 		: 'Daha fazla oku' 					,
			refresh 	: 'Yenile' 							,
			return 		: 'Geri' 							,
			remove 		: 'Kaldır' 							,
			share 		: 'Pay' 							,
			search 		: 'Lütfen bir arama terimi girin' 	,
			update 		: 'Güncelleştirme'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Kullanım dışı' ,
			ajax 			: 'Verilerin alınmasında bir hata oluştu. Lütfen tekrar deneyin.' ,
			default 		: 'Hata! Bir hata oluştu. Lütfen uygulamayı yeniden başlatın.'
		} ,

		screens : {

			algorithms 		: {
				title 		:'{{length}} Algoritmalar' 	,
				headers 	: {
					name 	: 'Isim' 					,
					profit 	: 'Kâr' 					,
					symbol 	: 'Sembol'
				} ,
				none 		: 'Arama terimi için para birimi bulunamadı'
			} ,

			detail 			: {
				title 		: 'Detay' 					,
				add 		: 'Portföyüne ekle' 		,
				update 		: 'Portföyü güncelle'
			} ,

			exchanges 		: {
				title 		: 'Satın alma'
			} ,

			language 		: {
				title 		: 'Dili değiştir'
			} ,

			settings 		: {
				title 		: 'Ayarlar'
			} ,

			share 			: {
				title 		: 'Kripto Madeni Para Madencisi' ,
				summary 	: '#CryptoCoinMiner için en karlı şifreleme oranını bulun!'
			} ,

			theme 			: {
				title 		: 'Temayı değiştir'
			} ,

			translations 	: {
				title 		: 'Çeviriyi gönderin' ,
				action 		: 'Bir çeviri gönderin' ,
				body 		: 'Bu uygulama, kullanıcılarımız için çok dilde destek sağlamak için Google Çeviri\'yi kullanmaktadır. Muhtemelen daha iyi olabilir. Başka bir dil konuşursanız ve uygulamaya eklemesini isterseniz lütfen bir çeviri gönderin.'
			} ,

			themes 			: {
				title 		: 'Tema gönderin',
				action 		: 'Bir tema gönder' ,
				body 		: 'Bir tema göndermek isterseniz lütfen renk paletinize ve temanızın adını gönderin ve onu uygulamaya ekleyin.'
			} ,

			donate 		: {
				action 		: '{{Placeholder}} adresini kopyala' ,
				title 		: 'Bağışta bulunmak' ,
				body 		: 'Lütfen bu uygulamanın ücretsiz olarak kalmasına ve bağış yaparak daha da geliştirilmesine yardımcı olun. Aşağıdaki düğmelere basarak M-cüzdan adresini panonuza kopyalayabilirsiniz.' ,
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
