import React from 'react';
import { paytoneOne } from "@/app/layout";

const TitleMedia = () => {
  return (
    <div className="xl:w-[40%]">
      <h2 className={`${paytoneOne.className} text-white title mb-5`}>Social Media</h2>
      <p className="text-lg font-light text-gray-200 mb-16 xl:text-xl">Also You can visit my profiles in some social media like LinkedIn or GitHub, and contact through Telegram.</p>
    </div>
  );
};

export default TitleMedia;
