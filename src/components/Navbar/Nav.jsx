import { useContext, useEffect, useRef } from "react";
import { store } from "../../context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineHelpOutline,
  MdOutlineOutlinedFlag,
  MdSubscriptions,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import Explore from "./Explore/Explore";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

const Nav = () => {
  const { nav, setNav, category } = useContext(store);
  let navRef = useRef(null);

  useEffect(() => {
    const navbarToggle = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", navbarToggle);
    return () => {
      document.removeEventListener("mousedown", navbarToggle);
    };
  });
  return (
    nav && (
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ x: 0, opacity: 0, duration: 0.3 }}
        ref={navRef}
        className="h-screen absolute top-0 left-0 bg-[#0F0F0F] w-[240px] text-white p-4 z-[9999]"
      >
        <div className="flex items-center sticky bg-[#0F0F0F] top-0 pb-4">
          <button type="button" onClick={() => setNav(!nav)}>
            <svg
              className="cursor-pointer mr-5"
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              viewBox="0 0 24 24"
              width="27"
              focusable="false"
              fill="white"
            >
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
          </button>
          <p className="absolute top-[-5px] right-[50px] font-extralight text-[10px]">
            IN
          </p>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="yt-logo-updated-svg_yt8"
              viewBox="0 0 90 20"
              focusable="false"
              fill="white"
              className="h-[20px] w-[90px]"
            >
              <svg
                id="yt-logo-updated_yt8"
                viewBox="0 0 90 20"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="#FF0000"
                  ></path>
                  <path
                    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                    fill="white"
                  ></path>
                </g>
                <g>
                  <g id="youtube-paths_yt8">
                    <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                    <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                    <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                    <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                    <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                    <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                    <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                  </g>
                </g>
              </svg>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col gap-1 pb-10 h-full overflow-y-scroll">
          <Link to="/">
            <Link
              to="/"
              className={`flex items-center gap-4 hover:bg-[#262626] rounded-md p-2`}
            >
              <AiFillHome size={20} />
              <span>Home</span>
            </Link>
          </Link>
          <Link
            to="/shorts"
            className={`flex items-center gap-4 hover:bg-[#262626] rounded-md p-2`}
          >
            <SiYoutubeshorts size={20} />
            <span>Shorts</span>
          </Link>
          <Link
            to="/subscriptions"
            className={`flex items-center gap-4 hover:bg-[#262626] rounded-md p-2`}
          >
            <MdSubscriptions size={20} />
            <span>Subscriptions</span>
          </Link>

          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <Link
            to="/you"
            className={`flex items-center gap-4 hover:bg-[#262626] rounded-md p-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white"
            >
              <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
            </svg>
            <span>You</span>
          </Link>
          <Link
            to="/history"
            className={`flex items-center gap-4 hover:bg-[#262626] rounded-md p-2`}
          >
            <GrHistory size={20} />
            <span>History</span>
          </Link>
          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <div className="flex flex-col gap-3 px-2">
            <p>Sign in to like videos, comments, and subscribe.</p>
            <button
              type="button"
              className="h-[40px] w-[100px] border border-[#262626] p-2  text-sm text-blue-500 hover:bg-[#263850] rounded-full flex items-center gap-2"
            >
              <CgProfile size={24} className="blue-500" />
              Sign in
            </button>
          </div>
          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <Explore />
          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <h1 className="p-2 text-xl font-semibold">More from YouTube</h1>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              fill="white"
              width="24"
              height="24"
            >
              <defs>
                <radialGradient
                  cx="5.4%"
                  cy="7.11%"
                  r="107.93%"
                  fx="5.4%"
                  fy="7.11%"
                  gradientTransform="matrix(.70653 0 0 1 .016 0)"
                >
                  <stop offset="0%"></stop>
                  <stop offset="100%"></stop>
                </radialGradient>
              </defs>
              <g fill="none">
                <path d="M1 1h21.77v22H1z"></path>
                <g>
                  <path
                    fill="#F00"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                  ></path>
                  <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                  <path fill="#000" d="M9.68 8.88l5.13 3.48.73-.38"></path>
                  <path
                    fill="#FFF"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                  ></path>
                  <path
                    fill="#3E2723"
                    d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                  ></path>
                  <path fill="#FFF" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
                  <path fill="#3E2723" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
                  <path
                    fill="url(#a_yt36)"
                    d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                    transform="translate(1 4.208)"
                  ></path>
                </g>
              </g>
            </svg>
            <span>YouTube Premium</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              height="24"
              width="24"
            >
              <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
              ></path>
            </svg>
            <span>YouTube Music</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              height="24"
              width="24"
              fill="white"
            >
              <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
              ></path>
              <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
              ></path>
              <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
              ></path>
              <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
              ></path>
            </svg>
            <span>YouTube Kids</span>
          </div>
          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <MdOutlineOutlinedFlag size={20} />
            <span>Report history</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <MdOutlineHelpOutline size={20} />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-[#262626] rounded-md p-2">
            <RiFeedbackLine size={20} />
            <span>Send feedback</span>
          </div>
          <hr className="h-[.5px] w-full border-[grey] my-3" />
          <div className="text-sm flex flex-col gap-3">
            <p>
              About Press Copyright Contact us Creators Advertise Developers
            </p>
            <p>
              Terms Privacy Policy & SafetyHow YouTube works Test new features
            </p>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default Nav;
