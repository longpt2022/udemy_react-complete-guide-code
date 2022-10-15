import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
  { id: 'q2', author: 'Long', text: 'Learning React is Great!' },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  // console.log(match);

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
