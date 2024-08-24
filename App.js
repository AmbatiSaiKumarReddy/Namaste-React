

//Create a root in React(Assign a root in React)
const root=ReactDOM.createRoot(document.getElementById("root"));

//Render heading in root(Helps to Put the object heading into the page by making it an html element)
//root.render(heading);


//Nested
//This will give a javascript object ,Not the html element
//This takes three arguments.1)Name of the tag,2)Attributes(Objects) 3)Children(We should use array ,if we have multiple children)
//we will use JSX in further sessions instead of writing this complicated code using createElement 
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")]));


//Render will replace the existing element that is present in the root
//root.render(parent);


//React is just a library.Not a framework.


//Episode 3


//React Element
const heading=(<h1>Heading</h1>)


//Functional Component
const Title=()=>{
    return(
        <div>
        {heading}

         <h1 className="head" tabIndex='5'>
             Namaste Using Jsx 
         </h1>
    
        
        
        </div>
        
  
    
)
}


//Functional Component
const HeadingComponent=()=>{
    return(
    <div id="container">

        {/* We can call Title in three ways.All are same */}
        {Title()}
        <Title></Title>
         <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>

    </div>)
}

root.render(<HeadingComponent/>)
