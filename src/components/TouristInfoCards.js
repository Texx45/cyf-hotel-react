import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="manchester-card card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FExterior_photo_of_the_Science_and_Industry_Museum_-_Science_Museum_Group_-_The_Board_of_Trustees_of_the_Science_Museum_1445495978.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
          alt="manchester"
        />
        <h2>Manchester</h2>
        <p>
          Welcome to the official tourism site of Greater Manchester where you
          can search for things to do in Manchester and find out what's on, as
          well as getting inspiration for your visit to this fantastic city
          region.
        </p>
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="london-card card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/business/tower-bridge-640x360.jpg?mw=640&hash=E71A0CF75357DCAEA71C2A2F8282B8848F3FDE01"
          alt="london"
          className="card-img-top"
        />
        <h2>London</h2>
        <p>
          Don't miss the best things to do and iconic places to visit in London.
          Explore the city on sightseeing tours, soak up culture at museums and
          galleries, or choose from the many free things to do.
        </p>
        <div className="card-body">
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit London
          </a>
        </div>
      </div>
      <div className="glasgow-card card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/187999/West-end-Tall-Ship-and-Riverside-Museum-Content-Block_2021-09-26-191053_dorw_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
          alt="glasgow"
          className="card-img-top"
        />
        <h2>Glasgow</h2>
        <p>
          In Glasgow city centre, there are huge pieces of art adorning some of
          the city's buildings which form the City Centre Mural Trail. Discover
          where you can find these vibrant splashes of colour.
        </p>
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
