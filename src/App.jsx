import React from 'react'
import View3602 from './components/View3602';



const App = () => {
  const GURKHA_SUV_HOTSPOTS_CONFIG = [
    {
      variant: {
        images: [
          {
            src: "https://scaleflex.cloudimg.io/v7/demo/360-assets/AIR_SNORKEL_FINAL_JPG.png?vh=88bccb",
            alt: "air snorkel",
          },
        ],
        title: "Air Intake Snorkel",
        description: "The snorkel gives the Gurkha an unmatched water-wading ability and ensures ample supply of fresh air for combustion.",
        moreDetailsUrl: "https://forcegurkha.co.in",
      },
      popupProps: { popupSelector: "air-intake-popup" },
      initialDimensions: [1170, 662],
      positions: [
        { imageIndex: 0, xCoord: 683, yCoord: 151 },
        { imageIndex: 1, xCoord: 683 },
        { imageIndex: 2, xCoord: 683 },
        { imageIndex: 3, xCoord: 683 },
        { imageIndex: 4, xCoord: 683 },
        { imageIndex: 5, xCoord: 683 },
        { imageIndex: 6, xCoord: 683 },
        { imageIndex: 7, xCoord: 681, yCoord: 152 },
        { imageIndex: 8, xCoord: 677, yCoord: 156 },
        { imageIndex: 9, xCoord: 671, yCoord: 159 },
        { imageIndex: 10, xCoord: 665, yCoord: 163 },
        { imageIndex: 11, xCoord: 656, yCoord: 168 },
        { imageIndex: 12, xCoord: 650, yCoord: 171 },
        { imageIndex: 13, xCoord: 643, yCoord: 176 },
        { imageIndex: 14, xCoord: 635, yCoord: 178 },
        { imageIndex: 15, xCoord: 628, yCoord: 181 },
        { imageIndex: 16, xCoord: 621 },
        { imageIndex: 17, xCoord: 610 },
        { imageIndex: 18, xCoord: 598 },
        { imageIndex: 19, xCoord: 588 },
        { imageIndex: 20, xCoord: 578 },
        { imageIndex: 21, xCoord: 570, yCoord: 176 },
        { imageIndex: 22, xCoord: 560, yCoord: 173 }
      ]
    },
    {
      variant: {
        images: [
          {
            src: "https://scaleflex.cloudimg.io/v7/demo/360-assets/AIR_SNORKEL_FINAL_JPG.png?vh=88bccb",
            alt: "air snorkel",
          },
        ],
        title: "Air Intake Snorkel2",
        description: "The snorkel gives22 the Gurkha an unmatched water-wading ability and ensures ample supply of fresh air for combustion.",
        moreDetailsUrl: "https://forcegurkha.co.in",
      },
      popupProps: { popupSelector: "air-intake-popup2" },
      initialDimensions: [1170, 662],
      positions: [
        { imageIndex: 1, xCoord: 452, yCoord: 319 },
        // ...more positions
      ],
    },
  ];
  return (
    <div>
      <View3602
        id="gurkha-suv"
        folder="https://scaleflex.cloudimg.io/v7/demo/vivo-mobile/"
        filename="product-{index}.jpg"
        amount="60"
        width="600px"
        height="600px"
        hotspotsConfig={GURKHA_SUV_HOTSPOTS_CONFIG}
        magnifierSize="200px"

      />
      {/* <View3602
        id="gurkha-suv2"
        folder="https://scaleflex.cloudimg.io/v7/demo/suv-orange-car-360/"
        filename="orange-{index}.jpg"
        amount="73"
        hotspotsConfig={GURKHA_SUV_HOTSPOTS_CONFIG}
       
      /> */}
    </div>
  )
}

export default App
