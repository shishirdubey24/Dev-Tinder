date 23-03-2025
body.jsx :: Routes placing with parent and Child

Point-1:: decide who is your Parent Component then-> place it on top with <Routes> </Routes>(it will not have self Closing tag)
2:: Now all the Child Components will come in between <Routes> </Routes> with self Closing Tag ::=><Routes/>

3:: NOw we can use <Outlet/> for all of child ,Now in the Browser all Child Compo will show below of the Parent i.e parent will be there with all child Components

Learning n0-2
Tailwind -> property gap-x.. means that thing will move to Right side and gap-y means to left side

Learning n0-3
apiKey: import.meta.env.VITE_API_KEY, whenever we are Using Any Key it has to be in Upper Case Only and should be in .env file

                             <----date 24-03-2025------>

Learning Login.jsx File (Redux store Updation)
1:: Whenever we are using Redux store MAke sure that it is available to the App.jsx into <Provider></Provider> tag if its not done will get uncaught error.
2:::
the reason of pont 1 is that it will not be prblem untill we make Store.js and its Slice and conncet Store with its Slice .we will face issue when we want to use The Reducer of any Slice and as we write
--> import {dispatch} from React-redux <-- this import line will give error
to avoide it first make sure that store is available into App level then use it whereever you want

Learning 2:: Only Pass Precise info to the redux Store -
1::dispatch(addUser(User)) <-- it will create error .
2:: so to avoide it only pass the relevent data fields to thata perticulart reducer into {}
dispatch(addUser({ uid: user.uid, email: user.email })) this should be the format..

Learning 3:: see lot of time we get confused that whihc npm package we should install. so be clear about it
1:: we need Provider whihc comes from react/redux
2:: we need configureStore to create Slice which comes from redux.js/toolkit
it means we need to install 2 packages react-redux and redux.js/toolkit
