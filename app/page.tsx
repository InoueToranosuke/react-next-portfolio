"use client"; // これでこのコンポーネントがクライアントコンポーネントとして動作することを明示的に指定します

import Link from "next/link"; // Linkコンポーネントをインポート
import Image from "next/image"; // Next.jsのImageコンポーネントをインポート

export default function Home() {
  // 画像のURLまたはローカルパスを配列に格納（画像を5枚に変更）
  const imageUrls = [
    { src: "/images/first/Image-1.jpg", id: 1 },
    { src: "/images/first/Image-2.jpg", id: 2 },
    { src: "/images/first/Image-3.jpg", id: 3 },
    { src: "/images/first/Image-4.jpg", id: 4 },
    { src: "/images/first/Image-5.jpg", id: 5 },
  ];

  return (
    <div>
      {/* ヘッダー */}
      <header
        style={{
          backgroundColor: "#333", // ヘッダーの背景色
          color: "#fff", // テキスト色
          padding: "10px 20px", // ヘッダー内の余白
          display: "flex", // 横並びに配置
          justifyContent: "space-between", // 左右にコンテンツを配置
          alignItems: "center", // 垂直中央揃え
          position: "absolute", // ヘッダーを動画の上に配置
          top: 0, // 上に配置
          left: 0, // 左に配置
          width: "100%", // 幅を100%にする
          zIndex: 1, // 動画より前面に表示
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>My Website</h1>
        </div>
        <nav>
          <ul
            style={{
              display: "flex", // リストアイテムを横並び
              gap: "20px", // アイテム間の隙間
              listStyleType: "none", // リストのデフォルトの点を非表示
              margin: 0,
              padding: 0,
            }}
          >
            {/* ページへのリンク */}
            <li>
              <Link href="/page1" style={{ color: "#fff" }}>
                Page 1
              </Link>
            </li>
            <li>
              <Link href="/page2" style={{ color: "#fff" }}>
                Page 2
              </Link>
            </li>
            <li>
              <Link href="/page3" style={{ color: "#fff" }}>
                Page 3
              </Link>
            </li>
            <li>
              <Link href="/page4" style={{ color: "#fff" }}>
                Page 4
              </Link>
            </li>
            <li>
              <Link href="/page5" style={{ color: "#fff" }}>
                Page 5
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* 大きな動画 */}
      <div style={{ width: "100%", height: "500px", marginBottom: "40px" }}>
        <video
          width="100%"
          height="100%"
          controls
          src="/videos/sample-video.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* "PLACE" という文字 */}
      <div
        style={{
          textAlign: "left", // テキストを左寄せ
          fontSize: "36px", // フォントサイズ
          fontWeight: "bold", // フォントの太さ
          marginBottom: "40px", // 動画と画像の間のスペース
          color: "#333", // テキストの色
          paddingLeft: "20px", // 左端に少しスペースを追加
        }}
      >
        PLACE
      </div>

      {/* 画像ギャラリー（均等に配置） */}
      <div
        style={{
          display: "flex", // 横並びにするための設定
          justifyContent: "space-evenly", // 画像を均等に配置
          marginTop: "20px",
        }}
      >
        {imageUrls.map((image) => (
          <div
            key={image.id}
            style={{
              flexShrink: 0,
              position: "relative",
              border: "4px solid #000", // 枠線を追加
              margin: "5px", // 画像間のスペースを追加
              width: "calc(20% - 10px)", // 画像を均等に表示するために幅を設定、枠線を考慮
              height: "200px", // 高さを固定
              overflow: "hidden", // 枠からはみ出さないように
              boxSizing: "border-box", // 枠線を含めてサイズを調整
              borderRadius: "10px", // 角を丸くする
            }}
          >
            {/* 画像にリンクを追加 */}
            <Link href={`/image-details/${image.id}`} passHref>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Next.jsのImageコンポーネントを使って画像を表示 */}
                <Image
                  src={image.src} // 画像のパス
                  alt={`photo ${image.id}`} // 画像のalt属性
                  layout="fill" // 画像が枠を埋めるように設定
                  objectFit="cover" // 画像を枠にぴったり広げる
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* フッター */}
      <footer
        style={{
          backgroundColor: "#333", // フッターの背景色
          color: "#fff", // テキスト色
          padding: "20px", // フッター内の余白
          textAlign: "center", // テキストを中央揃え
          position: "fixed", // フッターを画面下部に固定
          bottom: 0, // 下に配置
          width: "100%", // 横幅を100%に設定
        }}
      >
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
