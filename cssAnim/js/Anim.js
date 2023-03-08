// スライド写真
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});


//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
    $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
      
    var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去    
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く

    }
  });
  

  // ページ内リンク
  $('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });


// スクロールでタイトルに下線(https://yusukecode.com/scroll-line/)

let expantion = document.getElementsByClassName('underline-before');
// .underline-beforeのついたDOMを取得

let expantionswitch = ["off","off"];
// 下線を引くアクションを行ったか行ってないかのスイッチを配列の値で表現。初期値はoff

window.onscroll = function(){
// スクロールした場合、関数（function）を実行

for(let i = 0,len = expantion.length;i < len;i++){
// .underline-beforeの数だけ繰り返しするfor文

let ex_clientRect = expantion[i].getBoundingClientRect();
// [i]番目の.underline-beforeの境界ボックスを取得（画面内での.underline-beforeの位置を取得）


let wh = window.innerHeight;
// ブラウザのウインドウの表示領域の高さを取得。（ページの上からどれだけ進んだか計る）


if(wh > ex_clientRect.top + 400 && expantionswitch[i] === "off") {
// if文による分岐。もしウインドウの表示領域の高さが、[i]番目の.underline-beforeの画面内での上からの位置+400pxより
// 高かった場合。また、[i]番目のexpantionswitchがoffの場合にtrueの動作を返す。

expantion[i].classList.add('underline-after');
// [i]番目の.underline-beforeがついている要素に新たに.underline-afterを追加。これによって下線を引くアクションが実現する。

expantionswitch[i] = "on";
// offだった配列の値をonにする。これによって二度同じ動作をするのを防いでいる。
}
}
}
