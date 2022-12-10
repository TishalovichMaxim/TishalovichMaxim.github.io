import {} from 'react-bootstrap';

import PortalDescription from './PortalDescription';
import OurTeam from './OurTeam';
import DailyWriter from './DailyWriter';
import WriterIcon from './figure';

function MainPage() {
  return (
    <>
        <PortalDescription/>
        <DailyWriter/>
        <OurTeam/>
    </>
  );
}

export default MainPage;