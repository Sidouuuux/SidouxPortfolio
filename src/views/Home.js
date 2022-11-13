import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 600.0,
          // minWidth: 600.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
          // color1: "#ff0000",
          // color2: "#00ff00"
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0x0

        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className="home" id="home" ref={vantaRef}>
      <div className="home__container bd-container ">
        <div className="home__hero">
          {/* <svg
            id="portfolio-hero"
            width="512"
            height="108"
            viewBox="0 0 512 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_4_9"
              maskUnits="userSpaceOnUse"
              x="0.646271"
              y="0.0239868"
              width="511"
              height="108"
              fill="black"
            >
              <rect
                fill="white"
                x="0.646271"
                y="0.0239868"
                width="511"
                height="108"
              />
              <path d="M10.5423 102.464C9.13427 102.464 7.95027 101.984 6.99027 101.024C6.09427 100.128 5.64627 98.976 5.64627 97.568V53.792C5.71027 48.736 6.89427 44.192 9.19827 40.16C11.5023 36.128 14.6383 32.96 18.6063 30.656C22.5743 28.288 27.0543 27.104 32.0463 27.104C37.1023 27.104 41.6143 28.288 45.5823 30.656C49.5503 32.96 52.6863 36.128 54.9903 40.16C57.3583 44.192 58.5423 48.736 58.5423 53.792C58.5423 58.848 57.4543 63.392 55.2783 67.424C53.1663 71.392 50.2543 74.56 46.5423 76.928C42.8303 79.232 38.6383 80.384 33.9663 80.384C30.1903 80.384 26.7023 79.616 23.5023 78.08C20.3663 76.48 17.6783 74.336 15.4383 71.648V97.568C15.4383 98.976 14.9903 100.128 14.0943 101.024C13.1983 101.984 12.0143 102.464 10.5423 102.464ZM32.0463 71.744C35.3103 71.744 38.2223 70.976 40.7823 69.44C43.3423 67.84 45.3583 65.696 46.8303 63.008C48.3663 60.256 49.1343 57.184 49.1343 53.792C49.1343 50.336 48.3663 47.264 46.8303 44.576C45.3583 41.824 43.3423 39.68 40.7823 38.144C38.2223 36.544 35.3103 35.744 32.0463 35.744C28.8463 35.744 25.9343 36.544 23.3103 38.144C20.7503 39.68 18.7343 41.824 17.2623 44.576C15.7903 47.264 15.0543 50.336 15.0543 53.792C15.0543 57.184 15.7903 60.256 17.2623 63.008C18.7343 65.696 20.7503 67.84 23.3103 69.44C25.9343 70.976 28.8463 71.744 32.0463 71.744Z" />
              <path d="M106.554 80.384C101.37 80.384 96.7943 79.264 92.8263 77.024C88.8583 74.72 85.7223 71.584 83.4183 67.616C81.1783 63.584 80.0583 58.976 80.0583 53.792C80.0583 48.544 81.1783 43.936 83.4183 39.968C85.7223 35.936 88.8583 32.8 92.8263 30.56C96.7943 28.256 101.37 27.104 106.554 27.104C111.674 27.104 116.218 28.256 120.186 30.56C124.154 32.8 127.258 35.936 129.498 39.968C131.802 43.936 132.954 48.544 132.954 53.792C132.954 58.976 131.834 63.584 129.594 67.616C127.354 71.584 124.25 74.72 120.282 77.024C116.314 79.264 111.738 80.384 106.554 80.384ZM106.554 71.744C109.882 71.744 112.826 70.976 115.386 69.44C117.946 67.904 119.93 65.792 121.338 63.104C122.81 60.416 123.546 57.312 123.546 53.792C123.546 50.272 122.81 47.168 121.338 44.48C119.93 41.728 117.946 39.584 115.386 38.048C112.826 36.512 109.882 35.744 106.554 35.744C103.226 35.744 100.282 36.512 97.7223 38.048C95.1623 39.584 93.1463 41.728 91.6743 44.48C90.2023 47.168 89.4663 50.272 89.4663 53.792C89.4663 57.312 90.2023 60.416 91.6743 63.104C93.1463 65.792 95.1623 67.904 97.7223 69.44C100.282 70.976 103.226 71.744 106.554 71.744Z" />
              <path d="M161.928 80C158.728 80 157.128 78.4 157.128 75.2V32.288C157.128 29.088 158.728 27.488 161.928 27.488C165.128 27.488 166.728 29.088 166.728 32.288V34.112C168.648 31.872 170.984 30.112 173.736 28.832C176.552 27.552 179.592 26.912 182.856 26.912C186.696 26.912 189.544 27.552 191.4 28.832C193.32 30.048 194.056 31.52 193.608 33.248C193.288 34.592 192.648 35.488 191.688 35.936C190.728 36.32 189.608 36.384 188.328 36.128C184.232 35.296 180.552 35.232 177.288 35.936C174.024 36.64 171.432 37.952 169.512 39.872C167.656 41.792 166.728 44.224 166.728 47.168V75.2C166.728 78.4 165.128 80 161.928 80Z" />
              <path d="M232.519 80C229.319 80 226.439 79.2 223.879 77.6C221.319 75.936 219.303 73.696 217.831 70.88C216.359 68.064 215.623 64.896 215.623 61.376V37.664H211.207C209.863 37.664 208.775 37.28 207.943 36.512C207.111 35.744 206.695 34.784 206.695 33.632C206.695 32.352 207.111 31.328 207.943 30.56C208.775 29.792 209.863 29.408 211.207 29.408H215.623V15.584C215.623 14.176 216.071 13.024 216.967 12.128C217.863 11.232 219.015 10.784 220.423 10.784C221.831 10.784 222.983 11.232 223.879 12.128C224.775 13.024 225.223 14.176 225.223 15.584V29.408H233.383C234.727 29.408 235.815 29.792 236.647 30.56C237.479 31.328 237.895 32.352 237.895 33.632C237.895 34.784 237.479 35.744 236.647 36.512C235.815 37.28 234.727 37.664 233.383 37.664H225.223V61.376C225.223 63.936 225.927 66.08 227.335 67.808C228.743 69.536 230.471 70.4 232.519 70.4H235.783C236.935 70.4 237.895 70.848 238.663 71.744C239.495 72.64 239.911 73.792 239.911 75.2C239.911 76.608 239.367 77.76 238.279 78.656C237.255 79.552 235.911 80 234.247 80H232.519Z" />
              <path d="M267.21 80C265.994 80 264.906 79.552 263.946 78.656C262.986 77.76 262.506 76.576 262.506 75.104V37.664H258.378C257.034 37.664 255.946 37.28 255.114 36.512C254.282 35.744 253.866 34.784 253.866 33.632C253.866 32.352 254.282 31.328 255.114 30.56C255.946 29.792 257.034 29.408 258.378 29.408H262.506V27.776C262.506 23.168 263.402 19.168 265.194 15.776C267.05 12.384 269.61 9.75998 272.874 7.90398C276.138 5.98399 279.914 5.02399 284.202 5.02399C285.61 5.02399 286.762 5.43999 287.658 6.27199C288.618 7.10398 289.098 8.15998 289.098 9.43999C289.098 10.656 288.618 11.712 287.658 12.608C286.762 13.44 285.61 13.856 284.202 13.856C280.618 13.856 277.738 15.04 275.562 17.408C273.386 19.776 272.298 22.912 272.298 26.816V29.408H282.09C283.434 29.408 284.522 29.792 285.354 30.56C286.186 31.328 286.602 32.352 286.602 33.632C286.602 34.784 286.186 35.744 285.354 36.512C284.522 37.28 283.434 37.664 282.09 37.664H272.298V75.104C272.298 76.576 271.85 77.76 270.954 78.656C270.058 79.552 268.81 80 267.21 80Z" />
              <path d="M328.329 80.384C323.145 80.384 318.569 79.264 314.601 77.024C310.633 74.72 307.497 71.584 305.193 67.616C302.953 63.584 301.833 58.976 301.833 53.792C301.833 48.544 302.953 43.936 305.193 39.968C307.497 35.936 310.633 32.8 314.601 30.56C318.569 28.256 323.145 27.104 328.329 27.104C333.449 27.104 337.993 28.256 341.961 30.56C345.929 32.8 349.033 35.936 351.273 39.968C353.577 43.936 354.729 48.544 354.729 53.792C354.729 58.976 353.609 63.584 351.369 67.616C349.129 71.584 346.025 74.72 342.057 77.024C338.089 79.264 333.513 80.384 328.329 80.384ZM328.329 71.744C331.657 71.744 334.601 70.976 337.161 69.44C339.721 67.904 341.705 65.792 343.113 63.104C344.585 60.416 345.321 57.312 345.321 53.792C345.321 50.272 344.585 47.168 343.113 44.48C341.705 41.728 339.721 39.584 337.161 38.048C334.601 36.512 331.657 35.744 328.329 35.744C325.001 35.744 322.057 36.512 319.497 38.048C316.937 39.584 314.921 41.728 313.449 44.48C311.977 47.168 311.241 50.272 311.241 53.792C311.241 57.312 311.977 60.416 313.449 63.104C314.921 65.792 316.937 67.904 319.497 69.44C322.057 70.976 325.001 71.744 328.329 71.744Z" />
              <path d="M391.383 80C388.567 80 386.071 79.232 383.895 77.696C381.719 76.16 380.023 74.08 378.807 71.456C377.591 68.768 376.983 65.696 376.983 62.24V9.82399C376.983 8.41599 377.431 7.26399 378.327 6.36799C379.223 5.47199 380.375 5.02399 381.783 5.02399C383.191 5.02399 384.343 5.47199 385.239 6.36799C386.135 7.26399 386.583 8.41599 386.583 9.82399V62.24C386.583 64.608 387.031 66.56 387.927 68.096C388.823 69.632 389.975 70.4 391.383 70.4H393.783C395.063 70.4 396.087 70.848 396.855 71.744C397.687 72.64 398.103 73.792 398.103 75.2C398.103 76.608 397.495 77.76 396.279 78.656C395.063 79.552 393.495 80 391.575 80H391.383Z" />
              <path d="M423.14 80C421.732 80 420.548 79.552 419.588 78.656C418.692 77.696 418.244 76.512 418.244 75.104V32.384C418.244 30.912 418.692 29.728 419.588 28.832C420.548 27.936 421.732 27.488 423.14 27.488C424.612 27.488 425.796 27.936 426.692 28.832C427.588 29.728 428.036 30.912 428.036 32.384V75.104C428.036 76.512 427.588 77.696 426.692 78.656C425.796 79.552 424.612 80 423.14 80ZM423.14 18.944C421.412 18.944 419.908 18.336 418.628 17.12C417.412 15.84 416.804 14.336 416.804 12.608C416.804 10.88 417.412 9.40799 418.628 8.19199C419.908 6.91199 421.412 6.27199 423.14 6.27199C424.868 6.27199 426.34 6.91199 427.556 8.19199C428.836 9.40799 429.476 10.88 429.476 12.608C429.476 14.336 428.836 15.84 427.556 17.12C426.34 18.336 424.868 18.944 423.14 18.944Z" />
              <path d="M479.66 80.384C474.476 80.384 469.9 79.264 465.932 77.024C461.964 74.72 458.829 71.584 456.525 67.616C454.285 63.584 453.164 58.976 453.164 53.792C453.164 48.544 454.285 43.936 456.525 39.968C458.829 35.936 461.964 32.8 465.932 30.56C469.9 28.256 474.476 27.104 479.66 27.104C484.78 27.104 489.324 28.256 493.292 30.56C497.26 32.8 500.364 35.936 502.604 39.968C504.908 43.936 506.06 48.544 506.06 53.792C506.06 58.976 504.941 63.584 502.701 67.616C500.461 71.584 497.356 74.72 493.388 77.024C489.42 79.264 484.844 80.384 479.66 80.384ZM479.66 71.744C482.988 71.744 485.932 70.976 488.492 69.44C491.052 67.904 493.036 65.792 494.444 63.104C495.916 60.416 496.652 57.312 496.652 53.792C496.652 50.272 495.916 47.168 494.444 44.48C493.036 41.728 491.052 39.584 488.492 38.048C485.932 36.512 482.988 35.744 479.66 35.744C476.332 35.744 473.388 36.512 470.828 38.048C468.268 39.584 466.252 41.728 464.78 44.48C463.308 47.168 462.573 50.272 462.573 53.792C462.573 57.312 463.308 60.416 464.78 63.104C466.252 65.792 468.268 67.904 470.828 69.44C473.388 70.976 476.332 71.744 479.66 71.744Z" />
            </mask>
            <path
              d="M10.5423 102.464C9.13427 102.464 7.95027 101.984 6.99027 101.024C6.09427 100.128 5.64627 98.976 5.64627 97.568V53.792C5.71027 48.736 6.89427 44.192 9.19827 40.16C11.5023 36.128 14.6383 32.96 18.6063 30.656C22.5743 28.288 27.0543 27.104 32.0463 27.104C37.1023 27.104 41.6143 28.288 45.5823 30.656C49.5503 32.96 52.6863 36.128 54.9903 40.16C57.3583 44.192 58.5423 48.736 58.5423 53.792C58.5423 58.848 57.4543 63.392 55.2783 67.424C53.1663 71.392 50.2543 74.56 46.5423 76.928C42.8303 79.232 38.6383 80.384 33.9663 80.384C30.1903 80.384 26.7023 79.616 23.5023 78.08C20.3663 76.48 17.6783 74.336 15.4383 71.648V97.568C15.4383 98.976 14.9903 100.128 14.0943 101.024C13.1983 101.984 12.0143 102.464 10.5423 102.464ZM32.0463 71.744C35.3103 71.744 38.2223 70.976 40.7823 69.44C43.3423 67.84 45.3583 65.696 46.8303 63.008C48.3663 60.256 49.1343 57.184 49.1343 53.792C49.1343 50.336 48.3663 47.264 46.8303 44.576C45.3583 41.824 43.3423 39.68 40.7823 38.144C38.2223 36.544 35.3103 35.744 32.0463 35.744C28.8463 35.744 25.9343 36.544 23.3103 38.144C20.7503 39.68 18.7343 41.824 17.2623 44.576C15.7903 47.264 15.0543 50.336 15.0543 53.792C15.0543 57.184 15.7903 60.256 17.2623 63.008C18.7343 65.696 20.7503 67.84 23.3103 69.44C25.9343 70.976 28.8463 71.744 32.0463 71.744Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M106.554 80.384C101.37 80.384 96.7943 79.264 92.8263 77.024C88.8583 74.72 85.7223 71.584 83.4183 67.616C81.1783 63.584 80.0583 58.976 80.0583 53.792C80.0583 48.544 81.1783 43.936 83.4183 39.968C85.7223 35.936 88.8583 32.8 92.8263 30.56C96.7943 28.256 101.37 27.104 106.554 27.104C111.674 27.104 116.218 28.256 120.186 30.56C124.154 32.8 127.258 35.936 129.498 39.968C131.802 43.936 132.954 48.544 132.954 53.792C132.954 58.976 131.834 63.584 129.594 67.616C127.354 71.584 124.25 74.72 120.282 77.024C116.314 79.264 111.738 80.384 106.554 80.384ZM106.554 71.744C109.882 71.744 112.826 70.976 115.386 69.44C117.946 67.904 119.93 65.792 121.338 63.104C122.81 60.416 123.546 57.312 123.546 53.792C123.546 50.272 122.81 47.168 121.338 44.48C119.93 41.728 117.946 39.584 115.386 38.048C112.826 36.512 109.882 35.744 106.554 35.744C103.226 35.744 100.282 36.512 97.7223 38.048C95.1623 39.584 93.1463 41.728 91.6743 44.48C90.2023 47.168 89.4663 50.272 89.4663 53.792C89.4663 57.312 90.2023 60.416 91.6743 63.104C93.1463 65.792 95.1623 67.904 97.7223 69.44C100.282 70.976 103.226 71.744 106.554 71.744Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M161.928 80C158.728 80 157.128 78.4 157.128 75.2V32.288C157.128 29.088 158.728 27.488 161.928 27.488C165.128 27.488 166.728 29.088 166.728 32.288V34.112C168.648 31.872 170.984 30.112 173.736 28.832C176.552 27.552 179.592 26.912 182.856 26.912C186.696 26.912 189.544 27.552 191.4 28.832C193.32 30.048 194.056 31.52 193.608 33.248C193.288 34.592 192.648 35.488 191.688 35.936C190.728 36.32 189.608 36.384 188.328 36.128C184.232 35.296 180.552 35.232 177.288 35.936C174.024 36.64 171.432 37.952 169.512 39.872C167.656 41.792 166.728 44.224 166.728 47.168V75.2C166.728 78.4 165.128 80 161.928 80Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M232.519 80C229.319 80 226.439 79.2 223.879 77.6C221.319 75.936 219.303 73.696 217.831 70.88C216.359 68.064 215.623 64.896 215.623 61.376V37.664H211.207C209.863 37.664 208.775 37.28 207.943 36.512C207.111 35.744 206.695 34.784 206.695 33.632C206.695 32.352 207.111 31.328 207.943 30.56C208.775 29.792 209.863 29.408 211.207 29.408H215.623V15.584C215.623 14.176 216.071 13.024 216.967 12.128C217.863 11.232 219.015 10.784 220.423 10.784C221.831 10.784 222.983 11.232 223.879 12.128C224.775 13.024 225.223 14.176 225.223 15.584V29.408H233.383C234.727 29.408 235.815 29.792 236.647 30.56C237.479 31.328 237.895 32.352 237.895 33.632C237.895 34.784 237.479 35.744 236.647 36.512C235.815 37.28 234.727 37.664 233.383 37.664H225.223V61.376C225.223 63.936 225.927 66.08 227.335 67.808C228.743 69.536 230.471 70.4 232.519 70.4H235.783C236.935 70.4 237.895 70.848 238.663 71.744C239.495 72.64 239.911 73.792 239.911 75.2C239.911 76.608 239.367 77.76 238.279 78.656C237.255 79.552 235.911 80 234.247 80H232.519Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M267.21 80C265.994 80 264.906 79.552 263.946 78.656C262.986 77.76 262.506 76.576 262.506 75.104V37.664H258.378C257.034 37.664 255.946 37.28 255.114 36.512C254.282 35.744 253.866 34.784 253.866 33.632C253.866 32.352 254.282 31.328 255.114 30.56C255.946 29.792 257.034 29.408 258.378 29.408H262.506V27.776C262.506 23.168 263.402 19.168 265.194 15.776C267.05 12.384 269.61 9.75998 272.874 7.90398C276.138 5.98399 279.914 5.02399 284.202 5.02399C285.61 5.02399 286.762 5.43999 287.658 6.27199C288.618 7.10398 289.098 8.15998 289.098 9.43999C289.098 10.656 288.618 11.712 287.658 12.608C286.762 13.44 285.61 13.856 284.202 13.856C280.618 13.856 277.738 15.04 275.562 17.408C273.386 19.776 272.298 22.912 272.298 26.816V29.408H282.09C283.434 29.408 284.522 29.792 285.354 30.56C286.186 31.328 286.602 32.352 286.602 33.632C286.602 34.784 286.186 35.744 285.354 36.512C284.522 37.28 283.434 37.664 282.09 37.664H272.298V75.104C272.298 76.576 271.85 77.76 270.954 78.656C270.058 79.552 268.81 80 267.21 80Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M328.329 80.384C323.145 80.384 318.569 79.264 314.601 77.024C310.633 74.72 307.497 71.584 305.193 67.616C302.953 63.584 301.833 58.976 301.833 53.792C301.833 48.544 302.953 43.936 305.193 39.968C307.497 35.936 310.633 32.8 314.601 30.56C318.569 28.256 323.145 27.104 328.329 27.104C333.449 27.104 337.993 28.256 341.961 30.56C345.929 32.8 349.033 35.936 351.273 39.968C353.577 43.936 354.729 48.544 354.729 53.792C354.729 58.976 353.609 63.584 351.369 67.616C349.129 71.584 346.025 74.72 342.057 77.024C338.089 79.264 333.513 80.384 328.329 80.384ZM328.329 71.744C331.657 71.744 334.601 70.976 337.161 69.44C339.721 67.904 341.705 65.792 343.113 63.104C344.585 60.416 345.321 57.312 345.321 53.792C345.321 50.272 344.585 47.168 343.113 44.48C341.705 41.728 339.721 39.584 337.161 38.048C334.601 36.512 331.657 35.744 328.329 35.744C325.001 35.744 322.057 36.512 319.497 38.048C316.937 39.584 314.921 41.728 313.449 44.48C311.977 47.168 311.241 50.272 311.241 53.792C311.241 57.312 311.977 60.416 313.449 63.104C314.921 65.792 316.937 67.904 319.497 69.44C322.057 70.976 325.001 71.744 328.329 71.744Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M391.383 80C388.567 80 386.071 79.232 383.895 77.696C381.719 76.16 380.023 74.08 378.807 71.456C377.591 68.768 376.983 65.696 376.983 62.24V9.82399C376.983 8.41599 377.431 7.26399 378.327 6.36799C379.223 5.47199 380.375 5.02399 381.783 5.02399C383.191 5.02399 384.343 5.47199 385.239 6.36799C386.135 7.26399 386.583 8.41599 386.583 9.82399V62.24C386.583 64.608 387.031 66.56 387.927 68.096C388.823 69.632 389.975 70.4 391.383 70.4H393.783C395.063 70.4 396.087 70.848 396.855 71.744C397.687 72.64 398.103 73.792 398.103 75.2C398.103 76.608 397.495 77.76 396.279 78.656C395.063 79.552 393.495 80 391.575 80H391.383Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M423.14 80C421.732 80 420.548 79.552 419.588 78.656C418.692 77.696 418.244 76.512 418.244 75.104V32.384C418.244 30.912 418.692 29.728 419.588 28.832C420.548 27.936 421.732 27.488 423.14 27.488C424.612 27.488 425.796 27.936 426.692 28.832C427.588 29.728 428.036 30.912 428.036 32.384V75.104C428.036 76.512 427.588 77.696 426.692 78.656C425.796 79.552 424.612 80 423.14 80ZM423.14 18.944C421.412 18.944 419.908 18.336 418.628 17.12C417.412 15.84 416.804 14.336 416.804 12.608C416.804 10.88 417.412 9.40799 418.628 8.19199C419.908 6.91199 421.412 6.27199 423.14 6.27199C424.868 6.27199 426.34 6.91199 427.556 8.19199C428.836 9.40799 429.476 10.88 429.476 12.608C429.476 14.336 428.836 15.84 427.556 17.12C426.34 18.336 424.868 18.944 423.14 18.944Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
            <path
              d="M479.66 80.384C474.476 80.384 469.9 79.264 465.932 77.024C461.964 74.72 458.829 71.584 456.525 67.616C454.285 63.584 453.164 58.976 453.164 53.792C453.164 48.544 454.285 43.936 456.525 39.968C458.829 35.936 461.964 32.8 465.932 30.56C469.9 28.256 474.476 27.104 479.66 27.104C484.78 27.104 489.324 28.256 493.292 30.56C497.26 32.8 500.364 35.936 502.604 39.968C504.908 43.936 506.06 48.544 506.06 53.792C506.06 58.976 504.941 63.584 502.701 67.616C500.461 71.584 497.356 74.72 493.388 77.024C489.42 79.264 484.844 80.384 479.66 80.384ZM479.66 71.744C482.988 71.744 485.932 70.976 488.492 69.44C491.052 67.904 493.036 65.792 494.444 63.104C495.916 60.416 496.652 57.312 496.652 53.792C496.652 50.272 495.916 47.168 494.444 44.48C493.036 41.728 491.052 39.584 488.492 38.048C485.932 36.512 482.988 35.744 479.66 35.744C476.332 35.744 473.388 36.512 470.828 38.048C468.268 39.584 466.252 41.728 464.78 44.48C463.308 47.168 462.573 50.272 462.573 53.792C462.573 57.312 463.308 60.416 464.78 63.104C466.252 65.792 468.268 67.904 470.828 69.44C473.388 70.976 476.332 71.744 479.66 71.744Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-1-outside-1_4_9)"
            />
          </svg> */}
        </div>

        <div className="home__data fade-in">
          <span className="home__greeting">Hello ! I'm</span>
          <h1 className="home__name tracking-in-expand-fwd">Sid-Ahmed MIR</h1>
          <span className="home__profession">Blockchain Developer</span>
          <span className="home__location">Based in Paris, France</span>

          <div className="home__social">
            <a
              href="https://github.com/Sidouuuux"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sid-ahmed-mir-12426b163/"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
              </svg>
            </a>
            {/* <a
              href="https://www.xing.com/profile/GiulianoMarco_Montis/"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path
                  fillRule="evenodd"
                  d="M 6.222656 2 C 3.917969 2 2 3.917969 2 6.222656 L 2 43.785156 C 2 46.082031 3.917969 48 6.222656 48 L 43.785156 48 C 46.082031 48 48 46.082031 48 43.785156 L 48 6.222656 C 48 3.917969 46.082031 2 43.785156 2 Z M 6.203125 4 L 43.796875 4 C 45.011719 4 46 4.988281 46 6.203125 L 46 43.796875 C 46 45.011719 45.011719 46 43.796875 46 L 6.203125 46 C 4.988281 46 4 45.011719 4 43.796875 L 4 6.203125 C 4 4.988281 4.988281 4 6.203125 4 Z M 34 8 C 33.804688 8 33.25 8.222656 33 9 L 22.015625 28 C 21.820313 28.195313 21.820313 28.382813 22.015625 28.578125 L 29 41 C 29.382813 41.730469 29.613281 41.988281 30 42 L 35 42 C 35.570313 42 36.371094 41.738281 36 41 L 28.914063 28.578125 C 28.726563 28.382813 28.726563 28.195313 28.914063 28 L 39.652344 9 C 39.847656 8.617188 39.382813 8 39 8 Z M 12.636719 13 C 12.050781 13 11.832031 13.28125 12.433594 14.457031 L 15.886719 20.78125 C 16.074219 20.980469 16.074219 21.167969 15.886719 21.355469 L 10.050781 31.742188 C 9.6875 32.378906 9.988281 32.984375 11 33 L 16 33 C 16.421875 32.972656 16.792969 32.515625 17 32 L 23 21.550781 C 23.1875 21.355469 23.1875 21.167969 23 20.980469 L 19 14 C 18.734375 13.421875 18.601563 13.019531 18 13 Z"
                />
              </svg>
            </a> */}
          </div>
          <div className="downloads">
            <a download href="/cv/Sid-Ahmed_MIR_Resume.pdf" className="button">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
