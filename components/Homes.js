import book from '../asset/book.png'

const Homes = () => {
    return(
        <div>
        <div className="firstcard">
            <img src={book} alt="png" className="book" />
            <input type="text" placeholder="Search for Movies,Events,Plays,Sports and Activits" className="headinput" />
            <select className="select">
                <option>Coimbatore</option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Delhi</option>
                <option>Maharastra</option>
            </select>
            <button className="sign">Sign in</button>
        </div>
        </div>
    )
}

export default Homes;