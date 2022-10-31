import React from "react";
import { render, screen } from "@testing-library/react";

import FormContainer from "../../components/Form";
import Projects from "../Projects";
import ProjectsProvider, { ProjectsContext } from "../../_contexts/ProjectsContext"

describe("Render Query Form", ()=> {
    test("display lga select input", ()=> {
        render(
            <ProjectsContext.Provider value={ProjectsProvider()}>
                <FormContainer/>
            </ProjectsContext.Provider>
            )
        expect(screen.getByRole("img")).toBeDefined()
    })
})
