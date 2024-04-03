import { Variants } from "framer-motion";

export const menuTopLineVariant : Variants = {
    open:{
      rotate:45,
      translateY:10,
    },
    closed:{
      rotate:0,
      translateY:2
    }
  }
  export const menuMidLineVariant : Variants ={
    open:{
      opacity:0,
    },
    closed:{
      opacity:1
    }
  }
  export const menuBottomLineVariant :Variants = {
    open:{
      rotate:-45,
      translateY:-10
    },
    closed:{
      rotate:0,
      translateY:0
    }

  }
  export const menuAnimationVariant : Variants = {
    initial:{
      opacity:0,
      x:-100
    },
    animate:(i:number)=>({
      opacity: 1,
      x:0,
      transition: {
        delay:0.05 * i,
        type:'spring',
        mass:.1
      }
    })
  };

  export const skillsAnimationVariant : Variants ={
    initial:{
      opacity:0,
      y:100
    },
    animate:(index:number)=>({
      opacity:1,
      y:0,
      transition:{
        delay:0.05 * index
      }
    })
  }