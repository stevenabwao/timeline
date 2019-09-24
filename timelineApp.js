class Timeline extends React.Component {
    render() {
    return (
    <div className="notificationsFrame">
    <div className="panel">
    <div className="header">
    <div className="menuIcon">
    <div className="dashTop"></div>
    <div className="dashBottom"></div>
    <div className="circle"></div>
    </div>
    <span className="title">Timeline</span>
    <input
    type="text"
    className="searchInput"
    placeholder="Search ..." />
    <div className="fa fa-search searchIcon"></div>
    </div>
    <div className="content">
    <div className="line"></div>
    <div className="item">
    <div className="avatar">
    <img
    alt='doug'
    src="http://www.croop.cl/UI/twitter/images/doug.jpg"
    />
    </div>
    <span className="time">
    An hour ago
    </span>
    <p>Ate lunch</p>
    </div>
    <div className="item">
    <div className="avatar">
    <img
    alt='doug'
    src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
    </div>
    <span className="time">10 am</span>
    <p>Read Day two article</p>
    </div>
    <div className="item">
    <div className="avatar">
    <img
    alt='doug'
    src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
    </div>
    <span className="time">10 am</span>
    <p>Lorem Ipsum is simply dummy text of the printing and
    typesetting industry.</p>
    </div>
    <div className="item">
    <div className="avatar">
    <img
    alt='doug'
    src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
    </div>
    <span className="time">2:21 pm</span>
    <p>timeline is so greate. software developers use them to ensure
         that the application built are easy to read and reason through them</p>
    </div>
    </div>
    </div>
    </div>
    )
    }
    }