const CustomInput = ({ label, id, ...props }) => {
	return (
		<div>
			<p className="inline-block w-[30rem]">
				<label className="text-[1.5rem]" htmlFor={id}>
					{label}
				</label>
				<br />
				<input
					className="text-[1.5rem] rounded-lg px-4 py-2 w-[90%] transition-all duration-300 focus:w-full"
					type="text"
					name={id}
					id={id}
					required
					{...props}
				/>
			</p>
		</div>
	);
};

export default CustomInput;
