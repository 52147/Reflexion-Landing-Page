// app/news/page.js
import NewsSections from './NewsSections';
import HeroPressGroup from './HeroPressGroup';
import AllTopics from './AllTopics';


export default function NewsPage() {
  return (
    <>
      <HeroPressGroup />
        {/* Add your News sections here */}
        <NewsSections/>
        <AllTopics/>
      {/* ...the rest of your News sections / topic cloud etc. */}
    </>
  );
}