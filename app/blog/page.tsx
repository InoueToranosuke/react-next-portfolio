import { getBlogList } from "../ _libs/microcmsClient"
import Window from "@/app/_components/Window"

const Page: () => Promise<React.JSX.Element> = async () => {
    const data = await getBlogList()

    return (
        data.contents.length === 0
        ? (
            <div>no blog</div>
        ) : (
            <ul>
                {data.contents.map((content, index) => (
                    <li key={index}>
                        <Window
                            work_img={content.eyecatch}
                            product_title={content.title}
                            explanation={content.explanation}
                            href={`/blog/${content.id}`}
                        />
                    </li>
                ))}
            </ul>
        )
    );
};

export default Page;
