import WriterIcon from './figure';
import Videos from './WriterComponents/WriterVideos';
import Gallery from './WriterComponents/WriterGallery';
import writersInfo from './WriterComponents/WritersInfo';
import WriterMap from './WriterComponents/WriterMap';
import FigureList from './FigureList';
import Timeline from './WriterComponents/WriterTimeline';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Writers() {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    return (
        <>
            <WriterIcon photo={writersInfo[+id].photo[0]} description={writersInfo[+id].description} dates={writersInfo[+id].dates} name={t(writersInfo[+id].name)} />
            <Timeline timeline={writersInfo[+id].timeline} />
            <Videos videoUrls={writersInfo[+id].videos} />
            <Gallery images={writersInfo[+id].photo} />
            <WriterMap coords={writersInfo[+id].coords} place={writersInfo[+id].place}/>
      </>
    );
  }
  
  export default Writers;