import style from "./HamburgerMenu.module.css";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/ContextProvider";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

function HamburgerMenu() {
  const Ctx = useContext(Context);
  const router = useRouter();

  function closeMenu() {
    Ctx.setShowHam(false);
  }

  return (
    <>
      <nav className={Ctx.showHam ? style.navStyle : style.closeNav}>
        <section className={style.navHeaderStyle}>
          <img
            src="https://play-lh.googleusercontent.com/DmDUCLudSKb5hZV5P_i3S-oZkF-udIPfW1OSa-fq2FS9rTV5A2v_tTGgpS0wuSs0bA=w240-h480-rw"
            className={style.navImgStyle}
          />
          <span className={style.navCloseButtonStyle} onClick={closeMenu}>
            <CloseIcon sx={{ color: "#b5cc22" }} />
          </span>
        </section>

        <section className={style.navMainStyle}>
          <ul className={style.navItemsStyle}>
            <li style={{ marginBottom: "20px" }}>
              <Link
                href="/ins"
                className={
                  router.pathname === "/ins"
                    ? style.navItemStyleAlt
                    : style.navItemStyle
                }
              >
                使用說明
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link
                href="/charge"
                className={
                  router.pathname === "/charge"
                    ? style.navItemStyleAlt
                    : style.navItemStyle
                }
              >
                收費方式
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link
                href="/"
                className={
                  router.pathname === "/"
                    ? style.navItemStyleAlt
                    : style.navItemStyle
                }
              >
                站點資訊
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link
                href="/lastest"
                className={
                  router.pathname === "/lastest"
                    ? style.navItemStyleAlt
                    : style.navItemStyle
                }
              >
                最新消息
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link
                href="/act"
                className={
                  router.pathname === "/act"
                    ? style.navItemStyleAlt
                    : style.navItemStyle
                }
              >
                活動專區
              </Link>
            </li>
          </ul>

          <button className={style.navLoginButtonStyle}>
            <span className={style.navLoginButtonTextStyle}>登入</span>
          </button>
        </section>
      </nav>
    </>
  );
}

export default HamburgerMenu;
