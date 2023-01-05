import './styles.scss';
import {
  GrFacebook,
  GrTwitter,
  GrInstagram,
  GrTumblr,
  GrYoutube,
  GrSnapchat,
  GrPinterest
} from 'react-icons/gr';

import React from 'react';
export default function MainFooter() {
  return (
    <>
      <footer className="marvel-menu-footer">
        <div className="Container-Footer-Completed">
          <a className="menu-footer-logo" href="">
            <img src="https://i.postimg.cc/MZY0Q1nX/logo-Marvel.png" alt="" />
          </a>
          <nav className="menu-footer-primer-link" aria-label="Primary footer navigation">
            <ul>
              <li className="menu-footer-link">
                <a href="#">ABOUT MARVEL</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">HELP/FAQS</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">CAREERS</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">INTERNSHIPS</a>
              </li>
            </ul>
          </nav>
          <nav className="menu-footer-segundo-link" aria-label="Primary footer navigation">
            <ul>
              <li className="menu-footer-link">
                <a href="#">ADVERTISING</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">DISNEY+</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">MARVELHQ.COM</a>
              </li>
              <li className="menu-footer-link">
                <a href="#">REDEEM DIGITAL COMICS</a>
              </li>
            </ul>
          </nav>
          <nav className="menu-footer-promo">
            <a className="menu-footer-promocion-link" href="#">
              <div className="menu-footer-promocion-imagen">
                <figure className="menu-footer-imagen">
                  <img
                    className="menu-footer-promocion-imagen-isider"
                    src="https://i.postimg.cc/zv9WYm8f/insider-Logo.png"
                    alt="Marvel Insider"
                  />
                </figure>
              </div>
              <div className="menu-footer-promocion-informacion">
                <h4 className="menu-footer-promocion-titulo">MARVEL INSIDER</h4>
                <p className="menu-footer-promocion-descripcion">
                  Get Rewarded for Being a Marvel Fan
                </p>
              </div>
            </a>
            <div className="menu-footer-promocion">
              <a className="menu-footer-promocion-link" href="#">
                <div className="menu-footer-promocion-imagen">
                  <figure className="menu-footer-imagen">
                    <img
                      className="menu-footer-promocion-imagen ilimitado"
                      src="https://i.postimg.cc/25H8qP38/unlimited.png"
                      alt="Marvel Insider"
                    />
                  </figure>
                </div>
                <div className="menu-footer-promocion-informacion">
                  <h4 className="menu-footer-promocion-titulo">MARVEL UNLIMITED</h4>
                  <p className="menu-footer-promocion-descrpcion">
                    Acces Over 30,000+ Digital Comics
                  </p>
                </div>
              </a>
            </div>
          </nav>
          <nav className="menu-footer-seguir icono-1">
            <h4 className="menu-footer-titulo">FOLLOW MARVEL</h4>
            <ul className="menu-footer-social-links footer-social">
              <li className="menu-footer-social-imagen">
                <a href="http://facebook.com/marvel">
                  <span>
                    <GrFacebook className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="http://twitter.com/marvel">
                  <span>
                    <GrTwitter className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="http://instagram.com/marvel">
                  <span>
                    <GrInstagram className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="http://marvelentertainment.tumblr.com/">
                  <span>
                    <GrTumblr className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="http://youtube.com/marvel">
                  <span>
                    <GrYoutube className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="https://www.snapchat.com/add/marvelhq">
                  <span>
                    <GrSnapchat className="icono" />
                  </span>
                </a>
              </li>
              <li className="menu-footer-social-imagen">
                <a href="https://www.pinterest.com/marvelofficial">
                  <span>
                    <GrPinterest className="icono" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Text-Final-Footer">
          <div className="Container-Text-Final">
            <a href="https://disneytermsofuse.com/" className="Text-Final-Footer">
              Terms of use
            </a>
            <a href="https://privacy.thewaltdisneycompany.com/en/" className="Text-Final-Footer">
              Privacy Policy
            </a>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-privacy-rights/"
              className="Text-Final-Footer">
              Your US State Privacy Rights
            </a>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
              className="Text-Final-Footer">
              Children&apos;s Online Privacy Policy
            </a>
            <a href="https://www.marvel.com/corporate/license_tou" className="Text-Final-Footer">
              License Agreement
            </a>
            <a
              href="https://preferences-mgr.truste.com/?pid=disney01&aid=marvel01&type=marvel"
              className="Text-Final-Footer">
              Interest-Baseb Ads
            </a>
            <a href="https://www.marvel.com/corporate/insider_terms" className="Text-Final-Footer">
              Marvel Insider Terms
            </a>
            <a className="Text-Final-Footer">&copy;2023 MARVEL</a>
          </div>
        </div>
      </footer>
    </>
  );
}
