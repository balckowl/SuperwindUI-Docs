import { getDetail, getList } from "../../../libs/microcms";
import { notFound } from "next/navigation";
import SyntaxHighlight from "../../components/SyntaxHighlight";
import { Metadata } from "next";

export async function generateMetadata({ params: { postId } }: { params: { postId: string } }): Promise<Metadata> {
    const post = await getDetail(postId);
    return {
        title: `${post.title} | SuoerwindUI`,
        description: `${post.description}`,
        openGraph: {
            title: `${post.title} | SuperwindUI`,
            description: `${post.description}`,
            url: `superwindui.vercel.app/${postId}`,
            siteName: 'SuperwindUI',
            images: [
                {
                    width: '1200',
                    height: '675',
                    url: `${post.ogpImg?.url}`
                }
            ],
            locale: 'jp',
            type: 'article',
        }
    };
}


export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            postId: post.id,
        };
    });

    return [...paths];
}

export default async function StaticDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(postId);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <div className="container">
                <article className="article">
                    <h2>{post.title}</h2>
                    {/* <SyntaxHighlight content={post.content}/> */}
                    <SyntaxHighlight content={post.content} />
                </article>
            </div>
        </section>
    );
}