   // Creating  a function that trims a string/ another function that converts a string to uppercase and and another that adds a template to it.


   const trim = str => str.trim();
   const toUpper = str => str.toUpperCase();
   const addTemplate = str =>`<div>${str}</div>`;

   const result = addTemplate(toUpper(trim('Hello World')));
   console.log(result);


   // Function Composition

   const result2 = addTemplate(toUpper(trim('Hello World')));
   console.log(result2);



   
   