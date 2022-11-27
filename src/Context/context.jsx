import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";
export const ApplergicContext = createContext();

const BASEURL ="https://back-end-proyecto.vercel.app";

export const ApplergicContextProvider =({ children }) => {

    const [alergenos, setAlergenos] = useState([]);
    const [productos, setproductos] = useState([]);
    const [usuario, setusuario] = useState([]);
    // const [blogs, setBlogs] = useState([]);

    useEffect(()=> {

        const getData = async () => {
            const {data}= await axios.get(`${BASEURL}/allergens`);

            setAlergenos(data)
            console.log(data);
        };
        getData();
    
    },[]);
    useEffect(()=> {

        const getData = async () => {
            const {data}= await axios.get(`${BASEURL}/products`);

            setproductos(data)
            
        };
        getData();
    
    },[]);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(()=> {

        const getData = async () => {
            const {data}= await axios.get(`${BASEURL}/users/${user}`);

            setusuario(data)
            
        };
        getData();
    
    },[]);


    // useEffect(()=> {

    //     const getBlogs = async () => {
    //         const blogsApi= await axios.get(`${BASEURL}/blogs`);

    //         setBlogs(blogsApi.data.blogs)



    //     };
    //     getBlogs();
    
    // },[]);

    return (
        <ApplergicContext.Provider value={{ alergenos, productos, usuario }}>
      {children}
       </ApplergicContext.Provider>
    )
    
}
