// This is a functional component in React named 'Header'
const Header = ({title , isCenter }) => {
  return (
    // It returns a h1 element with several classes applied
    <h1 className={`text-white text-3xl md:text-4xl font-extrabold lg:text-5xl ${isCenter && 'text-center' } `}  >
      {title} {/* The text displayed is determined by the 'title' prop */}
    </h1>
  )
}

export default Header // The component is exported for use in other parts of the application
