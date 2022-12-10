import WriterIcon from './figure';
import Videos from './WriterComponents/WriterVideos';
import Gallery from './WriterComponents/WriterGallery';
import writersInfo from './WriterComponents/WritersInfo';
import WriterMap from './WriterComponents/WriterMap';

function Writers() {
    return (
        <>
            <WriterIcon description={writersInfo[0].description} dates={writersInfo[0].dates} name={writersInfo[0].name} />
            <Videos videoUrls={writersInfo[0].videos} />
            <Gallery images={writersInfo[0].photo} />
            <WriterMap coords={writersInfo[0].coords} />
      </>
    );
  }
  
  export default Writers;