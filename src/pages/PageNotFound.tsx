import 'assets/objects/page-not-found.scss';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='c-page-not-found'>
      <div className='c-page-not-found--top'>Oops!</div>
      <div className='c-page-not-found--middle'>404</div>
      <div className='c-page-not-found--bottom'>Sorry, couldn't find what you're looking for</div>
      <Link to={'/'}> Got back </Link>
    </div>
  );
}
