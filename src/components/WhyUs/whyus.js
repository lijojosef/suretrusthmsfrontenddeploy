//import React, { useState } from "react";

import React from "react";
import { useState } from "react";
import "./whyus.css";

import impact from "../../assets/s1.jpg";
import development from "../../assets/s2.jpg";
import support from "../../assets/s3.jpg";
import progress from "../../assets/s4.jpg";
const WhyUsSection = () => {
  const [selectedMenu, setSelectedMenu] = useState("Impact");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="bg-white-w py-8-w">
      <div className="max-w-5xl-w mx-auto-w px-4-w">
        <div className="flex-w flex-col-w md:flex-row-w">
          {/* Left Half */}
          <div className="w-full-w md:w-3/5-w p-8-w">
            <h2 className="text-lg-w font-bold-w-h mb-4-1-w">Why Us</h2>
            {selectedMenu === "Impact" && (
              <img src={impact} alt="Impact" className="w-full-w h-full-w" />
            )}
            {selectedMenu === "Development" && (
              <img
                src={development}
                alt="Development"
                className="w-full-w h-full-w"
              />
            )}
            {selectedMenu === "Support" && (
              <img src={support} alt="Support" className="w-full-w h-full-w" />
            )}
            {selectedMenu === "Progress" && (
              <img
                src={progress}
                alt="Progress"
                className="w-full-w h-full-w"
              />
            )}
          </div>
          {/* Right Half */}
          <div className="w-full-w md:w-2/5-w p-8-w">
            <div className="flex-w justify-between-w mb-4-w">
              {/* Navbar with Menus */}
              <div className="flex-w">
                <div
                  className={`cursor-pointer-w mr-4-w ${
                    selectedMenu === "Impact" ? "font-bold" : ""
                  }`}
                  onClick={() => handleMenuClick("Impact")}
                >
                  Impact
                </div>
                <div
                  className={`cursor-pointer-w mr-4-w ${
                    selectedMenu === "Development" ? "font-bold" : ""
                  }`}
                  onClick={() => handleMenuClick("Development")}
                >
                  Development
                </div>
                <div
                  className={`cursor-pointer-w mr-4-w ${
                    selectedMenu === "Support" ? "font-bold" : ""
                  }`}
                  onClick={() => handleMenuClick("Support")}
                >
                  Support
                </div>
                <div
                  className={`cursor-pointer-w ${
                    selectedMenu === "Progress" ? "font-bold" : ""
                  }`}
                  onClick={() => handleMenuClick("Progress")}
                >
                  Progress
                </div>
              </div>
            </div>
            {/* Paragraphs */}
            {selectedMenu === "Impact" && (
              <div>
                <h3 className="font-bold-w mb-2-w">Leading With Purpose</h3>
                <p>
                  Through the application of innovation and our contextual
                  knowledge, we give associates the opportunity to deliver
                  transformative outcomes that benefit society at large and
                  prove that anything is possible. <br />
                  <br />
                  By harnessing innovation and leveraging our contextual
                  knowledge, we empower associates with the chance to achieve
                  transformative results that positively impact society at large
                  and demonstrate the realm of endless possibilities.
                </p>
              </div>
            )}
            {selectedMenu === "Development" && (
              <div>
                <h3 className="font-bold-w mb-2-w">Continuous learning</h3>
                <p>
                  We equip our associates to deliver innovative solutions, by
                  providing them with opportunities to access and learn from the
                  vast collective experience that exists within us. We ensure
                  they remain at the cutting edge of change.
                  <br />
                  <br />
                  We enable our associates to deliver ingenious solutions by
                  affording them opportunities to access and learn from the
                  extensive collective experience within us. We ensure they
                  continuously stay at the forefront of change, equipped to
                  tackle new challenges and embrace innovation.
                </p>
              </div>
            )}
            {selectedMenu === "Support" && (
              <div>
                <h3 className="font-bold-w mb-2-w">Support</h3>
                <p>
                  Through upskilling and reskilling, and with opportunities to
                  move across the business, our people, regardless of age or
                  stage of their career, are supported to discover and become
                  the professionals they were meant to be.
                  <br />
                  <br />
                  Through constant upskilling and reskilling initiatives, and
                  with ample opportunities to explore different roles within the
                  organization, our team members, irrespective of their age or
                  career stage, are nurtured and encouraged to uncover their
                  true potential, evolving into the accomplished professionals
                  they are destined to be.
                </p>
              </div>
            )}
            {selectedMenu === "Progress" && (
              <div>
                <h3 className="font-bold-w mb-2-w">Progress</h3>
                <p>
                  We see our people as long-term relationships that we build
                  together and from which we all grow. We invest in them across
                  the duration of their career and encourage them to strive for
                  perpetual progress.
                  <br />
                  <br />
                  We perceive our people as enduring partnerships that we foster
                  collaboratively, and through these connections, we
                  collectively thrive. We make enduring investments in their
                  career journey, supporting and inspiring them to pursue
                  everlasting advancement.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
