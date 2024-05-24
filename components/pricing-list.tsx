import React from "react";
import { pricingList } from "@/lib/data";
import SectionHeader from "./section-header";

const PricingList = () => {
  return (
    <div id="pricing" className="section w-full lg:w-3/4 mx-auto">
      <SectionHeader name="Cennik" />
      <div className="border-4 rounded-lg uppercase">
        {pricingList.map(({ category, services, priceTypes }, index) => (
          <>
            <div className="flex border-b-4 text-xl font-semibold" key={index}>
              <span className="p-5 flex-[70%]">{category}</span>
              {priceTypes
                ? priceTypes.map((priceType, index) => (
                    <span
                      className="border-l-2 p-5 flex-[15%] text-center"
                      key={index}
                    >
                      {priceType}
                    </span>
                  ))
                : null}
            </div>
            {services.map((service, index) => (
              <div
                className="flex border-b-2 text-lg last:border-b-0"
                key={index}
              >
                <span className="flex-[70%] p-5">{service.name}</span>
                {service.prices.map((price, index, array) => (
                  <span
                    className={`border-l-2 p-5 ${
                      array.length > 1 ? "flex-[15%]" : "flex-[30%]"
                    } text-center`}
                    key={index}
                  >
                    {price.amount}
                  </span>
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
