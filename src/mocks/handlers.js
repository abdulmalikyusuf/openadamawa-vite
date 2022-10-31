import { rest } from "msw"

import projects from "../data/projects"
import mdas from "../data/mdas"
import lgas from "../data/lgas"
import contractors from "../data/contractors"


export const handlers = [
    rest.get("/projects", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(projects))
    }),
    rest.get("/mdas", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mdas))
    }),
    rest.get("/lgas", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(lgas))
    }),
    rest.get("/contractors", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(contractors))
    })
]