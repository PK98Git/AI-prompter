import React from 'react'


const viewPost = ({ params }) => {
  const [prompData, setprompData] = useState([]);
  console.log("Props by the view-post", params.id);
  return (
    <div>
      <h1> Post Title {params}</h1>
    </div>
  );
};


export default viewPost;





