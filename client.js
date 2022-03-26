// *************************************
// 簡易スマホチェック
// *************************************
jQuery.isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
toastr.options={"closeButton":false,"debug":false,"newestOnTop":false,"progressBar":false,"positionClass":"toast-bottom-center","preventDuplicates":false,"onclick":null,"showDuration":"300","hideDuration":"1000","timeOut":"3000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"};
if ( !$.isMobile ) {
	toastr.options.positionClass = "toast-top-center";
}

$(function(){

    // INPUT type="file" のファイル選択後のイベント
    $("#target").on("change", function(){

        $("#result").html( "" );

        // 選択されたファイルの情報
        console.dir( this.files );

        // ファイル参照用のクラス : FileReader
        var reader = new FileReader();

        // 表示用にプロパティを追加
        reader.name = this.files[0].name;
        reader.type = this.files[0].type;

        // 画像が読み込まれると実行されるイベント
        $(reader).on("load", function () {

            // FileReader の内容
            console.dir( this );

            if ( this.type.indexOf("image/") == 0 ) {
                $("<img>").appendTo("#image")
                    .prop( {"src": this.result, "title": this.name + " : " + this.type } )
                    .css( {"width": "160px", "margin": "10px","border": "1px solid #c0c0c0" } );
            }
            else {
                $("<img>").appendTo("#image")
                    .prop( {"src": "./notimage.png", "title": this.name + " : " + this.type } )
                    .css( {"width": "160px", "margin": "10px","border": "1px solid #c0c0c0" } );
            }

        });

        if (this.files[0]) {
            // 画像を読み込み
            reader.readAsDataURL(this.files[0]);
        }

    });
    
});
