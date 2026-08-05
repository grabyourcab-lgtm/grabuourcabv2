"use client"
import Icon from "@/components/site/Icon";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="sec grey" id="welcome">
      <div className="container">
        <div className="about-wrap about-wrap-reverse">
          {/* IMAGE — LEFT (single big rectangular image) */}
          <div className="welcome-pic">
            <img src="/taxi-services/welcome.png" alt="Our fleet" loading="lazy" />
          </div>

          {/* CONTENT — RIGHT */}
          <div>
            <span
              className="eyebrow"
              style={{
                display: "block",
                color: "var(--red)",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Welcome to
            </span>
            <h2>Grab Your Cab — 10 years on the road</h2>
            <p>
              Grab Your Cab is a full-service cab &amp; car rental company serving Delhi NCR,
              Goa and Noida International Airport (Jewar). Our range is large — from the most
              basic hatchbacks to premium sedans, convertibles and super-premium SUVs — to suit
              all budgets and purposes.
            </p>
            <p>
              We are a customer-oriented company where service and satisfaction come first,
              backed by 24/7 support on a human phone line and an in-house maintenance team
              that ensures every car you book is in top mechanical condition.
            </p>

            <div className="delivers">
              <span className="deliver"><Icon name="star" />Customer Satisfaction</span>
              <span className="deliver"><Icon name="wrench" />Maintained Fleet</span>
              <span className="deliver"><Icon name="clock" />24x7 Operations</span>
              <span className="deliver"><Icon name="shield" />Verified Drivers</span>
              <span className="deliver"><Icon name="wallet" />Transparent Fares</span>
            </div>

            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-ghost" href="/about">
                About Us <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .welcome-pic {
          width: 100%;
          height: 100%;
          min-height: 460px;
          border-radius: 16px;
          overflow: hidden;
        }
        .welcome-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .welcome-pic {
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  );
}