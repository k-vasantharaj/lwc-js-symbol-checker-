# **LWC JavaScript Symbol Purpose Checker**

---


## **Description**
A Lightning Web Component that lets users enter JavaScript symbols and dynamically shows their purpose.

- Supports symbols like `%`, `[]`, `{}`, `=>`, `!`, `==`, `===`, `||`, `&&`.
- Provides instant explanations for each symbol.
- Styled with **Salesforce Lightning Design System (SLDS)**.
- Can be added to **App Page, Record Page, or Home Page**.



## **Installation**
1. **Clone this repository:**

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

## 📸 Screenshots

<img width="635" height="254" alt="blueText" src="https://github.com/user-attachments/assets/3e709736-7c27-42c6-8726-3ec7e00e13ed" />
<img width="624" height="236" alt="highlight" src="https://github.com/user-attachments/assets/9cf1a67d-eeba-4c54-8b92-8e88e8cf6050" />

---<img width="641" height="255" alt="italicText" src="https://github.com/user-attachments/assets/9ba03399-2f23-42cb-8d61-825201082b10" />

<img width="641" height="254" alt="monoText" src="https://github.com/user-attachments/assets/6eb288b5-2dc1-4f85-bdd4-a4aebe14c2f4" />
