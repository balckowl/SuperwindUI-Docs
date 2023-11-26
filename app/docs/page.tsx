import Link from "next/link";
import { getList } from "../../libs/microcms";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Docs | SuoerwindUI',
    description: 'モダンなUIを超速で開発できる次世代のコンポーネントライブラリの利用方法を提供します。',
    openGraph: {
        title: 'SuperwindUI',
        description: 'モダンなUIを超速で開発できる次世代のコンポーネントライブラリの利用方法を提供します。',
        url: 'superwindui.netlify.app/docs',
        siteName: 'SuperwindUI',
        images: [
            {
                width: '1200',
                height: '675',
                url: 'https://superwindui.netlify.app/images/docs.png',
            }
        ],
        locale: 'jp',
        type: 'article',
    }
}

export default async function StaticPage() {
    const { contents } = await getList();

    // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>;
    }

    return (
        <div className="docs">
            <div className="container">
                <div className="cards g-2">
                    {contents.map((post) => {
                        return (
                            <div key={post.id} className="card box-gray rounded-1">
                                <Link href={`/docs/${post.id}`}>
                                    <div className="card-title-box">
                                        <h3>{post.title}</h3>
                                    </div>
                                    <div className="card-img-box">
                                        <img src={post.eyecatch?.url} alt="" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}