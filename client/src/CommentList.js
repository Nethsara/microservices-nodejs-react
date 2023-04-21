import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postID }) => {
  const [comments, setCommets] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postID}/comments`
    );

    setCommets(res.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
