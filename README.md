# **LWC JavaScript Symbol Purpose Checker**

---

## **Description**
A Lightning Web Component that lets users enter JavaScript symbols and dynamically shows their purpose.

- Supports symbols like `%`, `[]`, `{}`, `=>`, `!`, `==`, `===`, `||`, `&&`.
- Provides instant explanations for each symbol.
- Styled with **Salesforce Lightning Design System (SLDS)**.
- Can be added to **App Page, Record Page, or Home Page**.

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

## **Screenshots**
<img width="641" height="254" alt="bigText" src="https://github.com/user-attachments/assets/bd5ec0e1-2104-4753-a799-c7291c10ba24" />

<img width="635" height="254" alt="blueText" src="https://github.com/user-attachments/assets/0a998677-3753-4b78-900a-2e4560426f6f"
<img width="641" height="254" alt="monoText" src="https://github.com/user-attachments/assets/1a106dc8-9bf8-46f3-8036-712cdd0efd4e" />
 />
<img width="624" height="236" alt="highlight" src="https://github.com/user-attachments/assets/ee3c17fc-e396-4f31-b7fa-8a643802554e" />

