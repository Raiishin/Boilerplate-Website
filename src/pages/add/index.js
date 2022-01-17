import React, { useState } from "react";
import { TextField, InputLabel, NativeSelect } from "@mui/material";

function App() {
	const data = ["Chrome", "Firefox", "Internet Explorer", "Opera"];
	return (
		<body>
			<InputLabel htmlFor="select">Age</InputLabel>
			<NativeSelect id="select">
				<option value="10">Ten</option>
				<option value="20">Twenty</option>
			</NativeSelect>

			<input type="text" list="data" />
			<datalist id="data">
				{data.map((item, key) => (
					<option key={key} value={item.displayValue} />
				))}
			</datalist>
			<TextField id="filled-basic" label="Restaurant" variant="filled" />
		</body>
	);
}

export default App;
