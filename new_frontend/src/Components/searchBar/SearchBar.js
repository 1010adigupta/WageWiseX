import style from "./search.module.css";



const searchBar =() =>{
    return (
        <input type="text" className={style.search}  placeholder="Search: Check status by ID"></input>
    )
}


export default searchBar;