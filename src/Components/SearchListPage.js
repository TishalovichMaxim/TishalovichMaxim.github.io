import {} from 'react-bootstrap';
import FigureList from './FigureList';
import writersInfo from './WriterComponents/WritersInfo';

function SearchListPage() {
  return (
      <>
          <FigureList writers={writersInfo} />
    </>
  );
}

export default SearchListPage;