
export default {
	
	ms : {

		id 		: 'ms' 			,
		names 	: {
			en 	: 'Malay' 		,
			de 	: 'Malaiisch' 	,
			fr 	: 'Malais' 		,
			ms 	: 'Melayu' 		,
			tr 	: 'Malaya' 		,
			vi 	: 'Người Malay' ,
			zh 	: '马来语'
		} ,

		actions 		: {
			ad 			: 'Ditaja' 							,
			all 		: 'Semua' 							,
			add 		: 'Tambah' 							,
			calculating : 'Menghitung...' 					,
			cancel 		: 'Batalkan' 						,
			load 		: 'Beban' 							,
			loading 	: 'Memuatkan...' 					,
			more 		: 'Baca lebih lanjut' 				,
			refresh 	: 'Menyegarkan' 					,
			return 		: 'Belakang' 						,
			remove 		: 'Keluarkan' 						,
			share 		: 'Berkongsi' 						,
			search 		: 'Sila masukkan istilah carian' 	,
			update 		: 'Kemas kini'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Tidak ada' 														,
			ajax 			: 'Terdapat ralat untuk mendapatkan semula data. Sila cuba lagi.' 	,
			default 		: 'Oops - ralat telah berlaku. Sila mulakan semula aplikasi.'
		} ,

		screens : {

			algorithms 		: {
				title 		:'{{length}} Algoritma' ,
				headers 	: {
					name 	: 'Nama' 				,
					profit 	: 'Keuntungan' 			,
					symbol 	: 'Simbol'
				} ,
				none 		: 'Tiada mata wang yang dijumpai untuk istilah carian'
			} ,

			detail 			: {
				title 		: 'Terperinci' 				,
				add 		: 'Tambah kepada portfolio' ,
				update 		: 'Kemas kini portfolio'
			} ,

			exchanges 		: {
				title 		: 'Pembelian'
			} ,

			language 		: {
				title 		: 'Tukar bahasa'
			} ,

			settings 		: {
				title 		: 'Tetapan'
			} ,

			share 			: {
				title 		: 'Crypto Coin Miner' ,
				summary 	: 'Cari cryptocurrency yang paling menguntungkan untuk #CryptoCoinMiner saya lombong!'
			} ,

			theme 			: {
				title 		: 'Tukar tema'
			} ,

			translations 	: {
				title 		: 'Terjemahan' ,
				action 		: 'Hantar terjemahan' ,
				body 		: 'Aplikasi ini menggunakan Google Translate untuk memberikan sokongan berbilang bahasa kepada pengguna kami. Ini mungkin lebih baik. Sekiranya anda bercakap bahasa lain dan ingin menambahkannya kepada aplikasi, sila membantu dengan menyerahkan terjemahan.'
			} ,

			themes 			: {
				title 		: 'Hantar tema',
				action 		: 'Hantar tema' ,
				body 		: 'Jika anda ingin menyerahkan tema sila hantar melalui palet warna dan nama tema anda dan kami akan menambahkannya ke aplikasi.'
			} ,

			donate 		: {
				action 		: 'Salin alamat {{placeholder}}' ,
				title 		: 'Menderma' ,
				body 		: 'Tolong bantu aplikasi ini supaya iklan percuma dan pembangunan selanjutnya dengan menderma. Menekan butang di bawah akan menyalin alamat dompet ke clipboard anda.' ,
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
