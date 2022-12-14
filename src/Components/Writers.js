import WriterIcon from './figure';
import Videos from './WriterComponents/WriterVideos';
import Gallery from './WriterComponents/WriterGallery';
import writersInfo from './WriterComponents/WritersInfo';
import WriterMap from './WriterComponents/WriterMap';
import FigureList from './FigureList';
import Timeline from './WriterComponents/WriterTimeline';
import { useParams } from "react-router-dom";

function Writers() {
    const { id } = useParams();
    return (
        <>
            <WriterIcon description={writersInfo[+id].description} dates={writersInfo[+id].dates} name={writersInfo[+id].name} />
            <Timeline timeline={writersInfo[+id].timeline} />
            <Videos videoUrls={writersInfo[+id].videos} />
            <Gallery images={writersInfo[+id].photo} />
            <WriterMap coords={writersInfo[+id].coords} />
      </>
    );
  }
  
  export default Writers;