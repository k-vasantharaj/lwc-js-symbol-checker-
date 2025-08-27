# **LWC JavaScript Symbol Purpose Checker**

---


## **Description**
A Lightning Web Component that lets users enter JavaScript symbols and dynamically shows their purpose.

- Supports symbols like `%`, `[]`, `{}`, `=>`, `!`, `==`, `===`, `||`, `&&`.
- Provides instant explanations for each symbol.
- Styled with **Salesforce Lightning Design System (SLDS)**.
- Can be added to **App Page, Record Page, or Home Page**.
<img width="635" height="254" alt="blueText" src="https://github.com/user-attachments/assets/3e709736-7c27-42c6-8726-3ec7e00e13ed" />

---


## **Installation**
1. **Clone this repository:**
```bash
git clone https://github.com/yourusername/lwc-js-symbol-checker.git
Deploy to your Salesforce org using SFDX or VS Code:

bash
Copy code
sfdx force:source:deploy -p force-app
Open your Salesforce org and add the component jsSymbolChecker to a Lightning page via App Builder.

Usage
Type a JavaScript symbol (e.g., =>, [], %, &&) in the input box.

Click Check Purpose.

The explanation will appear below the button.

Example Symbols
Symbol	Purpose
%	Returns the remainder after division
{}	Defines objects or code blocks
[]	Defines arrays or accesses elements
=>	Arrow function (short function syntax)

!	Logical NOT, negates a boolean value
==	Loose equality (checks value only, allows type conversion)
===	Strict equality (checks value and type)
`	
&&	Logical AND, true if both conditions are true


