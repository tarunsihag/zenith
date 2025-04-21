import React from 'react'
import { Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="text-center mb-5">
          <h1 className="display-2 grad2">About Us</h1>
          <p className="lead font">
            Welcome to <strong>Zenith</strong>, where your shopping experience reaches new heights! At Zenith, we believe in providing our customers with an unparalleled online shopping experience that combines quality, variety, and convenience.
          </p>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="mb-4">
            <h2 className=" font-weight-bold">Our Mission</h2>
            <p className="lead ">
              Our mission is simple: to elevate your lifestyle by offering a curated selection of premium products that cater to your every need. Whether you're looking for the latest fashion trends, cutting-edge electronics, stylish home decor, or unique gifts, <strong>Zenith</strong> is your one-stop destination.
            </p>
          </div>
          <div className="mb-4">
            <h2 className=" font-weight-bold">Who We Are</h2>
            <p className="lead ">
              We are a passionate team of innovators and enthusiasts dedicated to bringing you the best of the best. With years of experience in the e-commerce industry, we understand the importance of customer satisfaction and strive to exceed your expectations at every turn.
            </p>
          </div>
          <div className="mb-4">
            <h2 className=" font-weight-bold">What We Offer</h2>
            <p className="lead">
              <ul className="list-unstyled ml-3">
                <li className="mb-2">
                  <b>Quality Products:</b> We handpick each item to ensure it meets our high standards of quality and craftsmanship.
                </li>
                <li className="mb-2">
                  <b>Diverse Selection:</b> From everyday essentials to luxurious indulgences, our extensive product range covers all your shopping needs.
                </li>
                <li className="mb-2">
                  <b>Seamless Experience:</b> Our user-friendly platform is designed to make your shopping journey smooth and enjoyable.
                </li>
                <li className="mb-2">
                  <b>Exceptional Service:</b> Our customer support team is always ready to assist you with any inquiries or issues you may have.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className=" font-weight-bold ">Our Values</h2>
            <p className="lead ">
              <ul className="list-unstyled ml-3">
                <li className="mb-2">
                  <b>Customer-Centric:</b> Your satisfaction is our top priority. We are committed to providing excellent service and building long-lasting relationships with our customers.
                </li>
                <li className="mb-2">
                  <b>Innovation:</b> We continuously seek new ways to enhance our offerings and stay ahead of market trends.
                </li>
                <li className="mb-2">
                  <b>Integrity:</b> Honesty and transparency guide all our actions, ensuring you can shop with confidence.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>


      <h2 className="text-center py-4">Our Products</h2>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutPage