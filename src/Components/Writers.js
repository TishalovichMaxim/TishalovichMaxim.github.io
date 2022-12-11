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
            <WriterIcon description={writersInfo[0].description} dates={writersInfo[0].dates} name={writersInfo[0].name} />
            <FigureList />
            <Timeline timeline={timelinesInfo[0].timeline} />
            <Videos videoUrls={writersInfo[0].videos} />
            <Gallery images={writersInfo[0].photo} />
            <WriterMap coords={writersInfo[0].coords} />
      </>
    );
  }
  
  export default Writers;