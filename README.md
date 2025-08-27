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
<img width="641" height="254" alt="bigText" src="https://github.com/user-attachments/assets/fdc24ef5-18bc-4cce-8984-8dcaef96203e" />
<img width="635" height="254" alt="blueText" src="https://github.com/user-attachments/assets/71dcddba-ee7f-41dd-ba15-fad7be213160" />
<img width="624" height="236" alt="highlight" src="https://github.com/user-attachments/assets/16e9cda2-d5d8-4b21-97cf-022f492d8fb5" />

<img width="641" height="255" alt="italicText" src="https://github.com/user-attachments/assets/a4cff9fe-1844-4f57-a5da-d65be7619590" />
<img width="641" height="254" alt="monoText" src="https://github.com/user-attachments/assets/b6ff9c7e-fb0c-4352-b895-96356b9d75fc" />


