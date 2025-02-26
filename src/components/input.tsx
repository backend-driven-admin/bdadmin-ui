import React from "react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { CheckIcon, Loader2Icon, TriangleAlertIcon } from "lucide-react";

interface Props
	extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	type?: "input" | "textarea" | "password";
	label?: string;
	maxLength?: number;
	status?: "progress" | "success" | "error";
	message?: string;
	value?: string;
	defaultValue?: string;
	onChangeValue?: (value: string) => void;
}

const Input: React.FC<Props> = ({
	type = "input",
	label,
	maxLength,
	status,
	message,
	value,
	defaultValue,
	onChangeValue,
	...props
}) => {
	const [length, setLength] = useState(0);

	useEffect(() => {
		if (typeof value === "string") {
			setLength(value.length);
		} else if (typeof defaultValue === "string") {
			setLength(defaultValue.length);
		}
	}, [value, defaultValue]);

	const handleChange = (value: string) => {
		setLength(value.length);
		onChangeValue?.(value);
	};

	const getProgressCircle = (current: number, max: number) => {
		const radius = 7;
		const circumference = 2 * Math.PI * radius;
		const progress = current / max;
		const strokeDashoffset = circumference * (1 - progress);

		return (
			<svg className="transform -rotate-90 size-4">
				<circle
					className="stroke-black/5"
					strokeWidth="2"
					fill="transparent"
					r={radius}
					cx="8"
					cy="8"
				/>
				<circle
					className={cn("stroke-black/20 duration-300", {
						"stroke-green-600": status === "success",
						"stroke-red-600": status === "error",
					})}
					strokeWidth="2"
					fill="transparent"
					r={radius}
					cx="8"
					cy="8"
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={strokeDashoffset}
				/>
			</svg>
		);
	};

	const commonClassName = cn(
		"peer bg-white border border-black/10 rounded-lg pl-4 pr-8 py-2 duration-300",
		"placeholder:duration-300 placeholder:text-black/20",
		"enabled:hover:border-black/40",
		"disabled:bg-black/4 disabled:text-black/10 disabled:border-transparent",
		"focus-visible:placeholder:text-black/40 focus-visible:outline-none",
		"focus-visible:border-black/40 focus-visible:shadow-focus",
		{
			"border-red-600 enabled:hover:border-red-600 focus-visible:border-red-600 focus-visible:shadow-focus-error":
				status === "error",
		},
		{
			"pt-6": !!label,
		},
	);

	return (
		<div>
			<div className="relative">
				{type === "textarea" ? (
					<textarea
						disabled={status === "progress"}
						className={cn("h-16 min-h-16", commonClassName)}
						maxLength={maxLength}
						value={value}
						defaultValue={defaultValue}
						onChange={(event) => handleChange(event.target.value)}
						{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<input
						type={type === "password" ? "password" : "input"}
						disabled={status === "progress"}
						className={commonClassName}
						maxLength={maxLength}
						value={value}
						defaultValue={defaultValue}
						onChange={(event) => handleChange(event.target.value)}
						{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
					/>
				)}
				{label && (
					<p
						className={cn(
							"absolute left-4 top-3 text-xs text-black/40 peer-disabled:text-black/10",
							{
								"text-red-600": status === "error",
							},
						)}
					>
						{label}
					</p>
				)}
				<Loader2Icon
					size={16}
					className={cn(
						"absolute top-3.5 right-4 animate-spin scale-0 duration-300",
						{
							"scale-100": status === "progress",
						},
					)}
				/>
				<CheckIcon
					size={16}
					className={cn(
						"absolute text-green-600 top-3.5 right-4 scale-0 duration-300",
						{
							"scale-100": status === "success",
						},
					)}
				/>
				<TriangleAlertIcon
					size={16}
					className={cn(
						"absolute text-red-600 top-3.5 right-4 scale-0 duration-300",
						{
							"scale-100": status === "error",
						},
					)}
				/>
				{type === "textarea" && typeof maxLength !== "undefined" && (
					<div className="absolute right-4 bottom-3.5 flex items-center gap-1.5">
						<p
							className={cn("text-xs text-black/20", {
								"text-red-600": status === "error",
							})}
						>
							{length}/{maxLength}
						</p>
						{getProgressCircle(length, maxLength)}
					</div>
				)}
			</div>
			<p
				className={cn("text-xs mt-1 text-black/40", {
					"text-red-600 ": status === "error",
				})}
			>
				{message}
			</p>
		</div>
	);
};

export default Input;
