import { useBattery } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Battery(): React.JSX.Element {
  const { level, charging } = useBattery();
  const percentage: number = level !== null ? Math.floor(level * 100) : 100;

  const batteryColor = () => {
    if (charging) {
      return "#53DA67";
    }
    if (percentage > 20) {
      return "white";
    }
    return "red";
  };
  // const batteryColor: string = percentage > 20 ? "white" : "red";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="13"
      viewBox="0 0 28 13"
      fill="none"
    >
      <defs>
        <linearGradient id="batteryGradient" x1="0" x2="1" y1="0" y2="0">
          <stop
            offset={`${percentage.toString()}%`}
            stopColor={batteryColor()}
            stopOpacity="1"
          />
          ̦
          <stop
            offset={`${percentage.toString()}%`}
            stopColor={batteryColor()}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path
        opacity="0.35"
        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H21C22.933 0.5 24.5 2.067 24.5 4V9C24.5 10.933 22.933 12.5 21 12.5H4C2.067 12.5 0.5 10.933 0.5 9V4Z"
        stroke="white"
      />
      <path
        opacity="0.4"
        d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z"
        fill="white"
      />
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z"
        fill="url(#batteryGradient)"
      />
    </svg>
  );
}

interface DynamicIslandProps {
  typeNoti: NotificationType;
  setTypeNoti: React.Dispatch<React.SetStateAction<NotificationType>>;
}

type NotificationType = "call" | "";

