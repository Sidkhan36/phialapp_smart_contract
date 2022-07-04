import Head from "next/head";
import Script from "next/Script";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Phial of Life</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
      </Head>
      <main>
        <section className="home-menu">
          <header className="header-main">
            <div className="nav-area-full">
              <div className="container-fluid">
                <div className="row" id="home-row">
                  <div className="col-md-1 logo-area">
                    <div className="logo" id="wallet-logo">
                      <a href="index.html">
                        <h6>
                          Phial
                          <span>of Life</span>
                        </h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 d-flex"></div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section className="home-tab">
          <div className="container-fluid">
            <div className="row">
              <header className="header-main"></header>
              <div className="">
                <div className="tabs-custom general">
                  <div id="wallet" className="">
                    <div className="row justify-content-center">
                      <div className="">
                        <div className="roadmap-box">
                          <div className="roadmap-box-inner">
                            <div className="number">
                              <span className="minus">-</span>
                              <input type="text" value="1" />
                              <span className="plus">+</span>
                            </div>
                            <h4>0.56 ETH</h4>
                            <h6>
                              Price per NFT - 0.56 ETH
                              <span>Max per wallet- 5</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" id="ct-row">
                      <div className="col-md-3">
                        <div className="main-logo">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="img-fluid"
                            src="assets/images/logo.gif"
                            alt="*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ct-txt">
                          <a href="javascript:;">CONNECT A WALLET</a>
                          <h5>Copyright © 2022 Oluju. All rights reserved</h5>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="top-links"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="assets/js/jquery.min.js" />
      <Script type="text/javascript" src="assets/js/wow.js" />
      <Script type="text/javascript" src="assets/js/functions.js" />
    </div>
  );
}
