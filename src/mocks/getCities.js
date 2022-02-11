import cities from './cities';

const fetchedData = () => cities().then((data) => data);

export default fetchedData;
