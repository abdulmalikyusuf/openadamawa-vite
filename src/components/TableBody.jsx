import React from 'react'
import { currencyFormat } from '../utils/parseProjectData'

function TableBody({projects}) {
  return (
    <tbody>
        {projects?.map(project=> (
            <tr key={project.id}>
            <td>{project.title}</td>
            <td>{project.lga}</td>
            <td>{project.year}</td>
            <td>{project.contractor}</td>
            <td>{currencyFormat(project.budgetAmount)}</td>
            <td>{currencyFormat(project.contractAmount)}</td>
            <td>{project.mda}</td>
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody