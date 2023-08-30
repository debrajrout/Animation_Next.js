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

			<div class="flex">
				<div class="bg-slate-950 flex-none w-14 h-14 order-first hover:order-last">
					07
				</div>
				<div class="bg-slate-600 flex-1 w-64 ...">02</div>
				<div class="bg-slate-50 flex-initial w-32 ...">03</div>
			</div>
			<div class="grid grid-rows-3 grid-flow-col gap-4">
				<div class=" bg-blue-800 row-start-2 row-span-2 ...">01</div>
				<div class=" bg-black row-end-3 row-span-2 ...">02</div>
				<div class=" bg-red-700 row-start-1 row-end-4 ...">03</div>
			</div>

			<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
				<div class=" bg-yellow-300 col-span-2">01</div>
				<div class="col-span-2">02</div>
				<div className="bg-slate-500 ">03</div>
				<div className="bg-slate-900 text-red-600">04</div>
				<div className="bg-green-700">05</div>
			</div>
			<div class="grid grid-flow-col auto-cols-fr">
				<div className="bg-white">01</div>
				<div className="bg-orange-600">02</div>
				<div className="bg-lime-500">03</div>
			</div>
		</>
	);
}
