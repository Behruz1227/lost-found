import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Hero2 = () => {
  useEffect(() => {
    // Biron bir side effect uchun kerak bo'lsa shu yerga yozing
    // Masalan, component yuklanganda qandaydir bir narsa bajarmoqchi bo'lsangiz
  }, []);

  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            {/* Boshqa spans... */}
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center g-5">
                <Col className="text-center mb-4" lg="6">
                  <img
                    alt="..."
                    className="img-fluid px-5"
                    src={require("assets/img/theme/output-onlinepngtools (3).png")}
                  />

                  {/* <div className="btn-wrapper ">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >

                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      <span className="btn-inner--text">Download React</span>
                    </Button>{" "}
                    {/* Boshqa Button... */}
                  {/* </div>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      *proudly coded by
                    </small>
                    <img
                      alt="..."
                      className="ml-1"
                      style={{ height: "28px" }}
                      src={require("assets/img/brand/creativetim-white-slim.png")}
                    />
                  </div> */}
                </Col>
                <Col className="text-center" lg="6">
                  <p className="text-white fs-md-2" style={{fontWeight: "600"}}>
                    Lost and Found, o'zini dunyodagi eng yirik global qaytarish
                    kompaniyasi deb ataydi va u turli ko'chma buyumlarni
                    aniqlash va himoya qilish uchun qaytarish teglaridan
                    foydalanadi. Bu buyumlar orasida mobil telefonlar,
                    noutbuklar, kalitlar, yuk sumkalari va uy hayvonlari mavjud.
                    Ularning ma'lumotlariga ko'ra, ular sayt orqali turli qiymatli buyumlarni
                    teglash va himoya qilish uchun mahsulotlarni taklif
                    etishadi, shuningdek teglarni faollashtirish, topilgan va
                    yo'qolgan buyumlar haqida xabar berish bo'yicha ko'rsatmalar
                    mavjud.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero2;
