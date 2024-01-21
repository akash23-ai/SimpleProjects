import "./App.css";
import Image from "./Image";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="bg">
          <Image />
        </div>
        <div className="ImgDiv">
          <img
            src="https://images.unsplash.com/photo-1548387834-7bf05019e89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="profileImg"
          />
        </div>
        <div className="profile">
          <h1 className="profileName">
            Name <span className="age">30</span>
          </h1>
          <h2 className="city">LONDON</h2>
        </div>
        <div className="bottom">
          <div className="followers">
            <h1>80K</h1>
            <h2>Followers</h2>
          </div>
          <div className="likes">
            <h1>803K</h1>
            <h2>Likes</h2>
          </div>
          <div className="photos">
            <h1>1.4K</h1>
            <h2>Photos</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
