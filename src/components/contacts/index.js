// import {Link, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Contacts = () => {
  const [users, setUsers] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const postQuery = searchParams.get('post') || '';
  // console.log('before', postQuery)

  // const [search, setSearch] = useState(postQuery);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //
  //   const query = form.search.value;
  //   // const isLatest = form.latest.checked;
  //
  //   const params = {};
  //
  //   if (query.length) params.post = query;
  //   // if (isLatest) params.latest = true;
  //
  //   setSearchParams(params);
  //   console.log('after', postQuery)
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/?limit=5')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const view = users
    .map(({id, name}) =>
      <li key={id}>
        {/*<Link to={`/item/${id}/edit`} className="btn btn-outline-info mx-1 mb-3">Edit</Link>*/}
        {/*<Link to={`/item/${id}`} className="btn btn-outline-info mx-1 mb-3">More...</Link>*/}
        <span className="mx-3">{name}</span>
      </li>);
  return (
    <div className="mx-auto">
      <h1 className="text-center my-3">Contacts</h1>
      {/*<form autoComplete="off" onSubmit={handleSubmit}>*/}
      {/*  <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>*/}
      {/*  <input type="submit" value="Search"/>*/}
      {/*</form>*/}
      <ul>
        {view}
      </ul>
    </div>
  );
};

export default Contacts;
