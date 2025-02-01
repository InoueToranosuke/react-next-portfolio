import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
    MicroCMSContentId,
    MicroCMSDate,
} from "microcms-js-sdk";


export type Category = {
    name: string;
} & MicroCMSListContent;

export type Blog = {
    id: string;
    title: string;
    article: string;
    createdAt: string;
    updatedAt: string;
    eyecatch: MicroCMSImage | null;
    category: Category | null;
} & MicroCMSListContent;


if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is not defined");
}


const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});


export const getBlogList = async (queries?: MicroCMSQueries) => {
    return await client.getList<Blog>({
        endpoint: "blogs",
        queries,
    });
};

export const getBlog = async (id: string) => {
    return await client.get<Blog>({
        endpoint: "blogs",
        contentId: id,
        customRequestInit: {
            cache: "no-cache",
        }
    });
};