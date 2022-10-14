import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Long', text: 'Learning React is Great!' },
  ];
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
