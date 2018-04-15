<!doctype html>
<html lang="en">

<head>
   <%- include(header) %>
</head>

<body>

  <%- include(nav) %>

<div class="jumbotron">
  <h1 class="display-4"><%= title %></h1>
  
    


<% if(typeof params !== 'undefined') { 
var writeParams = Object.entries(params) %>
   <p>params: <%= writeParams %></p>
    <%- include(content, {myVar:params}) %>
<% } else { %>  
 <p>no params</p>
   <%- include(content) %>
<% }  %> 
   
   <%- include(footer) %>
   
   </div>
  
  </body>
</html>