export function DynamicIsland({
  typeNoti,
  setTypeNoti,
}: DynamicIslandProps): React.JSX.Element {
  const [getCurrentTimeClock, setGetCurrentTimeClock] = useState("9:41");
  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setGetCurrentTimeClock(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
      );
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className=" h-[19rem] w-[310px]  rounded-tl-[50px] rounded-tr-[50px] border-l-[4px] border-r-[4px] border-t-[4px] border-gray-400 bg-[url('https://cdn.moonaz.net/rs/wallpaper/image/6481a07fb9e83.jpg')] bg-cover  antialiased">
      <div className="flex h-full  w-full flex-col items-center rounded-tl-[45px] rounded-tr-[45px] border-l-[7px] border-r-[7px] border-t-[7px] border-black p-2">
        <div className=" relative flex w-full items-center justify-between px-2 pt-1">
          {typeNoti !== "call" && (
            <div className="font-semibold">{getCurrentTimeClock}</div>
          )}
          <AnimatePresence>
            <motion.div
              layout
              initial={{
                width: "7rem",
                height: "2rem",
              }}
              exit={{}}
              transition={{
                width: { type: "spring", bounce: 0.6, mass: 0.5 },
                height: { type: "spring", bounce: 0.6, mass: 0.5 },
              }}
              animate={{
                width: typeNoti !== "" ? "16.7rem" : "7rem",
                height: typeNoti !== "" ? "4rem" : "2rem",
              }}
              className="absolute left-0 right-0 top-0 z-10 m-auto rounded-full bg-black"
            >
              {typeNoti === "call" ? (
                <motion.div
                  className="flex h-full w-full items-center justify-between px-4 py-2"
                  initial={{
                    filter: "blur(5px)",
                    opacity: 0,
                  }}
                  exit={{
                    filter: "blur(5px)",
                    transition: { ease: "easeInOut", duration: 0.05 },
                    opacity: 0,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  layout
                >
                  <div className="flex w-full items-center justify-between overflow-clip">
                    <div className="flex items-center gap-x-2">
                      <div className="aspect-square h-10 w-10 rounded-full bg-[url('https://i.postimg.cc/26sy5z7K/409033362-731256895179510-2095166766257096173-n.jpg')] bg-contain" />
                      <div className="flex flex-col">
                        <span className="text-sm text-white/50">mobile</span>
                        <span className="">Swati</span>
                      </div>
                    </div>
                    <div className="flex gap-x-1">
                      <button
                        type="button"
                        onClick={() => {
                          setTypeNoti("");
                        }}
                        className="flex  aspect-square h-10 w-10 items-center justify-center rounded-full bg-[#F35242]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="10"
                          viewBox="0 0 25 10"
                          fill="none"
                        >
                          <path
                            d="M0 7.53628V7.33686C0 6.09295 0.361801 5.00904 1.0854 4.08513C1.80901 3.16121 2.7758 2.39733 3.98576 1.79346C5.19571 1.1896 6.53913 0.739722 8.01599 0.443826C9.49286 0.147942 10.9846 0 12.4911 0C13.9976 0 15.4923 0.147942 16.9751 0.443826C18.4579 0.739722 19.8043 1.1896 21.0142 1.79346C22.2242 2.39733 23.191 3.16121 23.9146 4.08513C24.6382 5.00904 25 6.09295 25 7.33686V7.53628C25 7.99522 24.9229 8.41187 24.7686 8.78623C24.6145 9.16058 24.3861 9.45646 24.0835 9.67388C23.781 9.89129 23.3926 10 22.9181 10C22.4081 10 21.8209 9.96679 21.1565 9.90038C20.4922 9.83397 19.6441 9.6377 18.612 9.31158C18.0189 9.1304 17.5889 8.87379 17.322 8.54173C17.0551 8.20955 16.9158 7.71134 16.9039 7.0471L16.8683 5.88768C16.8683 5.68236 16.7438 5.53139 16.4946 5.43476C16.1862 5.33815 15.685 5.23852 14.9911 5.13586C14.2971 5.0332 13.4638 4.98187 12.4911 4.98187C11.5184 4.98187 10.685 5.0332 9.99109 5.13586C9.29714 5.23852 8.80188 5.33815 8.50532 5.43476C8.24434 5.53139 8.11385 5.68236 8.11385 5.88768L8.09607 7.0471C8.0842 7.71134 7.94185 8.20955 7.66901 8.54173C7.39618 8.87379 6.9632 9.1304 6.37009 9.31158C5.33806 9.6377 4.49287 9.83397 3.83451 9.90038C3.17615 9.96679 2.586 10 2.06405 10C1.60141 10 1.21886 9.89129 0.916369 9.67388C0.613883 9.45646 0.38553 9.16058 0.231311 8.78623C0.0771036 8.41187 0 7.99522 0 7.53628Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setTypeNoti("");
                        }}
                        type="button"
                        className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-[#57D76A]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M5.68851 15.2915C4.52043 14.1206 3.48538 12.8911 2.58336 11.603C1.68135 10.3149 0.999971 9.03338 0.539229 7.75835C0.078486 6.48331 -0.0869964 5.27333 0.0427818 4.12841C0.172573 2.98347 0.678741 1.96214 1.56129 1.0644C1.58724 1.03839 1.62293 1.00261 1.66836 0.957069C1.71378 0.911532 1.76894 0.875753 1.83384 0.849734C2.27511 0.511467 2.70341 0.27077 3.11872 0.127643C3.53404 -0.0154709 3.92016 -0.03824 4.27708 0.0593365C4.63399 0.156926 4.95521 0.400875 5.24075 0.79118L7.71317 4.30405C8.12849 4.88952 8.30046 5.39368 8.22907 5.81652C8.15769 6.23937 7.89488 6.69149 7.44062 7.17287L6.66191 7.99254C6.53212 8.13566 6.47696 8.28528 6.49643 8.44141C6.5159 8.59754 6.55808 8.73415 6.62298 8.85125C6.81765 9.18951 7.14211 9.63838 7.59637 10.1978C8.05062 10.7573 8.55029 11.3102 9.0954 11.8566C9.66646 12.4291 10.2213 12.9366 10.7599 13.379C11.2985 13.8213 11.7431 14.1465 12.0936 14.3546C12.2363 14.4327 12.3952 14.475 12.5704 14.4815C12.7457 14.4881 12.8917 14.4393 13.0084 14.3353L13.7873 13.5351C14.2415 13.0797 14.6827 12.8163 15.1109 12.7447C15.5393 12.6732 16.052 12.8456 16.6489 13.2619C17.1941 13.6392 17.6744 13.9775 18.0897 14.2767C18.505 14.5759 18.8846 14.8459 19.2286 15.0865C19.5724 15.3272 19.9 15.5582 20.2116 15.7793C20.7957 16.2218 21.0552 16.7487 20.9902 17.3601C20.9254 17.9716 20.6658 18.5376 20.2116 19.0581C20.1597 19.1232 20.1078 19.1882 20.0559 19.2532C20.0039 19.3182 19.9455 19.3833 19.8806 19.4484C18.998 20.3331 17.9857 20.8372 16.8437 20.9608C15.7016 21.0845 14.4946 20.9153 13.2227 20.4534C11.9507 19.9915 10.6723 19.3085 9.38741 18.4043C8.10253 17.5 6.86957 16.4625 5.68851 15.2915Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {typeNoti !== "call" && (
            <div className="flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z"
                  fill="white"
                />
                <path
                  d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z"
                  fill="white"
                />
                <path
                  d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z"
                  fill="white"
                />
                <path
                  d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z"
                  fill="white"
                />
              </svg>
              <Battery />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DynamicIslandDemo(): React.JSX.Element {
  const [typeNoti, setTypeNoti] = useState<NotificationType>("");

  return (
    <div className="mt-11 flex h-[50vh] w-full flex-col">
      <div className="flex w-full justify-center">
        <DynamicIsland setTypeNoti={setTypeNoti} typeNoti={typeNoti} />
      </div>

      <div className="h-full rounded-lg bg-white/5 p-4">
        <button
          type="button"
          onClick={() => {
            setTypeNoti((prev) => (prev === "call" ? "" : "call"));
          }}
          className="rounded bg-white/25 px-3 py-1 transition-colors ease-in-out hover:bg-white/30"
        >
          Call
        </button>
      </div>
    </div>
  );
}

export default DynamicIslandDemo;
