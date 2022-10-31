/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react'
import { MdMenu } from 'react-icons/md';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image"


export default function Dropdown({ elementRef, chartTitle }) {
    const [dropdown, setDropdown] = useState(false);

	let ref = React.useRef();

	useEffect(() => {
		const handler = (event) => {
			if ( dropdown && ref.current !== (event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mouseup", handler);
		// document.addEventListener("touchend", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mouseup", handler);
			document.removeEventListener("touchend", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		setTimeout(() => {
			window.innerWidth > 960 && setDropdown(true);
		}, 1000);
	};

	const onMouseLeave = () => {
		setTimeout(() => {
			window.innerWidth > 960 && setDropdown(false);
		}, 1000);
	};
    return(
        <>
            <MdMenu size={25} ref={ref} onMouseLeave={onMouseLeave} onClick={() => setDropdown((prev) => !prev)} className="" />

            {/* <!-- Dropdown menu --> */}
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} id="dropdownInformation" style={{zIndex: '10'}}
                className={`position-absolute ${dropdown ? "" : "d-none"} shadow text-nowrap`}>
                <div className="p-4 bg-white">
                    <p onClick={()=>exportComponentAsPNG(elementRef, {fileName:chartTitle})}>Download as PNG Image</p>
                    <p onClick={()=>exportComponentAsJPEG(elementRef)}>Download as JPEG Image</p>
                    <p onClick={()=>exportComponentAsPDF(elementRef, {fileName:chartTitle, pdfOptions: {unit: 'px', landscape: 'l'}})}>Download as PDF</p>
                    <p>Print Chart</p>
                </div>
            </div>
        </>
    )
}