"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import useWindowSize from "./hooks/useWindowSize";


export default function Home() {

  const el = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['次世代のUIライブラリ', 'モダンなスタイルを網羅'],
      typeSpeed: 250,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="container g-2">
          <div className="hero-text-box">
            <h3 className="hero-brand-name">SuperwindUI</h3>
            <h2><span ref={el}></span></h2>
            <p>ドキュメントがわかりにくい、従来のものはちょっとしたものを作るにはめんどくさすぎる</p>
            <div className="docs-more"><Link href="/docs">使い方を見る</Link></div>
          </div>
          <div className="hero-img-box">
            <img src="/logo.png" alt="" />
            <div className="hero-img-filter-box"></div>
          </div>
        </div>
      </div>

      <div className="intro">
        <div className="container">
          <div className="intro-img-box">
            {width <= 576 ? (
              <img src="/sp-carbon.png" alt="" />
            ) :
              (
                <img src="/carbon.png" alt="" />
              )
            }
          </div>
          <div className="intro-text-box">
            <h3>実際に使ってみる</h3>
            <p>詳しくはdocsのまず初めにをご参照ください。</p>
          </div>
        </div>
      </div>

      <div className="feature">
        <div className="container">
          <div className="cards g-1">
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>🔰</p>
                <h3>初心者</h3>
              </div>
              <div className="card-text-box">
                <p>CSSはあまりわからないけど綺麗なデザインで作ってみたい。</p>
              </div>
            </div>
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>📃</p>
                <h3>見やすい</h3>
              </div>
              <div className="card-text-box">
                <p>従来のCSSフレームワークに比べて、CSSを減らし、見やすいHTMLを実現。</p>
              </div>
            </div>
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>📦</p>
                <h3>超軽量</h3>
              </div>
              <div className="card-text-box">
                <p>スタイルを固定化し、機能を制限した分とても軽量となっています。</p>
              </div>
            </div>
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>👦</p>
                <h3>日本ライク</h3>
              </div>
              <div className="card-text-box">
                <p>製作者は日本人なので、日本ライクなデザインとなっている。</p>
              </div>
            </div>
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>🔥</p>
                <h3>上級者</h3>
              </div>
              <div className="card-text-box">
                <p>他のサービスを学びたい時のお手軽UI開発に。</p>
              </div>
            </div>
            <div className="card box-gray p-1">
              <div className="card-title-box">
                <p>🌪️</p>
                <h3>超速の開発</h3>
              </div>
              <div className="card-text-box">
                <p>スタイルを固定化し、機能を制限した分とても軽量となっています。</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
