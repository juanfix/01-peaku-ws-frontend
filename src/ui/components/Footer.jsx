export const Footer = () => {
  return (
    <>
      <footer className="text-lg-start bg-custom mt-5 pt-1">
        <section className="border-bottom">
          <div className="container-fluid text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-12 col-md-3 col-lg-4 col-xl-6 mx-auto mb-4">
                <h5 className="mb-4">
                  <img src="/assets/img/Logo.png" />
                </h5>
                <p>
                  Book your trip in minute, get full control for much longer.
                </p>
                <div>
                  <a href="" className="mx-3 link-secondary">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </a>
                  <a href="" className="mx-3 link-secondary">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a href="" className="mx-3 link-secondary">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Company</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Logistic
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privary & Policy
                  </a>
                </p>
              </div>

              <div className="col-12 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Contact</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Help/FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Press
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Affilates
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
                <h6 className="fw-bold mb-4">More</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Press Centre
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Our Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Low fare tips
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="px-3 py-4 d-flex justify-content-between">
          <p>Copyright, Trabook 2022. All rights reserved.</p>
          <p>
            <a href="#!" className="text-reset">
              Terms & Conditions
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
