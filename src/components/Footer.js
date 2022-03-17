import React from 'react';

const Footer = () => {
    return (
      <div className="main-footer">
          <div className="container">
            <div className="row">
                <div className="col">
                  <h4>Github</h4>
                  <ul className="list-unstyled">
                    <a href="https://github.com/jcsgh" target="_blank" className="git-icon">
                      <ion-icon name="logo-github" size="large"></ion-icon>
                   </a>
                   {/* <a href="" target="" className="insta-icon">
                      <ion-icon name="logo-instagram" size="large"></ion-icon>
                   </a>
                   <a href="" target="" className="facebook-icon">
                      <ion-icon name="logo-facebook" size="large"></ion-icon>
                   </a>
                   <a href="" target="" className="twitter-icon">
                      <ion-icon name="logo-twitter" size="large"></ion-icon>
                   </a>
                   <a href="" target="" className="reddit-icon">
                      <ion-icon name="logo-reddit" size="large"></ion-icon>
                   </a> */}

                  </ul>
                </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                  &copy;{new Date().getFullYear()} Password Manager | All rights reserved | Terms Of Service | Privacy
              </p>
              
            </div>
          </div>
      </div>
    );
  }

  export default Footer