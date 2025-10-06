// Children' as a syntax term is one of React hooks, and it can be used directly.
function Header({children}) {
  return (
    <div>
      {/* Receiving JSX elements from parent component. */}
      <div>Header</div>
      {children}
    </div>
  )
}

export default Header;