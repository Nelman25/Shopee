const Button = ({ children, textOnly, className, ...props }) => {
	return (
		<button
			className={`${
				textOnly ? `text-slate-200` : `bg-[#7ba2bb] text-slate-200 shadow-sm hover:bg-[#678da5] hover:shadow-lg`
			} transition-all duration-500 px-3 py-1 rounded-xl ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
