

const End = () => {
    return(
        <div className="ending">
            <p className="paraending">
                <p>List Your Show    Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow</p>
                <button className="contact">Contact today!</button>
            </p>
            <p className="query">
                <h6>24/7 CUSTOMER CARE</h6>
                <h6>RESEND BOOKING CONFIRMATION</h6>
                <h6>SUBSCRIBE TO THE NEWSLETTER</h6>
            </p>
            <img src={require('../asset/book.png')} alt="pic" className="endpic" />
            <p className='logo'>
                <img className='logo1' src={require('../asset/facebook.png')} alt='pic' />
                <img className='logo2' src={require('../asset/twitter.png')} alt='pic' />
                <img className='logo3' src={require('../asset/youtube.png')} alt='pic' />
            </p>
            <p className='rights'>copyright 2023 Bigtree Entertainment Pvt.Ltd All rights reserved</p>
            <p className='rights'>The content and images used on this site or copyright protected and copyrights vests with respective owners. The usage of the content and images on website is inded to promote the works and no endorsement of the artist shall</p>
            <p className='rights'>be implied. Unauthorized use is prohibited and punishable by law</p>
        </div>
    )
}

export default End;