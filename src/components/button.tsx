import type React from "react";
import { cn } from "../lib/utils";
import { Loader2Icon } from "lucide-react";

interface Props
	extends React.PropsWithChildren<
		React.ButtonHTMLAttributes<HTMLButtonElement>
	> {
	size?: "sm" | "base" | "lg";
	variant?: "base" | "outline" | "filled" | "borderless";
	loading?: boolean;
}

const Button: React.FC<Props> = ({
	loading = false,
	size = "base",
	variant = "base",
	children,
	...props
}) => {
	return (
		<button
			disabled={loading}
			className={cn(
				"flex items-center gap-1 rounded-lg disabled:opacity-50 duration-300",
				{
					"bg-black/4 enabled:hover:bg-black/20": variant === "base",
					"border border-black/10 enabled:hover:border-black/20 hover:bg-black/4":
						variant === "outline",
					"bg-black text-white enabled:hover:bg-black/60": variant === "filled",
					"enabled:hover:bg-black/4": variant === "borderless",
					"text-base px-2 py-1": size === "sm",
					"text-lg px-4 py-2": size === "base",
					"text-xl px-6 py-4": size === "lg",
				},
			)}
			type="button"
			{...props}
		>
			<Loader2Icon
				size={16}
				className={cn("animate-spin scale-0 duration-300 -mr-5", {
					"scale-100 mr-0": loading,
				})}
			/>
			{children}
		</button>
	);
};

export default Button;
