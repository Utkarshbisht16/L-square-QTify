
import styles from "./create.module.css";
import React from 'react';
import Cards from "../card/card.jsx"
import { useEffect, useState } from 'react';
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Carousel from "../carousel/carousel";
import Filters from '../filters/filters'

export default function Create2({data,children, filterSource}){
    const [filters, setFilters] = useState([{key : "All", label:"All"}])
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)
    const [col, setCol] = useState('wrap');
    const [x, setX] = useState({display:'flex', flexWrap:'wrap', overflow:'Hidden', gap:40});
    
    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data} = response;
                setFilters([...filters, ...data]);
            })
        }
        console.log(data);
    },[])
    const showFilters = filters.length > 1 ;
    const cardsToRender = data?.filter((card)=>
        showFilters && selectedFilterIndex !== 0
        ? card.genre.key === filters[selectedFilterIndex].key : card
    )
    const collapse = (e) =>{
        if(col === 'nowrap'){
            setCol('wrap')
            setX({display:'flex', flexWrap:'wrap', gap:40});
        }else{
            setCol('nowrap')
        }
    }
    return(
        <div>
            <div className={styles.outer2}>
                <p className={styles.text1}>{children}</p>
                <h4 variant="text" onClick={collapse} className={styles.text2}>{col==='wrap' ? "Show All" : "Collapse"}</h4>
            </div>
            {showFilters && (
                <div className={styles.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilterIndex = {selectedFilterIndex}
                        setSelectedFilterIndex = {setSelectedFilterIndex}
                    ></Filters>
                </div>
            )}
            {data.length === 0 ?(
                <CircularProgress/>
            ):(<div className={styles.cards}>
                {col === 'nowrap' ? (
                    <div style={x}>
                    {cardsToRender.map((data) =>
                    <Cards 
                        likes={data.likes} 
                        image={data.image} 
                        id={data.id} 
                        title={data.title}
                        songs={data.songs}
                    />)}
                    </div>):(<Carousel
                                data={cardsToRender} 
                                renderComponent={(data)=> 
                                <Cards 
                                    likes={data.likes} 
                                    image={data.image} 
                                    id={data.id} 
                                    title={data.title}
                                    songs={data.songs}
                                />}
                            />)}
                </div>) }
    </div>
    )
}

            
// {data.length === 0 ?(
//     <CircularProgress/>
// ):(<div>
//     {!toggle ? (
//         <div style={x}>
//         {data.map((album) =>
//         <Cards 
//             follows={album.follows} 
//             image={album.image} 
//             id={album.id} 
//             title={album.title}
//         />)}
//         </div>):(<Carousel
//                     data={data} renderComponent={(data)=> 
//                     <Cards 
//                         follows={data.follows} 
//                         image={data.image} 
//                         id={data.id} 
//                         title={data.title}
//                     />}
//                 />)}
//     </div>) }



// <div className={styles.outer}>
//                 <div className={styles.outer2}>
//                     <p className={styles.text1}>{children}</p>
//                     <h4 variant="text" onClick={collapse} className={styles.text2}>{col==='wrap' ? "Collapse" : "Show All"}</h4>
//                 </div>
//                 {data.length === 0 ?(
//                     <CircularProgress/>
//                 ):(<div>
//                     {col === 'wrap' ? (
//                         <div style={x}>
//                         {data.map((data) =>
//                         <Cards 
//                             follows={data.follows} 
//                             image={data.image} 
//                             id={data.id} 
//                             title={data.title}
//                         />)}
//                         </div>):(<Carousel
//                                     data={data} 
//                                     renderComponent={(data)=> 
//                                     <Cards 
//                                         follows={data.follows} 
//                                         image={data.image} 
//                                         id={data.id} 
//                                         title={data.title}
//                                     />}
//                                 />)}
//                     </div>) }
//             </div>



// data = 
// description
// : 
// "Placeat distinctio ipsa voluptatibus corporis ut quo eligendi et dolores.\nDucimus eveniet nam amet ut hic expedita quisquam corporis."
// follows
// : 
// 8223
// id
// : 
// "82f11c29-eca7-41f4-b442-4ff16094dd8d"
// image
// : 
// "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
// slug
// : 
// "indolent-game"
// songs
// : 
// (43) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// title
// : 
// "Indolent Game"