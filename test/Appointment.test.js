import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    let container;

    beforeEach(() => {
        global.IS_REACT_ACT_ENVIRONMENT = true;
        container = document.createElement("div")
        document.body.replaceChildren(container)
    });

    const render = component =>
        act(() => ReactDOM.createRoot(container).render(component));

    it("renders the customer first name", () => {
        const customer = { firstName: "Ashley" };
        render(<Appointment customer={customer} />)
        expect(document.body.textContent).toMatch("Ashley");
    });
    it("renders the customer first name", () => {
        const customer = { firstName: "Jordan" };
        render(<Appointment customer={customer} />)
        expect(document.body.textContent).toMatch("Jordan");
    });
});