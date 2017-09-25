
export default {
	
	vi : {

		id 		: 'vi' 				,
		names 	: {
			en 	: 'Vietnamese' 		,
			de 	: 'Vietnamesisch' 	,
			fr 	: 'Vietnamien' 		,
			ms 	: 'Bahasa Inggeris' ,
			vi 	: 'Tiếng Việt' 		,
			tr 	: 'Vietnam' 		,
			zh 	: '英语'
		} ,

		actions 		: {
			ad 			: 'Tài trợ' 						,
			all 		: 'mọi điều' 						,
			add 		: 'Thêm vào' 						,
			calculating : 'Tính...' 						,
			cancel 		: 'Hủy' 							,
			load 		: 'Tải' 							,
			loading 	: 'Tải...' 							,
			more 		: 'Đọc thêm' 						,
			refresh 	: 'Tải lại' 						,
			return 		: 'Trở lại' 						,
			remove 		: 'Tẩy' 							,
			share 		: 'Chia sẻ' 						,
			search 		: 'Vui lòng nhập cụm từ tìm kiếm' 	,
			update 		: 'Cập nhật'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Không có sẵn' ,
			ajax 			: 'Đã xảy ra lỗi khi truy xuất dữ liệu. Vui lòng thử lại.' ,
			default 		: 'Rất tiếc - đã xảy ra lỗi. Vui lòng khởi động lại ứng dụng.'
		} ,

		screens : {

			algorithms 		: {
				title 		:'{{length}} Thuật toán' 	,
				headers 	: {
					name 	: 'Tên'						,
					profit 	: 'Lợi nhuận' 				,
					symbol 	: 'Ký hiệu'
				} ,
				none 		: 'Không tìm thấy đơn vị tiền tệ cho cụm từ tìm kiếm'
			} ,

			detail 			: {
				title 		: 'Chi tiết' 					,
				add 		: 'Thêm vào danh mục đầu tư' 	,
				update 		: 'Cập nhật danh mục đầu tư'
			} ,

			exchanges 		: {
				title 		: 'Mua, tựa vào, bám vào'
			} ,

			language 		: {
				title 		: 'Thay đổi ngôn ngữ'
			} ,

			settings 		: {
				title 		: 'Cài đặt'
			} ,

			share 			: {
				title 		: 'Khoáng sản Crypto Coin' ,
				summary 	: 'Tìm mật mã có lợi nhất để khai thác #CryptoCoinMiner!'
			} ,

			theme 			: {
				title 		: 'Thay đổi chủ đề'
			} ,

			translations 	: {
				title 		: 'Gửi bản dịch' ,
				action 		: 'Gửi bản dịch' ,
				body 		: 'Ứng dụng này sử dụng Google Translate cung cấp hỗ trợ đa ngôn ngữ cho người dùng của chúng tôi. Có lẽ nó sẽ tốt hơn rất nhiều. Nếu bạn nói một ngôn ngữ khác và muốn nó được thêm vào ứng dụng hãy giúp đỡ bằng cách gửi một bản dịch.'
			} ,

			themes 			: {
				title 		: 'Gửi chủ đề',
				action 		: 'Gửi một chủ đề' ,
				body 		: 'Nếu bạn muốn gửi chủ đề vui lòng gửi qua bảng màu và tên chủ đề của bạn và chúng tôi sẽ thêm nó vào ứng dụng.'
			} ,

			donate 		: {
				action 		: 'Sao chép địa chỉ {{placeholder}}' ,
				title 		: 'Tặng' ,
				body 		: 'Hãy giúp ứng dụng này ở lại miễn phí và phát triển hơn nữa bằng cách quyên góp. Nhấn các nút bên dưới sẽ sao chép địa chỉ ví với bộ nhớ tạm của bạn.' ,
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
