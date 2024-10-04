const Button = ({ children, textOnly, className, ...props }) => {
	return (
		<button
			className={`${
				textOnly ? `text-white` : `bg-yellow-200 text-slate-800 shadow-sm hover:bg-yellow-400`
			} px-3 py-1 rounded-xl ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
