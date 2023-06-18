import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get = async context => {
	const posts = await getCollection("post");

	return rss({
		title: "426",
		description: "블로그",
		site: context.site,
		items: posts.map(post => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/posts/${post.slug}`
		})),
    customData: "<language>ko-KR</language>"
	});
};
