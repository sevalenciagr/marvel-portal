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

export default function MainFooter() {
  return (
    <footer className="mvl-main-footer">
      <div className="container-imagen-m">
        <img
          className="imagen-m"
          src="https://www.marvel.com/static/images/favicon/mstile-150x150.png"></img>
      </div>
      <div className="marvel-about">
        <ul className="list1-footer">
          <li className="text-footer">
            <a href="https://www.marvel.com/corporate/about">About Marvel</a>
          </li>
          <li className="text-footer">
            <a href="https://help.marvel.com">Help/FAQs</a>
          </li>
          <li className="text-footer">
            <a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&amp;ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">
              Careers
            </a>
          </li>
          <li className="text-footer">
            <a href="https://www.marvel.com/corporate/interns">Internships</a>
          </li>
        </ul>
      </div>
      <div className="cuadro2">
        <ul className="list2-footer">
          <li className="text-footer">
            <a href="https://www.marvel.com/corporate/advertising">Advertising</a>
          </li>
          <li className="text-footer">
            <a href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA">
              Disney+
            </a>
          </li>
          <li className="text-footer">
            <a href="https://www.marvelhq.com">Marvelhq.com</a>
          </li>
          <li className="text-footer">
            <a href="https://www.marvel.com/redeem">Redeem Digital Comics</a>
          </li>
        </ul>
      </div>
      <div>
        {/* <div className="main.footer__promotion-image-wrapper">
          <img
            className="imagen-insider"
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"></img>
        </div> */}
        <div className="container-bloque2">
          <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer">
            <img
              className="imagen-insider"
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"></img>
            <div className="main-footer__promotion-info">
              <h4>MARVEL INSIDER</h4>
              <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
          </a>
          <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer">
            <div className="main.footer__promotion-image-wrapper">
              <img
                className="imagen-UNLIMIT"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"></img>
            </div>
            <div className="main-footer__promotion-link">
              <h4>MARVEL UNLIMITED</h4>
              <p>Access Over 30,000+ Digital Comics</p>
            </div>
          </a>
        </div>
      </div>
      <div className="main-footer__follow">
        <h4 className="texto-follow-marvel">Follow Marvel</h4>
        <ul>
          <li>
            <a href="http://facebook.com/marvel">
              <span>
                <GrFacebook />
              </span>
            </a>
          </li>
          <li>
            <a href="http://twitter.com/marvel">
              <span>
                <GrTwitter />
              </span>
            </a>
          </li>
          <li>
            <a href="http://instagram.com/marvel">
              <span>
                <GrInstagram />
              </span>
            </a>
          </li>
          <li>
            <a href="http://marvelentertainment.tumblr.com/">
              <span>
                <GrTumblr />
              </span>
            </a>
          </li>
          <li>
            <a href="http://youtube.com/marvel">
              <span>
                <GrYoutube />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.snapchat.com/add/marvelhq">
              <span>
                <GrSnapchat />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/marvelofficial">
              <span>
                <GrPinterest />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
