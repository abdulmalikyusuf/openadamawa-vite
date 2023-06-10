import React from "react";
import {
	useFloating,
	useInteractions,
	useClick,
	useHover,
	useDismiss,
	offset,
	flip,
	shift
} from "@floating-ui/react-dom-interactions"
import { Button } from "react-bootstrap"
import style from "../styles/button.module.css"


function FloatingDropdown({ criteria, options, handleChange }) {
	const [open, setOpen] = React.useState(false);
	const {x, y, reference, floating, strategy, context} = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(4), flip(), shift({padding: 10})],
		placement: "bottom"
	});
	const {getReferenceProps, getFloatingProps} = useInteractions([
		useClick(context, {
			enabled: true,
			event: 'mousedown'
		}),
		useDismiss(context, {
			enabled: true,
			referencePress: true,
			ancestorScroll: true
		})
	])
	return (
		<div className="">
            <h5 className={`fs-5 me-2 me-md-4`} ref={reference} {...getReferenceProps()} style={{ cursor: 'pointer'}}>{criteria}</h5>
			{open && 
			<div ref={floating} {...getFloatingProps} className="bg-state2state text-white"
			style={{
				width: "min-content",
				position: strategy,
				left: x ?? 0,
				top: y ?? 0,
				zIndex: "1"
			}}>
				{options.map(option => (
					<Button variant="" className={style.dropdown_option} gh="w-100 text-white btn btn-dark border-1 border-top bg-state2state" onClick={()=>handleChange(option)}>{option}</Button>
				))}
			</div>
			}
		</div>

	)
}

export default FloatingDropdown;