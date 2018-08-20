import React, { Component } from 'react';

class ListService extends Component {
  render() {
    return (
      <div>
        <div class="col-md-12">
          <div class="carousel">

            <div class="carousel-item">
              <div class="listing-item">

                <a href="single-property-page-1.html" class="listing-img-container">

                  <div class="listing-badges">
                    <span class="featured">Featured</span>
                    <span>For Sale</span>
                  </div>

                  <div class="listing-img-content">
                    <span class="listing-price">$275,000
                      <i>$520 / sq ft</i>
                    </span>
                    <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                    <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                  </div>

                  <div class="listing-carousel">
                    <div>
                      <img src={process.env.PUBLIC_URL + '/assets/images/listing-01.jpg'} alt="" />
                    </div>
                    <div>
                      <img src={process.env.PUBLIC_URL + '/assets/images/listing-01b.jpg'} alt="" />
                    </div>
                    <div>
                      <img src={process.env.PUBLIC_URL + '/assets/images/listing-01c.jpg'} alt="" />
                    </div>
                  </div>

                </a>

                <div class="listing-content">

                  <div class="listing-title">
                    <h4>
                      <a href="single-property-page-1.html">Eagle Apartments</a>
                    </h4>
                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      class="listing-address popup-gmaps">
                      <i class="fa fa-map-marker"></i>
                      9364 School St. Lynchburg, NY
                    </a>
                  </div>

                  <ul class="listing-features">
                    <li>Area
                      <span>530 sq ft</span>
                    </li>
                    <li>Bedrooms
                      <span>2</span>
                    </li>
                    <li>Bathrooms
                      <span>1</span>
                    </li>
                  </ul>

                  <div class="listing-footer">
                    <a href="#">
                      <i class="fa fa-user"></i> David Strozier</a>
                    <span>
                      <i class="fa fa-calendar-o"></i> 1 day ago</span>
                  </div>

                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="listing-item">

                <a href="single-property-page-2.html" class="listing-img-container">

                  <div class="listing-badges">
                    <span>For Rent</span>
                  </div>

                  <div class="listing-img-content">
                    <span class="listing-price">$900
                      <i>monthly</i>
                    </span>
                    <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                    <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                  </div>

                  <img src={process.env.PUBLIC_URL + '/assets/images/listing-02.jpg'} alt="" />

                </a>

                <div class="listing-content">

                  <div class="listing-title">
                    <h4>
                      <a href="single-property-page-2.html">Serene Uptown</a>
                    </h4>
                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      class="listing-address popup-gmaps">
                      <i class="fa fa-map-marker"></i>
                      6 Bishop Ave. Perkasie, PA
                    </a>
                  </div>

                  <ul class="listing-features">
                    <li>Area
                      <span>440 sq ft</span>
                    </li>
                    <li>Bedrooms
                      <span>2</span>
                    </li>
                    <li>Bathrooms
                      <span>1</span>
                    </li>
                  </ul>

                  <div class="listing-footer">
                    <a href="#">
                      <i class="fa fa-user"></i> Harriette Clark</a>
                    <span>
                      <i class="fa fa-calendar-o"></i> 2 days ago</span>
                  </div>

                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="listing-item">

                <a href="single-property-page-1.html" class="listing-img-container">

                  <div class="listing-badges">
                    <span class="featured">Featured</span>
                    <span>For Rent</span>
                  </div>

                  <div class="listing-img-content">
                    <span class="listing-price">$1700
                      <i>monthly</i>
                    </span>
                    <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                    <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                  </div>

                  <img src={process.env.PUBLIC_URL + '/assets/images/listing-03.jpg'} alt="" />

                </a>

                <div class="listing-content">

                  <div class="listing-title">
                    <h4>
                      <a href="single-property-page-1.html">Meridian Villas</a>
                    </h4>
                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      class="listing-address popup-gmaps">
                      <i class="fa fa-map-marker"></i>
                      778 Country St. Panama City, FL
                    </a>
                  </div>

                  <ul class="listing-features">
                    <li>Area
                      <span>1450 sq ft</span>
                    </li>
                    <li>Bedrooms
                      <span>2</span>
                    </li>
                    <li>Bathrooms
                      <span>3</span>
                    </li>
                  </ul>

                  <div class="listing-footer">
                    <a href="#">
                      <i class="fa fa-user"></i> Chester Miller</a>
                    <span>
                      <i class="fa fa-calendar-o"></i> 4 days ago</span>
                  </div>

                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="listing-item">


                <a href="single-property-page-3.html" class="listing-img-container">

                  <div class="listing-badges">
                    <span>For Sale</span>
                  </div>

                  <div class="listing-img-content">
                    <span class="listing-price">$420,000
                      <i>$770 / sq ft</i>
                    </span>
                    <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                    <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                  </div>

                  <div class="listing-carousel">
                    <div>
                      <img src={process.env.PUBLIC_URL + '/assets/images/listing-04.jpg'} alt="" />
                    </div>
                    <div>
                      <img src={process.env.PUBLIC_URL + '/assets/images/listing-04b.jpg'} alt="" />
                    </div>
                  </div>

                </a>

                <div class="listing-content">

                  <div class="listing-title">
                    <h4>
                      <a href="single-property-page-3.html">Selway Apartments</a>
                    </h4>
                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      class="listing-address popup-gmaps">
                      <i class="fa fa-map-marker"></i>
                      33 William St. Northbrook, IL
                    </a>
                  </div>

                  <ul class="listing-features">
                    <li>Area
                      <span>540 sq ft</span>
                    </li>
                    <li>Bedrooms
                      <span>2</span>
                    </li>
                    <li>Bathrooms
                      <span>2</span>
                    </li>
                  </ul>

                  <div class="listing-footer">
                    <a href="#">
                      <i class="fa fa-user"></i> Kristen Berry</a>
                    <span>
                      <i class="fa fa-calendar-o"></i> 3 days ago</span>
                  </div>

                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="listing-item">


                <a href="single-property-page-1.html" class="listing-img-container">
                  <div class="listing-badges">
                    <span>For Sale</span>
                  </div>

                  <div class="listing-img-content">
                    <span class="listing-price">$535,000
                      <i>$640 / sq ft</i>
                    </span>
                    <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                    <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                  </div>

                  <img src={process.env.PUBLIC_URL + '/assets/images/listing-05.jpg'} alt="" />
                </a>

                <div class="listing-content">

                  <div class="listing-title">
                    <h4>
                      <a href="single-property-page-1.html">Oak Tree Villas</a>
                    </h4>
                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      class="listing-address popup-gmaps">
                      <i class="fa fa-map-marker"></i>
                      71 Lower River Dr. Bronx, NY
                    </a>
                  </div>

                  <ul class="listing-features">
                    <li>Area
                      <span>350 sq ft</span>
                    </li>
                    <li>Bedrooms
                      <span>2</span>
                    </li>
                    <li>Bathrooms
                      <span>1</span>
                    </li>
                  </ul>

                  <div class="listing-footer">
                    <a href="#">
                      <i class="fa fa-user"></i> Mabel Gagnon</a>
                    <span>
                      <i class="fa fa-calendar-o"></i> 4 days ago</span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListService;
