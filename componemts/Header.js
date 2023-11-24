import style from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "@/context/ContextProvider";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function Header(props) {
  const Ctx = useContext(Context);
  const router = useRouter();

  return (
    <div style={{ margin: "0px 5vw" }}>
      <nav className={style.navStyle}>
        <img
          src="https://play-lh.googleusercontent.com/DmDUCLudSKb5hZV5P_i3S-oZkF-udIPfW1OSa-fq2FS9rTV5A2v_tTGgpS0wuSs0bA=w240-h480-rw"
          className={style.navImgStyle}
        />
        <ul className={style.navItemsStyle}>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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

        <div className={style.hamburgerMenuIcon}>
          <DensityMediumIcon
            sx={{ color: "#b5cc22" }}
            onClick={() => {
              Ctx.setShowHam(true);
            }}
          />
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Header;
