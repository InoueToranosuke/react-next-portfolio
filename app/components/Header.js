// components/Header.js

"use client"; // これでこのコンポーネントがクライアントコンポーネントとして動作することを明示的に指定します

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#333", // ヘッダーの背景色
        color: "#fff", // テキスト色
        padding: "10px 20px", // ヘッダー内の余白
        display: "flex", // 横並びに配置
        justifyContent: "space-between", // 左右にコンテンツを配置
        alignItems: "center", // 垂直中央揃え
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
  );
}
