/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './Homepage.css';
import tweetstorm from '../../images/HomePage/tweetstorm.svg';
import tabs from '../../images/HomePage/tabs.svg';
import mindMap from '../../images/HomePage/mindMap.svg';
import knowledge from '../../images/HomePage/knowledge.svg';

export default function HomePage() {
  return (
    <div>
      <section className="fdb-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="order-md-8 m-auto ml-lg-auto mr-lg-0 col-md-6 pt-2 pt-lg-0">
              <img alt="tweetstorm" className="img-size" src={tweetstorm} />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <h1 style={{ fontSize: '3.5rem' }}>
                Organize your Twitter likes.
              </h1>
              <p className="lead mb-5" style={{ margin: '20px auto' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel congue justo. Mauris posuere leo et varius commodo. Ut
                congue neque id leo tristique suscipit.
              </p>
              <p className="h3 mt-4">
                <button type="button" className="btn btn-purple">
                  SIGN UP FOR EARLY ACCESS
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block" style={{ backgroundColor: '#F3F2F2' }}>
        <div className="container">
          <div className="row text-left align-items-center pt-5 pb-md-5">
            <div className="col-8 col-md-5 m-auto">
              <img alt="reading-list" className="img-size" src={tabs} />
            </div>
            <div className="col-12 col-md-5 m-md-auto">
              <h2 style={{ fontSize: '2.5rem' }}>
                <strong>Sort tweets with tags</strong>
              </h2>
              <p className="lead" style={{ margin: '20px auto' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                laoreet dolor ut elit imperdiet, vitae aliquet tortor molestie.
                Aliquam sed quam metus.
              </p>
            </div>
          </div>
          <div className="row text-left align-items-center pt-5 pb-md-5">
            <div className="col-8 col-md-5 m-md-auto order-md-5 m-auto">
              <img alt="mind map" className="img-size" src={mindMap} />
            </div>
            <div className="col-12 col-md-5">
              <h2 style={{ fontSize: '2.5rem' }}>
                <strong>Create a mindmap of your favorites</strong>
              </h2>
              <p className="lead" style={{ margin: '20px auto' }}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; In at tincidunt odio. Vivamus ultricies a
                arcu eget suscipit. Nunc arcu mi, aliquam ut eros in, sagittis
                sollicitudin nisi.
              </p>
            </div>
          </div>
          <div className="row text-left align-items-center pt-5">
            <div className="col-8 col-md-5 m-auto">
              <img alt="knowledge" className="img-size" src={knowledge} />
            </div>
            <div className="col-12 col-md-5 m-md-auto">
              <h2 style={{ fontSize: '2.5rem' }}>
                <strong>Review your learnings with email reminders</strong>
              </h2>
              <p className="lead" style={{ margin: '20px auto' }}>
                {' '}
                Nullam at augue ut nibh sagittis gravida et in mi. Donec
                tincidunt elit sed felis feugiat consequat. Integer a bibendum
                mauris. Morbi in felis velit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <div className="row">
                <div className="col">
                  <h1>Be the first to know</h1>
                  <p className="lead">
                    When she reached the first hills, she had a last view back
                    on the skyline of her hometown.
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-12 col-md-5 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-12 col-md-5 mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 col-md-2 mt-4">
                  <button className="btn btn-purple" type="button">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
