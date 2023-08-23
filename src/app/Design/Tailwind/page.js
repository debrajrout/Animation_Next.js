import React from "react";

export default function page() {
	return (
		<>
			<div class="flex flex-row-reverse">
				<div>01</div>
				<div>02</div>
				<div>03</div>
			</div>

			<div class="flex flex-wrap">
				<div className="w-full bg-slate-600">01</div>
				<div className="w-full bg-white">02</div>
				<div className="w-full bg-slate-600">03</div>
			</div>
		</>
	);
}
