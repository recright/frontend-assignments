import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Posts from "../components/posts";
import Footer from "../components/footer";
import Form from "../components/form";

import "./global.css";

const IndexPage = () => {

  const [posts, setPosts] = useState([]);


  return (
    <div>
    <Navbar />
    <Hero />
    <Posts posts={posts} />
    <Form />
    <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>assignment</title>;
