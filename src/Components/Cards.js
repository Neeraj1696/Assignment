import React from "react";
import Card from "../Components/Card";
import "../Components/Cards.css";

function Cards() {
  return (
    <div className="Cards">
      <Card
        img={`https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
        title="Meta trap House"
      />
      <Card
        img={`https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320`}
        title="Nature Image"
      />
      <Card
        img={`https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg`}
        title="Flower Image"
      />
      <Card
        img={`https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg`}
        title="Bird "
      />
      <Card
        img={`https://www.thebrewapps.com/wp-content/uploads/2021/04/1026-1.jpg`}
        title="Cloud Service"
      />
      <Card
        img={`https://nas-national-prod.s3.amazonaws.com/social-media-photo/article/f_mockingbird-original-size.jpg`}
        title="Bird Image"
      />
    </div>
  );
}

export default Cards;
