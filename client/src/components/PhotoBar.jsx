import React from 'react';

function PhotoBar() {
    return (
        <div className="photo-container">
            <div className="large1">
                <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/b9a42b5a9b40f75163bd15ab4ae19e59.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format" alt="photo 1"></img>
            </div>
            <div className="split1">
                <div className="split1-pic1">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/3d115b2f4dc60961c6efee23da4017cb.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo 2"></img>
                </div>
                <div className="split1-pic2">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/26631a1ebcf5ff8f185e6af2c4e8448e.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo 3"></img>
                </div>
            </div>
            <div className="large2">
                <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/2a3f1cfdec5f7736f3011c60d74cea5d.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format" alt="photo 4"></img>
            </div>
            <div className="split2">
                <div className="split2-pic1">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/62aa8280bf4efcc39ad24ecbf3a51749.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo 5"></img>
                </div>
                <div className="split2-pic2">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/e2d6a5eb75a3e944305c8725061a59d7.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo 6"></img>
                </div>
            </div>
            <div className="large3">
                <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/24572cd54f93862325243c8140a7e49f.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format" alt="photo 7"></img>
            </div>
            {/* <div className="split3">
                <div className="split3-pic1">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/2e66e0a6f05b61fb467d08dd032a69db.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo8"></img>
                </div>
                <div className="split3-pic2">
                    <img src="https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/09b108ae91beb45c5655bc4ed565dede.jpg?fit=crop&crop=center&max-w=190&max-h=190&auto=format" alt="photo9"></img>
                </div>
            </div> */}
        </div>
    )
}

export default PhotoBar;