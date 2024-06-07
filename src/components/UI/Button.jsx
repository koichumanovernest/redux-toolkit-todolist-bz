import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ children, onClick, variant, type = "button", ...rest }) => {
	return (
		<div>
			<MuiButton onClick={onClick} variant={variant} type={type} {...rest}>
				{children}
			</MuiButton>
		</div>
	);
};

export default Button;
