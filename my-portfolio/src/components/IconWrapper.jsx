// Icon wrapper component to ensure consistent styling across different icon libraries
const IconWrapper = ({ children, className = "", size = "default", variant = "default", ...props }) => {
  // Size mappings for consistency
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    default: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
    "2xl": "w-12 h-12",
    "3xl": "w-16 h-16",
  }

  // Variant styles for different contexts
  const variantClasses = {
    default: "",
    button: "transition-transform duration-200 hover:scale-110",
    nav: "transition-colors duration-200",
    social: "transition-all duration-300 hover:scale-110",
  }

  const combinedClasses = `${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  return (
    <span className={`inline-flex items-center justify-center ${combinedClasses}`} {...props}>
      {children}
    </span>
  )
}

export default IconWrapper
