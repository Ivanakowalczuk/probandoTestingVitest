import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, vi, expect} from "vitest";
import LoginForm from "../components/LoginForm";

describe("test formulario", ()=>{
    test("Test del Input", ()=>{
        render(<LoginForm/>)
        const input = screen.getByTestId("inputText")
        fireEvent.change(input, {target: {value: "hola"}})
        expect(input.value).toMatch(/^[A-Za-z]+$/);
    })
    test("Test del button", ()=>{
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const btn = screen.getByTestId("button")
        fireEvent.click(btn)
        expect(handleClick).toBeCalledTimes(1)
    })

})

