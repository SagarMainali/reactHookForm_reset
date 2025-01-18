## Exploring complicated behaviour of reset API of react-hook-form library.

#### Objective 
When the 'documentType' input field changes, only the 'documentNumber' must be reset to the specified value.

#### Problem statement 
When the 'documentType' changes, infinite trigger of useEffect hook causes infinite re-rendering.

#### Solution - 1 : 
Using 'getValues' function to not change 'documentType' when resetting but same problem occured when not using without React.Strictmode.

#### Solution - 2 : 
Using 'getValues' to not change 'documentType' when resetting + using it along with 'useRef' hook to store 'documentType' value and use it in the if statement to compare new and prev value, then only move to the reset API.