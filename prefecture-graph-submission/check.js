let app = new Vue({
    el: '#app',
    data: {
        //都道府県一覧
        prefectures: [],
        //エンドポイント
        apiEndpoint: 'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        // APIアクセストークン
        piToken: 'hogehoge-token'
    },
    mounted() {
        // API取得
        axios.get(this.apiEndpoint, {
            //トークン設定
            headers: { 'X-API-KEY': this.apiToken }
        }).then((response) => {
            //レスポンス取得
            this.prefectures = response.data;
        });
    }
});
