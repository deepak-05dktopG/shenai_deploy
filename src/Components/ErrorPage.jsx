import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './ErrorPage.css'

function ErrorPage() {
  return (
    <>
      <div className="body1">
        <div className="insidenav bg-dark d-flex align-items-center justify-content-center flex-column text-center text-white">
          <h1>404 Error</h1>
          <div className="afterhead d-flex justify-content-center">
    <div className="tohome">Home</div> 
            <span className="gap">/</span>
            <div className="stay">Project</div>
          </div>
        </div>
      </div>
      <div className="gif">
        <img src="https://s3-alpha-sig.figma.com/img/f193/b590/35b4186e8d85631cc9137e7a9c72678f?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEmjhg6DAFN9JRtaa06XMGoF2mgsCiRHFLmlFEc3H1A32CIF9vus51V1RCU4pOPTizI9sNHMfruAhUOKAB2S2tY4vDohDeiy~dGIZI6B3RGnXIdgX0aojQTaAPkdHFUGjxupRCTqNFxaa9av5-ZdpSvFUCvYXiL31UnleCw1UoOyaRbVQ~IoJgW-a3QaFsmm-78Dnz~R5tQavWwKKcECEosVjyNN9NqnTwmD9UuPJcE2ewwhXxG9xwUhcejQsFCx8GtHjaQ3JjTkZ~gxFv2a832i9lrKHDP0Y5ZBbGV0Chqh50lWQKa9UD6Sc-qE6L0~yk8jy~IdI2hNAmE3eqMQxQ__" alt="" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ErrorPage;
