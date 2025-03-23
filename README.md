date 23-03-2025
body.jsx :: Routes placing with parent and Child

Point-1:: decide who is your Parent Component then-> place it on top with <Routes> </Routes>(it will not have self Closing tag)
2:: Now all the Child Components will come in between <Routes> </Routes> with self Closing Tag ::=><Routes/>

3:: NOw we can use <Outlet/> for all of child ,Now in the Browser all Child Compo will show below of the Parent i.e parent will be there with all child Components
