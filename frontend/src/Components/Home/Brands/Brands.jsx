import React from "react";
import Brand_1 from "../../../Assets/Brand_1.png";
import Brand_2 from "../../../Assets/Brand_2.png";
import Brand_3 from "../../../Assets/Brand_3.png";
import Brand_4 from "../../../Assets/Brand_4.png";
import Brand_5 from "../../../Assets/Brand_5.png";

const Brands = () => {
  return (
    


    <div className="flex justify-between my-[5rem] mx-8 items-center opacity-50">
      <img src={Brand_1} className="h-9 hover:scale-125 transition-all " />
      <img src={Brand_2} className="h-9 hover:scale-125 transition-all" />
      <img src={Brand_3} className="h-9 hover:scale-125 transition-all" />
      <img src={Brand_4} className="h-9 hover:scale-125 transition-all" />
      <img src={Brand_5} className="h-9 hover:scale-125 transition-all" />
    </div>
    
  );
};

export default Brands;
