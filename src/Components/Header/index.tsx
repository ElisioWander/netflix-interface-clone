import './style.css'

interface HeaderProps {
  headerBlack: boolean
}

export function Header({ headerBlack }: HeaderProps) {
  return (
    <header className={headerBlack ? 'background-black' : ''}>
      <div className="header-logo">
          <a href="/" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix"/>
          </a>
      </div>
      <div className="header-user">
        <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User"/>
        </a>
      </div>
    </header>
  )
}