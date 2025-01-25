import React from "react";
const rules = [
    { id: 1, regex: /.{8,}/, text: "At least 8 characters" },
    { id: 2, regex: /[0-9]/, text: "At least 1 number" },
    { id: 3, regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { id: 4, regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    { id: 5, regex: /[!@#$%^&*(),.?":{}|<>]/, text: "At least 1 special character" },
];
export function PasswordAnimation(){
    return(
        <div>

        </div>
    )
}