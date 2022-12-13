import WriterIcon from './figure';
import Videos from './WriterComponents/WriterVideos';
import Gallery from './WriterComponents/WriterGallery';
import writersInfo from './WriterComponents/WritersInfo';
import WriterMap from './WriterComponents/WriterMap';
import FigureList from './FigureList';
import Timeline from './WriterComponents/WriterTimeline';
import timelinesInfo from './WriterComponents/TimelinesData';

function Writers() {
    return (
        <>
            <WriterIcon description={writersInfo.kupala.description} dates={writersInfo.kupala.dates} name={writersInfo.kupala.name} />
            <FigureList />
            <Timeline timeline={timelinesInfo.kupala} />
            <Videos videoUrls={writersInfo.kupala.videos} />
            <Gallery images={writersInfo.kupala.photo} />
            <WriterMap coords={writersInfo.kupala.coords} />
      </>
    );
  }
  
  export default Writers;