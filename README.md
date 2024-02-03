# Learning React 

## Day 1

- `npm create vite@latest` creates a new react app for us
- `npm run dev` used for hosting locally
- `useState()` 
- Components , thier name must start with a capital letter

###### Rendereing an Array

- We use `arr.map((value)=>{return component})`
- The way `useState()` works is that it rerender the component in which the state variable is initialized for use its the App 
- So when we say `setTimeout` for 5 seconds it rerender the whole App after 5 seconds , tho it will change the state variable and (imp its gonna initialize the state variable again) , it will run that `setTimeout` again so basically , after every 5 sec this `setTimeout` will run and it will be a endless loop
- To counter the above problem we use something called as `useEffect(()=>{},[])` hook the code wrapped in it will be called only once and will be ignored in the subsequent rerenders

