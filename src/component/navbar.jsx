import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  const navMenu = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Facilities', link: '/facilities' },
  ]
  return (
    <header className="bg-[#1B1107] py-15 px-25 body">
      <nav className="flex items-center justify-between text-white border-2 border-white py-5 px-8">
        {/* logo */}
        <div>
          <h1 className="text-5xl font-extrabold">Caffeine</h1>
        </div>

        {/* list */}
        <ul className="flex items-center gap-10 text-xl">
          {
            navMenu.map(({ name, link },key ) => (

              <a key={key} href={link}>
                <li >
                  <h3>{name}</h3>
                </li>
              </a>
            ))
          }
        </ul>

        <div className="flex items-center gap-8">
          <button className="border-r-3 px-5">Sign In </button>
          <FaSearch />

        </div>
      </nav>
    </header>
  ) 
}
