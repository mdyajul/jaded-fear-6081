import React from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleUserPage = () => {
  const { user_id } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
    getData(`https://newsapi.org/v2/everything/${user_id}?q=health&sortBy=popularity&pageSize=20&apiKey=b03852aed1984e10bd039b6fbc696d00`).then((res) =>
      setUserDetails(res.data)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <img src={userDetails.urlToImage} alt="prof-pic" />
       
      <p>Email : {userDetails.title}</p>
      <Link to="/myfeed">GO BACK</Link>
    </>
  );
};

export default SingleUserPage;