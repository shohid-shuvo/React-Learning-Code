// import  Axios  from 'axios';
// import React, { useEffect, useState } from 'react'

// const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";



// function GetAxios() {

//     const [my_data,setMy_data] = useState([]);

//     // when data is string 
//     // const [xyz, setXyz] = useState('');
    
//     useEffect(() =>{
//             async function fetchData(){
//             try{
//                 const response = await Axios.get(baseUrl);
//                 setMy_data(response.data); // sdl: Update state with the retrieved data
//             }catch(err){
//                 console.log('error: ', err);
//             }
//         };
//         fetchData();

//     },[]);

    

//   return (
//     <>
        
//         <h1>{ my_data?.id }</h1>
//         <h2>{ my_data?.title }</h2>
//         <p>{ my_data?.body }</p>

//     </>
//   )
// }

// export default GetAxios

// ********

import axios from 'axios';
import React, {useEffect,  useState } from 'react'
// const fetchUrl = "https://jsonplaceholder.typicode.com/posts"; 
const fetchUrl = "https://fakestoreapi.com/products"; 



function GetAxios() {

    const [fetchData, setFetchData] = useState([]);

    useEffect(() =>{
        async function fetchFunc() {
            try {
                const response = await axios.get(fetchUrl);
                setFetchData(response.data.slice(0, 6)); // sdl: remove .slice(0, 6) for show all post 
            } catch (error) {
                console.log(error);   
            }
        }
        fetchFunc();
    }, [])
    
    return (
        <>
            {/* when show 1 post */}
            {/* <h1>{fetchData?.id}</h1>
            <h2>{fetchData?.title}</h2>
            <p>{fetchData?.body}</p> */}

            {/* when show all the post (change url to uper)*/}
            <div className="container">
                
                <h1>All Posts </h1>
                <div className='posts_cover d-flex flex-wrap  g-2'>
                    {fetchData.map(post => ( // Map through the posts array
                        <div className="box_cvr w-25 p-2">
                            <div key={post.id} className='d-flex flex-column'  style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                            <img src={post.image} alt={post.title} className='w-100 mb-3' style={{height:'250px'}}/>
                                <h5>{post.title}</h5>
                                <h6>price: {post.price}</h6>
                                <p>{post.description.slice(0, 110)+'....'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        
        </>

    );
}

export default GetAxios

