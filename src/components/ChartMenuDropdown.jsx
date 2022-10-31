import React from 'react'
import { Dropdown} from "react-bootstrap"
import { MdMenu, MdOutlineMenu, MdMenuBook, MdMenuOpen } from "react-icons/md"

function ChartMenuDropdown() {
  return (
    <Dropdown.Toggle variant="light" bg="light">
        <MdOutlineMenu fontSize={24}/>
        <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
            <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown.Toggle>
  )
}

export default ChartMenuDropdown