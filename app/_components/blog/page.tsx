import { Blog, getBlog } from '@/app/ _libs/microcmsClient';
import { GetStaticProps, GetStaticPaths } from 'next';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/router';
import styles from "./index.module.css";

interface Props {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getBlog(params.slug).catch(notFound);
    return (
        <div className={styles.bgc}>
            <div className={styles.container}>
                <div className={styles.articleContainer}>
                    <div dangerouslySetInnerHTML={{ __html: data.article }} />
                </div>
            </div>
        </div>
    );
}
