/**
 * Converts raw Builder.io content into the shape our UI expects.
 * Adjust the field names if your Builder model uses something different.
 */
export default function mapBuilderNews(contentArray = []) {
    return contentArray.map((item) => ({
      id: item.id,
      title: item.data?.title ?? '(untitled)',
      date: item.data?.date,            // ISO 8601 string
      blurb: item.data?.blurb,
      hero: item.data?.image,           // URL
      type: item.data?.category ?? 'misc',
      link: item.data?.linkUrl || `/news/${item.id}`,
    }));
  }