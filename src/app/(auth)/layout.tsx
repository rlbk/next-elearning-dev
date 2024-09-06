import React from "react";

type Props = { children: React.ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      {children}
      <div className="absolute bottom-0 right-0 left-0 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6dcffb"
            fill-opacity="1"
            d="M0,288L40,266.7C80,245,160,203,240,192C320,181,400,203,480,224C560,245,640,267,720,240C800,213,880,139,960,144C1040,149,1120,235,1200,245.3C1280,256,1360,192,1400,160L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
