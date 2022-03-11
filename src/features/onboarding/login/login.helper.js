export const validatePhone = (phone) => {
	return String(phone)
		.toLowerCase()
		.match(
			/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
		);
};

export default validatePhone;