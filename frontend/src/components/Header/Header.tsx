import Nav from "../Nav/Nav"


type Props = {}

function Header({}: Props) {
  return (
    <header className="container">
    <div className="row">
      <div className="col">
        <Nav/>
      </div>
    </div>
  </header>
  )
}

export default Header