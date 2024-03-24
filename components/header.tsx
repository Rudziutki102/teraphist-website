import BurgerMenu from "./burger-menu";
import NavigationMenu from "./navigation";

export default function Header() {

  return (
    <header 
    className='sticky w-full z-[999] top-0 flex items-center sm:justify-center sm:shadow-lg sm:shadow-black/[0.03] sm:backdrop-blur-[0.5rem] transition-colors sm:bg-white bg-opacity-80 sm:dark:bg-gray-800 sm:dark:border-black/40 bg-transparent overflow-hidden'
    >
    <NavigationMenu/>
    <BurgerMenu/>
    </header>
  )
}
