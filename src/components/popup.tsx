import Image from "next/image";
import close from "@public/close.svg"

interface PopupProps {
	children: React.ReactNode;
	type: string | null;
	title: string;
	setDisplay: (param: boolean) => void;
	// 如果你的组件接受额外的 props，这是一种方式来声明它们
	[key: string]: any;
}

export function Popup({
	children,
	type,
	title,
	setDisplay,
	...props
}: PopupProps) {
	const { className, style, ...rest } = props;
	return (
		<div
			{...rest}
			className={
				className
					? className
					: "w-screen h-screen backdrop-blur absolute top-0 left-0 z-50 grid place-items-center"
			}
			style={style ? style : {}}
		>
			<div className="w-[80vw] rounded border-2 border-zinc-600 p-4 " >
				<div className="flex flex-row border-b-2 border-zinc-600">
					<button
						onClick={() => {
							setDisplay(false);
						}}
						className="inline"
					>
						<Image src={close} alt="close" width={30} height={30} className="dark:invert" />
					</button>
					<h2 className="inline flex-grow text-center">{title}</h2>
				</div>
				<div className="mt-4 overflow-y-auto max-h-[70vh]">{children}</div>
			</div>
		</div>
	);
}
