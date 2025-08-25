 const socials = [
      { name:"Facebook", icon:"/assets/fb-icon.png", href:"#" },
      { name: "Instagram", icon: "/assets/instagram-icon.png", href: "#" },
      { name: "Twitter", icon: "/assets/twitter-icon.png", href: "#" },
    ];

export default function Socials() {
    return (
      <nav>
        <ul className="flex gap-3 mt-5">
          {socials.map((social) =>
            <li key={social.name}>
              <a href={social.href} className="flex">
                <img src={social.icon} alt={social.name} className="h-6 w-6 flex-shrink-0"/>
              </a>
            </li>
          )}
        </ul>
      </nav>
    )
}