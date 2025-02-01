import { Blog, getBlog } from '@/app/ _libs/microcmsClient';
import { GetStaticProps, GetStaticPaths } from 'next';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/router';

interface Props {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getBlog(params.slug).catch(notFound);
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.article}</p>
        </>
    );


}
